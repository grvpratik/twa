import axios from "axios";
import telegramApi from "./axios";

interface TelegramChat {
    id: number;
}


interface TelegramMessage {
    chat: TelegramChat;
}

export const sendMessage = async (messageObj: TelegramMessage, text: string) => {
    try {
        console.log('Sending message:', { chatId: messageObj.chat.id, text });
        const response = await telegramApi.get('sendMessage', {
            chat_id: messageObj.chat.id,
            text: text,
        });
        console.log('Message sent successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);
        if (axios.isAxiosError(error)) {
            console.error('Axios error details:', error.response?.data);
        }
        throw error; // Re-throw the error so it can be caught in the API route
    }
}
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