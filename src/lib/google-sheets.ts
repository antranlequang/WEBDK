import { google } from 'googleapis';

// Khởi tạo Google Sheets API client
// Ưu tiên dùng credentials từ env (client email + private key). Fallback sang keyFile.
const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY;
const normalizedPrivateKey = rawPrivateKey ? rawPrivateKey.replace(/\\n/g, '\n') : undefined;

const auth = new google.auth.GoogleAuth(
  clientEmail && normalizedPrivateKey
    ? {
        credentials: {
          client_email: clientEmail,
          private_key: normalizedPrivateKey,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      }
    : {
        keyFile: process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE || './service-account-key.json',
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      }
);

const sheets = google.sheets({ version: 'v4', auth });

export interface ApplicationData {
  fullName: string;
  email: string;
  phone: string;
  facebookLink: string;
  reason: string;
  expectation: string;
  situation: string;
  department: string;
  portraitPhoto?: File;
}

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

export async function appendApplicationToSheet(applicationData: ApplicationData) {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = process.env.GOOGLE_SHEET_RANGE || 'Sheet1!A:J'; // A:J cho 10 cột (bao gồm thông tin ảnh)

    if (!spreadsheetId || spreadsheetId === 'demo_sheet_id_replace_with_real_one') {
      console.warn('Google Sheets not configured properly. Data would be saved to:', applicationData);
      return { success: true, message: 'Demo mode: Google Sheets integration not configured' };
    }

    // Chuẩn bị dữ liệu để ghi vào sheet
    const values = [
      [
        new Date().toISOString(), // Timestamp
        applicationData.fullName,
        applicationData.email,
        applicationData.phone,
        applicationData.facebookLink,
        applicationData.reason,
        applicationData.expectation,
        applicationData.situation,
        applicationData.department,
        applicationData.portraitPhoto ? 'Có ảnh' : 'Không có ảnh', // Thông tin về ảnh
      ]
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    console.log('Data appended successfully:', response.data);
    const sheetUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}`;
    return { success: true, message: 'Data written to Google Sheet successfully', sheetUrl };

  } catch (error) {
    console.error('Error writing to Google Sheet:', error);
    throw new Error(`Failed to write to Google Sheet: ${error}`);
  }
}

export async function appendContactToSheet(contactData: ContactData) {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = process.env.GOOGLE_SHEET_RANGE_CONTACT || 'Contact!A:D'; // A:D cho 4 cột

    if (!spreadsheetId || spreadsheetId === 'demo_sheet_id_replace_with_real_one') {
      console.warn('Google Sheets not configured properly. Data would be saved to:', contactData);
      return { success: true, message: 'Demo mode: Google Sheets integration not configured' };
    }

    // Chuẩn bị dữ liệu để ghi vào sheet
    const values = [
      [
        new Date().toISOString(), // Timestamp
        contactData.name,
        contactData.email,
        contactData.message,
      ]
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    console.log('Contact data appended successfully:', response.data);
    const sheetUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}`;
    return { success: true, message: 'Contact data written to Google Sheet successfully', sheetUrl };

  } catch (error) {
    console.error('Error writing contact data to Google Sheet:', error);
    throw new Error(`Failed to write contact data to Google Sheet: ${error}`);
  }
}

export async function getSheetData() {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = process.env.GOOGLE_SHEET_RANGE || 'Sheet1!A:I';

    if (!spreadsheetId || spreadsheetId === 'demo_sheet_id_replace_with_real_one') {
      console.warn('Google Sheets not configured properly. Returning demo data.');
      return [
        ['Timestamp', 'Họ và Tên', 'Email', 'Phone', 'Facebook', 'Lý do', 'Kỳ vọng', 'Tình huống', 'Ban'],
        ['2024-01-01T00:00:00.000Z', 'Demo User', 'demo@example.com', '0123456789', 'https://facebook.com/demo', 'Demo reason', 'Demo expectation', 'Demo situation', 'Demo department']
      ];
    }

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    return response.data.values || [];
  } catch (error) {
    console.error('Error reading from Google Sheet:', error);
    throw new Error(`Failed to read from Google Sheet: ${error}`);
  }
}
