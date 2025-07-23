const { google } = require('googleapis');

// Initialize Google Sheets API
const initializeGoogleSheets = () => {
  try {
    // Parse the private key (handle newlines properly)
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY_CONTACT?.replace(/\\n/g, '\n');
    
    if (!privateKey || !process.env.GOOGLE_SHEETS_CLIENT_EMAIL_CONTACT) {
      throw new Error('Missing required Google Sheets credentials for contact form');
    }
    
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: 'service_account',
        private_key: privateKey,
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL_CONTACT,
        client_id: process.env.GOOGLE_SHEETS_CLIENT_ID_CONTACT,
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    return google.sheets({ version: 'v4', auth });
  } catch (error) {
    console.error('Error initializing Google Sheets for contact form:', error);
    throw error;
  }
};

// Function to append data to Google Sheets
const appendToGoogleSheets = async (data) => {
  try {
    const sheets = initializeGoogleSheets();
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID_CONTACT;

    if (!spreadsheetId) {
      throw new Error('Google Sheets Spreadsheet ID for contact form not configured');
    }

    console.log('Attempting to append contact form data to spreadsheet:', spreadsheetId);

    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.company || '',
      data.phone || '',
      data.service || '',
      data.message || '',
      data.source || 'Website Contact Form'
    ];

    console.log('Contact form row data prepared:', rowData);

    // First, try to get spreadsheet info to verify access
    try {
      const spreadsheetInfo = await sheets.spreadsheets.get({
        spreadsheetId,
      });
      console.log('✅ Successfully accessed contact form spreadsheet:', spreadsheetInfo.data.properties.title);
    } catch (accessError) {
      console.error('❌ Cannot access contact form spreadsheet:', accessError.message);
      throw new Error(`Cannot access contact form spreadsheet. Please check permissions and sharing settings. Error: ${accessError.message}`);
    }

    // Append the data to the spreadsheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:H',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [rowData],
      },
    });

    console.log('✅ Contact form data successfully added to Google Sheets:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Error adding contact form data to Google Sheets:', error);
    
    // Provide more specific error messages
    if (error.code === 403) {
      throw new Error('Permission denied. Please ensure the service account has edit access to the contact form spreadsheet.');
    } else if (error.code === 404) {
      throw new Error('Contact form spreadsheet not found. Please check the spreadsheet ID.');
    } else {
      throw error;
    }
  }
};

// Function to send email notification (placeholder for future implementation)
const sendEmailNotification = async (data) => {
  // TODO: Implement email notification
  // You can use services like:
  // - SendGrid
  // - Mailgun
  // - AWS SES
  // - Nodemailer with SMTP
  
  console.log('Email notification would be sent for contact form submission:', data.timestamp);
  return true;
};

exports.handler = async (event, context) => {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the incoming JSON data
    const data = JSON.parse(event.body);
    
    // Add timestamp if not provided
    if (!data.timestamp) {
      data.timestamp = new Date().toISOString();
    }

    console.log('Contact form submission received:', {
      timestamp: data.timestamp,
      name: data.name,
      email: data.email,
      company: data.company,
      service: data.service
    });

    // Generate unique submission ID
    const submissionId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Save to Google Sheets
    let sheetsSuccess = false;
    let sheetsError = null;
    
    try {
      await appendToGoogleSheets(data);
      sheetsSuccess = true;
      console.log('✅ Contact form data successfully saved to Google Sheets');
    } catch (error) {
      sheetsError = error.message;
      console.error('❌ Failed to save contact form data to Google Sheets:', error);
    }

    // Send email notification (optional)
    let emailSuccess = false;
    try {
      await sendEmailNotification(data);
      emailSuccess = true;
      console.log('✅ Contact form email notification sent');
    } catch (error) {
      console.error('❌ Failed to send contact form email notification:', error);
    }

    // Return response
    const response = {
      success: true,
      message: 'Contact form submission received successfully',
      submissionId,
      integrations: {
        googleSheets: sheetsSuccess,
        email: emailSuccess
      }
    };

    // If Google Sheets failed, include error info but still return success
    // (the submission was received, even if storage failed)
    if (!sheetsSuccess) {
      response.warnings = [`Google Sheets integration failed: ${sheetsError}`];
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(response)
    };

  } catch (error) {
    console.error('Error processing contact form submission:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: false,
        error: 'Internal server error',
        message: 'Failed to process contact form submission'
      })
    };
  }
};