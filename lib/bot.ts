import axiosInstance from "./axios";

const telegramApi = axiosInstance()
export const  sendMessage = async (messageObj: any, text: string) => {

    return telegramApi.get('sendMessage', {
        chat_id: messageObj.chat.id,
        text: text,
    });
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