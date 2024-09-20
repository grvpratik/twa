// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import axios, { AxiosError } from 'axios';

// // Define types and enums
// enum Platform {
//     YOUTUBE = 'youtube',
//     TWITTER = 'twitter',
//     DISCORD = 'discord',
//     TELEGRAM = 'telegram',
// }

// enum Action {
//     SUBSCRIBE = 'subscribe',
//     LIKE_COMMENT = 'like_comment',
//     FOLLOW = 'follow',
//     LIKE_RETWEET = 'like_retweet',
//     JOIN = 'join',
// }

// enum State {
//     INITIAL = 'initial',
//     PLATFORM_SELECTED = 'platform_selected',
//     ACTION_SELECTED = 'action_selected',
//     URL_REQUIRED = 'url_required',
//     PRICING = 'pricing',
//     CONFIRMATION = 'confirmation',
// }

// interface PlatformAction {
//     platform: Platform;
//     action: Action;
// }

// interface UserState {
//     state: State;
//     platformAction?: PlatformAction;
//     url?: string;
//     price?: string;
// }

// // In-memory store for user states (replace with a database in production)
// const userStates: Map<number, UserState> = new Map();

// const TELEGRAM_API_URL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;

// // Helper functions
// async function sendMessage(chatId: number, text: string, options = {}) {
//     try {
//         const response = await axios.post(`${TELEGRAM_API_URL}/sendMessage`, {
//             chat_id: chatId,
//             text,
//             ...options,
//         });
//         return response.data;
//     } catch (error) {
//      error instanceof AxiosError?   console.error('Error sending message to Telegram:', error.response?.data || error.message):null
//         throw error;
//     }
// }

// async function editMessageReplyMarkup(chatId: number, messageId: number) {
//     try {
//         const response = await axios.post(`${TELEGRAM_API_URL}/editMessageReplyMarkup`, {
//             chat_id: chatId,
//             message_id: messageId,
//             reply_markup: {
//                 inline_keyboard: [],
//             },
//         });
//         return response.data;
//     } catch (error) {
//         error instanceof AxiosError ?console.error('Error editing message reply markup:', error.response?.data || error.message):null
//         throw error;
//     }
// }

// function getInitialKeyboard() {
//     return {
//         reply_markup: {
//             inline_keyboard: [
//                 [{ text: 'Youtube 🎥', callback_data: Platform.YOUTUBE }],
//                 [{ text: 'X (twitter) 🐦', callback_data: Platform.TWITTER }],
//                 [{ text: 'Discord 💬', callback_data: Platform.DISCORD }],
//                 [{ text: 'Telegram 📩', callback_data: Platform.TELEGRAM }],
//             ],
//         },
//     };
// }

// function getPlatformActionKeyboard(platform: Platform) {
//     switch (platform) {
//         case Platform.YOUTUBE:
//             return {
//                 reply_markup: {
//                     inline_keyboard: [
//                         [{ text: 'Subscribe', callback_data: `${platform}_${Action.SUBSCRIBE}` }],
//                         [{ text: 'Like & comment', callback_data: `${platform}_${Action.LIKE_COMMENT}` }],
//                     ],
//                 },
//             };
//         case Platform.TWITTER:
//             return {
//                 reply_markup: {
//                     inline_keyboard: [
//                         [{ text: 'Follow', callback_data: `${platform}_${Action.FOLLOW}` }],
//                         [{ text: 'Like & retweet', callback_data: `${platform}_${Action.LIKE_RETWEET}` }],
//                     ],
//                 },
//             };
//         case Platform.DISCORD:
//         case Platform.TELEGRAM:
//             return {
//                 reply_markup: {
//                     inline_keyboard: [
//                         [{ text: 'Join', callback_data: `${platform}_${Action.JOIN}` }],
//                     ],
//                 },
//             };
//     }
// }

// function getPricingKeyboard() {
//     return {
//         reply_markup: {
//             inline_keyboard: [
//                 [{ text: '$50', callback_data: 'price_50' }],
//                 [{ text: '$100', callback_data: 'price_100' }],
//             ],
//         },
//     };
// }

// function getConfirmationKeyboard() {
//     return {
//         reply_markup: {
//             inline_keyboard: [
//                 [{ text: 'Confirm', callback_data: 'confirm' }],
//                 [{ text: 'Cancel', callback_data: 'cancel' }],
//             ],
//         },
//     };
// }

// function validateUrl(url: string, platform: Platform): boolean {
//     const platformDomains = {
//         [Platform.YOUTUBE]: 'youtube.com',
//         [Platform.TWITTER]: 'twitter.com',
//         [Platform.DISCORD]: 'discord.gg',
//         [Platform.TELEGRAM]: 't.me',
//     };

//     try {
//         const parsedUrl = new URL(url);
//         return parsedUrl.hostname.includes(platformDomains[platform]);
//     } catch {
//         return false;
//     }
// }

// // Main handler
// export async function POST(request: NextRequest) {
//     try {
//         const body = await request.json();
//         console.log('Received Telegram update:', JSON.stringify(body, null, 2));

//         const { message, callback_query } = body;

//         if (message && message.chat && message.text) {
//             const chatId = message.chat.id;
//             const text = message.text;

//             if (text.startsWith('/')) {
//                 const command = text.slice(1);
//                 if (command === 'start') {
//                     userStates.set(chatId, { state: State.INITIAL });
//                     await sendMessage(chatId, "Hi! Choose a Platform:", getInitialKeyboard());
//                 } else {
//                     await sendMessage(chatId, "Unknown command.");
//                 }
//             } else {
//                 const userState = userStates.get(chatId);
//                 if (userState && userState.state === State.URL_REQUIRED && userState.platformAction) {
//                     if (validateUrl(text, userState.platformAction.platform)) {
//                         console.log("validate url", userState)
//                         userState.url = text;
//                         userState.state = State.PRICING;
//                         userStates.set(chatId, userState);
//                         await sendMessage(chatId, "URL validated. Choose a price:", getPricingKeyboard());
//                     } else {
//                         await sendMessage(chatId, "Invalid URL. Please try again with a valid URL for the selected platform.");
//                     }
//                 }
//             }
//         }

//         if (callback_query) {
//             // Extract relevant information from the callback query
//             const chatId = callback_query.message.chat.id;
//             const messageId = callback_query.message.message_id;
//             const data = callback_query.data;

//             // Remove the inline keyboard from the previous message
//             await editMessageReplyMarkup(chatId, messageId);

//             console.log("data inside callback_query", data);

//             // Handle platform selection
//             if (Object.values(Platform).includes(data as Platform)) {
//                 // Set the user state to platform selected and store the chosen platform
//                 userStates.set(chatId, {
//                     state: State.PLATFORM_SELECTED,
//                     platformAction: { platform: data as Platform, action: null }
//                 });
//                 // Send a message asking the user to select an action for the chosen platform
//                 await sendMessage(chatId, `You chose ${data}. Now select type:`, getPlatformActionKeyboard(data as Platform));
//             }
//             // Handle price selection
//             else if (data.startsWith('price_')) {
//                 console.log("price");
//                 const userState = userStates.get(chatId);
//                 console.log("price with", userState?.state);
//                 if (userState && userState.state === State.PRICING) {
//                     // Extract the price from the callback data
//                     const price = data.split('_')[1];
//                     // Update the user state with the selected price and move to confirmation state
//                     userState.price = price;
//                     userState.state = State.CONFIRMATION;
//                     userStates.set(chatId, userState);

//                     // Prepare and send a confirmation message with order details
//                     const confirmationMessage = `Please confirm your order:
//                 Platform: ${userState.platformAction?.platform}
//                Action: ${userState.platformAction?.action}
//                   URL: ${userState.url}
//                 Price: $${price}`;

//                     await sendMessage(chatId, confirmationMessage, getConfirmationKeyboard());
//                 }
//             }
//             // Handle action selection for a platform
//             else if (data.includes('_')) {
//                 // Split the data into platform and action
//                 const [platform, action] = data.split('_') as [Platform, Action];
//                 const userState = userStates.get(chatId);
//                 if (userState && userState.state === State.PLATFORM_SELECTED) {
//                     // Update the user state with the selected action and move to URL input state
//                     userState.platformAction = { platform, action };
//                     userState.state = State.URL_REQUIRED;
//                     userStates.set(chatId, userState);
//                     // Prompt the user to enter a URL for the chosen platform and action
//                     await sendMessage(chatId, `Please enter the URL for ${platform} ${action}:`);
//                 }
//             }
//             // Handle order confirmation or cancellation
//             else if (data === 'confirm' || data === 'cancel') {
//                 const userState = userStates.get(chatId);
//                 if (userState && userState.state === State.CONFIRMATION) {
//                     if (data === 'confirm') {
//                         // Send a confirmation message with all order details
//                            await sendMessage(chatId, `Order confirmed! Thank you for your purchase.
//                        Platform: ${userState.platformAction?.platform}
//                        Action: ${userState.platformAction?.action}
//                        URL: ${userState.url}
//                        Price: $${userState.price}`);
//                     } else {
//                         // Send a cancellation message
//                         await sendMessage(chatId, "Order cancelled. You can start over with the /start command.");
//                     }
//                     // Clear the user state after confirming or cancelling
//                     userStates.delete(chatId);
//                 }
//             }
//         }

//         return NextResponse.json({ status: 'ok' }, { status: 200 });
//     } catch (error) {
//         console.error('Error processing Telegram update:', error);
//         return NextResponse.json({ error: 'Server error' }, { status: 500 });
//     }
// }