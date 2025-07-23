const { google } = require('googleapis');

// Initialize Google Sheets API
const initializeGoogleSheets = () => {
  try {
    // Parse the private key (handle newlines properly)
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY_CONTACT?.replace(/\\n/g, '\n');
    
    if (!privateKey) {
      console.error('❌ initializeGoogleSheets: GOOGLE_SHEETS_PRIVATE_KEY_CONTACT is missing or empty.');
      return { success: false, error: 'Missing GOOGLE_SHEETS_PRIVATE_KEY_CONTACT environment variable.' };
    }
    if (!process.env.GOOGLE_SHEETS_CLIENT_EMAIL_CONTACT) {
      console.error('❌ initializeGoogleSheets: GOOGLE_SHEETS_CLIENT_EMAIL_CONTACT is missing or empty.');
      return { success: false, error: 'Missing GOOGLE_SHEETS_CLIENT_EMAIL_CONTACT environment variable.' };
    }
    if (!process.env.GOOGLE_SHEETS_SPREADSHEET_ID_CONTACT) {
      console.error('❌ initializeGoogleSheets: GOOGLE_SHEETS_SPREADSHEET_ID_CONTACT is missing or empty.');
      return { success: false, error: 'Missing GOOGLE_SHEETS_SPREADSHEET_ID_CONTACT environment variable.' };
    }
    if (!process.env.GOOGLE_SHEETS_CLIENT_ID_CONTACT) {
      console.error('Missing Google Sheets credentials:', {
        hasClientId: !!process.env.GOOGLE_SHEETS_CLIENT_ID_CONTACT
      });
      return { success: false, error: 'Missing required Google Sheets credentials for contact form' };
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

    const sheets = google.sheets({ version: 'v4', auth });
    console.log('✅ Google Sheets API initialized successfully for contact form');
    return { success: true, sheets };
  } catch (error) {
    console.error('❌ Error initializing Google Sheets for contact form:', error.message);
    return { success: false, error: `Failed to initialize Google Sheets API: ${error.message || 'Unknown error'}` };
  }
};

// Function to append data to Google Sheets
const appendToGoogleSheets = async (data) => {
  try {
    const initResult = initializeGoogleSheets();
    
    if (!initResult.success) {
      console.error('❌ Google Sheets initialization failed:', initResult.error);
      return { success: false, error: initResult.error };
    }
    
    const sheets = initResult.sheets;
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID_CONTACT;

    if (!spreadsheetId) {
      console.error('❌ Google Sheets Spreadsheet ID not configured');
      return { success: false, error: 'Google Sheets Spreadsheet ID for contact form not configured' };
    }

    console.log('📊 Attempting to append contact form data to spreadsheet:', spreadsheetId);

    // Prepare the row data with proper formatting
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

    console.log('📝 Contact form row data prepared:', {
      timestamp: rowData[0],
      name: rowData[1],
      email: rowData[2],
      company: rowData[3],
      phone: rowData[4],
      service: rowData[5],
      messageLength: rowData[6].length,
      source: rowData[7]
    });

    // First, verify spreadsheet access
    try {
      const spreadsheetInfo = await sheets.spreadsheets.get({
        spreadsheetId,
      });
      console.log('✅ Successfully accessed contact form spreadsheet:', spreadsheetInfo.data.properties.title);
    } catch (accessError) {
      console.error('❌ Cannot access contact form spreadsheet:', accessError.message);
      return { 
        success: false, 
        error: `Cannot access contact form spreadsheet. Please check permissions and sharing settings. Error: ${accessError.message}` 
      };
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

    console.log('✅ Contact form data successfully added to Google Sheets');
    console.log('📊 Response details:', {
      updatedRows: response.data.updates?.updatedRows,
      updatedRange: response.data.updates?.updatedRange
    });
    
    return { success: true, data: response.data };
  } catch (error) {
    console.error('❌ Error adding contact form data to Google Sheets:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Unknown error occurred while saving to Google Sheets';
    
    if (error.code === 403) {
      errorMessage = 'Permission denied. Please ensure the service account has edit access to the contact form spreadsheet.';
    } else if (error.code === 404) {
      errorMessage = 'Contact form spreadsheet not found. Please check the spreadsheet ID.';
    } else if (error.code === 400) {
      errorMessage = 'Invalid request. Please check the spreadsheet format and range.';
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    return { success: false, error: errorMessage };
  }
};

// Function to validate form data
const validateFormData = (data) => {
  const errors = [];
  
  if (!data.name || data.name.trim().length === 0) {
    errors.push('Name is required');
  }
  
  if (!data.email || data.email.trim().length === 0) {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Invalid email format');
  }
  
  if (!data.message || data.message.trim().length === 0) {
    errors.push('Message is required');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

exports.handler = async (event, context) => {
  console.log('🚀 Contact form submission handler started');
  console.log('📥 Request method:', event.httpMethod);
  console.log('🌍 Environment check:', {
    hasSpreadsheetId: !!process.env.GOOGLE_SHEETS_SPREADSHEET_ID_CONTACT,
    hasClientEmail: !!process.env.GOOGLE_SHEETS_CLIENT_EMAIL_CONTACT,
    hasPrivateKey: !!process.env.GOOGLE_SHEETS_PRIVATE_KEY_CONTACT,
    hasClientId: !!process.env.GOOGLE_SHEETS_CLIENT_ID_CONTACT
  });

  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    console.log('✅ Handling CORS preflight request');
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
    console.log('❌ Method not allowed:', event.httpMethod);
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        success: false,
        error: 'Method not allowed',
        message: 'Only POST requests are accepted'
      })
    };
  }

  try {
    // Parse the incoming JSON data
    let data;
    try {
      data = JSON.parse(event.body);
      console.log('📝 Parsed contact form data:', {
        name: data.name,
        email: data.email,
        company: data.company,
        phone: data.phone,
        service: data.service,
        messageLength: data.message?.length || 0,
        source: data.source
      });
    } catch (parseError) {
      console.error('❌ Error parsing request body:', parseError);
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          success: false,
          error: 'Invalid JSON in request body',
          message: 'Please check your request format'
        })
      };
    }
    
    // Validate form data
    const validation = validateFormData(data);
    if (!validation.isValid) {
      console.log('❌ Form validation failed:', validation.errors);
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          success: false,
          error: 'Validation failed',
          message: validation.errors.join(', ')
        })
      };
    }

    // Add timestamp if not provided
    if (!data.timestamp) {
      data.timestamp = new Date().toISOString();
    }

    // Generate unique submission ID
    const submissionId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    console.log('🆔 Generated submission ID:', submissionId);

    // Save to Google Sheets
    console.log('💾 Attempting to save to Google Sheets...');
    const sheetsResult = await appendToGoogleSheets(data);
    
    if (sheetsResult.success) {
      console.log('✅ Contact form data successfully saved to Google Sheets');
    } else {
      console.error('❌ Failed to save contact form data to Google Sheets:', sheetsResult.error);
    }

    // Prepare response
    const response = {
      success: true,
      message: 'Contact form submission received successfully',
      submissionId,
      integrations: {
        googleSheets: sheetsResult.success
      }
    };

    console.log('✅ Netlify function execution path completed. Preparing final response.');
    // If Google Sheets failed, include warning but still return success
    // (the submission was received, even if storage failed)
    if (!sheetsResult.success) {
      response.warnings = [`Google Sheets integration failed: ${sheetsResult.error}`];
      console.log('⚠️ Returning success with warnings due to Google Sheets failure');
    }

    console.log('✅ Contact form submission completed successfully');
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
    console.error('❌ Unexpected error processing contact form submission:', error);
    
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
        message: 'Failed to process contact form submission. Please try again or contact support.'
      })
    };
  }
};