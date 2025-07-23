const { google } = require('googleapis');

// Initialize Google Sheets API
// Added more detailed logging for initialization process
const initializeGoogleSheets = () => {
  try {
    const authString = process.env.GOOGLE_SHEETS_AUTH_CONTACT;
    if (!authString) {
      console.error('❌ initializeGoogleSheets: GOOGLE_SHEETS_AUTH_CONTACT environment variable is missing.');
      return { success: false, error: 'Missing GOOGLE_SHEETS_AUTH_CONTACT environment variable. Cannot initialize Google Sheets.' };
    }

    let credentials;
    try {
      credentials = JSON.parse(authString);
      // Replace escaped newlines in private_key if they exist
      if (credentials.private_key) {
        credentials.private_key = credentials.private_key.replace(/\\n/g, '\n');
      }
    } catch (parseError) {
      console.error('❌ initializeGoogleSheets: Failed to parse GOOGLE_SHEETS_AUTH_CONTACT JSON:', parseError.message);
      return { success: false, error: 'Invalid JSON in GOOGLE_SHEETS_AUTH_CONTACT environment variable.' };
    }

    if (!credentials.private_key || !credentials.client_email || !credentials.client_id) {
      console.error('❌ initializeGoogleSheets: Missing required keys (private_key, client_email, client_id) in GOOGLE_SHEETS_AUTH_CONTACT.');
      return { success: false, error: 'Incomplete Google Sheets credentials in GOOGLE_SHEETS_AUTH_CONTACT.' };
    }
    
    const auth = new google.auth.GoogleAuth({
      credentials: { ...credentials, type: 'service_account' },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    console.log('✅ GoogleAuth client created.');
    const sheets = google.sheets({ version: 'v4', auth });
    console.log('✅ Google Sheets API initialized successfully for contact form');
    return { success: true, sheets };
  } catch (error) {
    console.error('❌ Error initializing Google Sheets for contact form:', error.message);
    console.error('Stack trace:', error.stack);
    return { success: false, error: `Failed to initialize Google Sheets API: ${error.message || 'Unknown error'}` };
  }
};

// Function to append data to Google Sheets
const appendToGoogleSheets = async (data) => {
  try {
    const initResult = initializeGoogleSheets();
    
    if (!initResult.success) {
      console.error('❌ appendToGoogleSheets: Google Sheets initialization failed:', initResult.error);
      return { success: false, error: initResult.error };
    }
    
    const sheets = initResult.sheets;
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID_CONTACT;

    console.log('📊 appendToGoogleSheets: Attempting to append contact form data.');

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

    console.log('📝 appendToGoogleSheets: Contact form row data prepared:', {
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
      console.log('🔍 appendToGoogleSheets: Verifying spreadsheet access...');
      const spreadsheetInfo = await sheets.spreadsheets.get({
        spreadsheetId,
      });
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

    console.log('✅ appendToGoogleSheets: Contact form data successfully added to Google Sheets.');
    console.log('📊 appendToGoogleSheets: Google Sheets API response details:', {
      updatedRows: response.data.updates?.updatedRows,
      updatedRange: response.data.updates?.updatedRange
    });
    
    return { success: true, data: response.data };
  } catch (error) {
    console.error('❌ appendToGoogleSheets: Error adding contact form data to Google Sheets:', error);
    
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
  
  console.log('🔍 validateFormData: Starting form data validation.');
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
  console.log(`🔍 validateFormData: Validation complete. Is valid: ${errors.length === 0}, Errors: ${errors.join(', ')}`);
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Main handler function
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
    console.warn('❌ Method not allowed:', event.httpMethod);
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
      console.log('📝 Parsing request body...');
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
      console.error('❌ Error parsing request body:', parseError.message);
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
    if (!validation.isValid) { // If validation fails, return 400
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

    // Generate a simple submission ID for logging purposes
    const submissionId = `contact-${Date.now()}`;
    console.log(`🆔 Generated submission ID: ${submissionId}`);

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

    // If Google Sheets failed, include warning but still return success
    // (the submission was received, even if storage failed)
    if (!sheetsResult.success) {
      response.warnings = [`Google Sheets integration failed: ${sheetsResult.error}`];
      console.log('⚠️ Google Sheets integration failed, but form submission was received. Returning success with warnings.');
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
    console.error('❌ Unexpected error processing contact form submission:', error.message);
    
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