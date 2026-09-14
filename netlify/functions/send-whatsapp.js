// Netlify serverless function: forwards the portfolio contact form to your WhatsApp via Twilio.
// Required environment variables (set in Netlify dashboard, never in the repo):
//   TWILIO_ACCOUNT_SID   - starts with "AC..."
//   TWILIO_AUTH_TOKEN    - secret auth token from the Twilio console
//   TWILIO_WHATSAPP_FROM - Twilio's WhatsApp sender, e.g. "whatsapp:+14155238886" (sandbox) or your approved number
//   TWILIO_WHATSAPP_TO   - your own WhatsApp number to receive messages, e.g. "whatsapp:+9170XXXXXXXX"

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_FROM, TWILIO_WHATSAPP_TO } = process.env;

  if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_WHATSAPP_FROM || !TWILIO_WHATSAPP_TO) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Server is not configured for WhatsApp delivery' }) };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) };
  }

  const { name, email, message, company } = payload;

  // Honeypot: real users never fill this hidden field, bots often do.
  if (company) {
    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  }

  if (!name || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Name, email and message are required' }) };
  }
  if (name.length > 200 || email.length > 200 || message.length > 2000) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Field too long' }) };
  }

  const bodyText = `New portfolio contact form message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

  const params = new URLSearchParams({
    From: TWILIO_WHATSAPP_FROM,
    To: TWILIO_WHATSAPP_TO,
    Body: bodyText
  });

  try {
    const response = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`,
      {
        method: 'POST',
        headers: {
          Authorization: 'Basic ' + Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
      }
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Twilio error:', response.status, errorBody);
      return { statusCode: 502, body: JSON.stringify({ error: 'Failed to send WhatsApp message' }) };
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error('Twilio request failed:', err);
    return { statusCode: 502, body: JSON.stringify({ error: 'Failed to send WhatsApp message' }) };
  }
};
