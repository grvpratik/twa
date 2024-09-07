import { sendMessage } from '@/lib/bot';
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
            const text = message.text || "";

            if (text.charAt(0) === "/") {
                const command = text.substr(1);

                switch (command) {
                    case "start":
                        await sendMessage(chatId, "Hi! I am here to help you 🥰");
                        break;
                    default:
                        await sendMessage(chatId, "Invalid command");
                }
            } else {
                await sendMessage(chatId, text);
            }
        }

        // Return a 200 status to acknowledge Telegram
        return NextResponse.json({ status: 'ok' }, { status: 200 });

    } catch (error) {
        console.error('Error processing Telegram update:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    return NextResponse.json({ message: 'api/telegram' }, { status: 200 });
}
