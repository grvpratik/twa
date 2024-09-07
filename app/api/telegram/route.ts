// app/api/telegram/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming request body (Telegram sends JSON data)
    const body = await request.json();

    // Extract important data from the Telegram update
    const { message } = body;

    if (message) {
      const chatId = message.chat.id;
      const text = message.text;

      // Handle the message (e.g., reply to the user)
      console.log(`Received message from chat ${chatId}: ${text}`);

      // Here you could call the Telegram API to send a response back, e.g., via fetch

      // Return a 200 status to acknowledge Telegram
      return NextResponse.json({ status: 'ok' }, { status: 200 });
    }

    // If there's no message in the update, return a bad request response
    return NextResponse.json({ error: 'No message received' }, { status: 400 });

  } catch (error) {
    console.error('Error processing Telegram update:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
