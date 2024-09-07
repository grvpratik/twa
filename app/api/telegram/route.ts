import { sendMessage } from '@/lib/bot';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';



export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        console.log('Received Telegram update:', JSON.stringify(body, null, 2));

        const { message } = body;

        if (message && message.chat && message.chat.id) {
            const chatId = message.chat.id;
            const text = message.text || "";
            console.log({ chatId, text });

            if (text.charAt(0) === "/") {
                const command = text.substr(1);

                try {
                    switch (command) {
                        case "start":
                            await sendMessage(chatId, "Hi! I am here to help you 🥰");
                            break;
                        default:
                            await sendMessage(chatId, "Invalid command");
                    }
                } catch (sendError) {
                    console.error('Error sending message:', sendError);
                    return NextResponse.json({ error: 'Error sending message' }, { status: 500 });
                }
            } else {
                try {
                    await sendMessage(chatId, text);
                } catch (sendError) {
                    console.error('Error sending message:', sendError);
                    return NextResponse.json({ error: 'Error sending message' }, { status: 500 });
                }
            }
        } else {
            console.error('Invalid message structure:', message);
            return NextResponse.json({ error: 'Invalid message structure' }, { status: 400 });
        }

        return NextResponse.json({ status: 'ok' }, { status: 200 });
    } catch (error) {
        console.error('Error processing Telegram update:', error);
        if (error instanceof Error) {
            console.error(error.stack);
        }
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    return NextResponse.json({ message: 'api/telegram' }, { status: 200 });
}