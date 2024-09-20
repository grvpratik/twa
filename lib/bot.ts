import axios, { AxiosError } from 'axios';



const TELEGRAM_API_URL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;

// Helper function to send messages to Telegram users
export const sendMessage = async (chatId: any, text: string, options = {}) => {
    try {
        const response = await axios.post(`${TELEGRAM_API_URL}/sendMessage`, {
            chat_id: chatId,
            text: text,
            ...options,
        });
        return response.data;
    } catch (error) {
        console.error('Error sending message to Telegram:', error.response?.data || error.message);
        throw error;
    }
};

// Helper function to edit the inline keyboard (disable buttons)
export const editMessageReplyMarkup = async (chatId: any, messageId: any) => {
    try {
        const response = await axios.post(`${TELEGRAM_API_URL}/editMessageReplyMarkup`, {
            chat_id: chatId,
            message_id: messageId,
            reply_markup: {
                inline_keyboard: [], // Empty keyboard to disable buttons
            },
        });
        console.log('Inline keyboard disabled:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error editing message reply markup:', error.response?.data || error.message);
        throw error;
    }
};

// Helper function to delete a message from the chat
export const deleteMessage = async (chatId:number, messageId:string) => {
    try {
        const response = await axios.post(`${TELEGRAM_API_URL}/deleteMessage`, {
            chat_id: chatId,
            message_id: messageId,
        });
        console.log('Message deleted:', response.data);
        return response.data;
    } catch (error) {
        error instanceof AxiosError ? console.error('Error deleting message from Telegram:', error.response?.data || error.message):null
        throw error;
    }
};

// };
// const handleMessage = (messageObj: any) => {

//     const messageText: string = messageObj.text || ""
//     if (messageText.charAt(0) === "/") {

//         const command = messageText.substr(1);
//         switch (command) {
//             case "start":
//                 return sendMessage(messageObj, "Hi! i am how can i help you 🥰")
//             default:
//                 return sendMessage(messageObj, "Invalid command ")


//         }
//     } else {
//         return sendMessage(messageObj, messageText)
//     }

// }

// export default handleMessage;

// import { sendMessage } from '@/lib/bot'; // Import your helper function to send messages
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// // This will handle Telegram webhook updates
// export async function POST(request) {
//     try {
//         const body = await request.json();
//         console.log('Received Telegram update:', JSON.stringify(body, null, 2));

//         const { message, callback_query } = body;

//         // Handle command messages (e.g., /start)
//         if (message && message.chat && message.text) {
//             const chatId = message.chat.id;
//             const text = message.text;

//             if (text.charAt(0) === '/') {
//                 const command = text.substr(1); // Remove the leading "/"
//                 switch (command) {
//                     case 'start':
//                         await sendMessage(chatId, "Hi! Choose an option:", {
//                             reply_markup: {
//                                 inline_keyboard: [
//                                     [{ text: 'Option 1', callback_data: 'option1' }],
//                                     [{ text: 'Option 2', callback_data: 'option2' }],
//                                 ],
//                             },
//                         });
//                         break;
//                     default:
//                         await sendMessage(chatId, "Unknown command.");
//                 }
//             }
//         }

//         // Handle callback queries (user clicked an inline button)
//         if (callback_query) {
//             const chatId = callback_query.message.chat.id;
//             const data = callback_query.data; // This is the callback_data sent with the button

//             switch (data) {
//                 case 'option1':
//                     await sendMessage(chatId, 'You chose Option 1. Now select:', {
//                         reply_markup: {
//                             inline_keyboard: [
//                                 [{ text: 'Sub-option A', callback_data: 'suboption_a' }],
//                                 [{ text: 'Sub-option B', callback_data: 'suboption_b' }],
//                             ],
//                         },
//                     });
//                     break;
//                 case 'option2':
//                     await sendMessage(chatId, 'You chose Option 2. Now select:', {
//                         reply_markup: {
//                             inline_keyboard: [
//                                 [{ text: 'Sub-option C', callback_data: 'suboption_c' }],
//                                 [{ text: 'Sub-option D', callback_data: 'suboption_d' }],
//                             ],
//                         },
//                     });
//                     break;
//                 case 'suboption_a':
//                     await sendMessage(chatId, 'You selected Sub-option A.');
//                     break;
//                 case 'suboption_b':
//                     await sendMessage(chatId, 'You selected Sub-option B.');
//                     break;
//                 case 'suboption_c':
//                     await sendMessage(chatId, 'You selected Sub-option C.');
//                     break;
//                 case 'suboption_d':
//                     await sendMessage(chatId, 'You selected Sub-option D.');
//                     break;
//                 default:
//                     await sendMessage(chatId, 'Unknown selection.');
//             }
//         }

//         return NextResponse.json({ status: 'ok' }, { status: 200 });
//     } catch (error) {
//         console.error('Error processing Telegram update:', error);
//         return NextResponse.json({ error: 'Server error' }, { status: 500 });
//     }
// }

// // Health check or simple GET method for the endpoint
// export async function GET() {
//     return NextResponse.json({ message: 'Telegram webhook is working' }, { status: 200 });
// }
