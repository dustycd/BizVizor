exports.handler = async (event, context) => {
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

  try {
    // Parse the incoming JSON data
    const data = JSON.parse(event.body);
    
    console.log('Calculator submission received:', {
      timestamp: new Date().toISOString(),
      businessActivity: data.businessActivity,
      mainReason: data.mainReason,
      ownersCount: data.ownersCount,
      visaCount: data.visaCount,
      dependantsVisa: data.dependantsVisa,
      businessType: data.businessType,
      jurisdiction: data.jurisdiction,
      officeType: data.officeType,
      additionalServices: data.additionalServices,
      packageType: data.packageType,
      totalCost: data.totalCost,
      costBreakdown: data.costBreakdown
    });

    // Here you would typically:
    // 1. Save to a database
    // 2. Send to Google Sheets
    // 3. Send email notifications
    // 4. Integrate with CRM
    
    // For now, we'll just log the data and return success
    // TODO: Add Google Sheets integration
    // TODO: Add email notifications
    // TODO: Add CRM integration

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: true,
        message: 'Calculator data received successfully',
        submissionId: `calc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      })
    };

  } catch (error) {
    console.error('Error processing calculator submission:', error);
    
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
        message: 'Failed to process calculator submission'
      })
    };
  }
};