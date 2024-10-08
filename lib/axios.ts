import axios, { AxiosInstance } from "axios";

// Ensure the bot token is available
if (!process.env.TELEGRAM_BOT_TOKEN) {
    throw new Error("TELEGRAM_BOT_TOKEN is not set in environment variables");
}

// Base URL including the bot token
const BASE_URL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;

// Create a typed axios instance
const axiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
});

// Define a type for the methods
type TelegramMethod =
    | "getMe"
    | "sendMessage"
    | "setWebhook"
// Add more method names as needed

// Create a wrapper for the axios instance
const telegramApi = {
    get: async <T = any>(method: TelegramMethod, params?: any) =>
      await  axiosInstance.get<T>(`/${method}`, { params }),

    post:async <T = any>(method: TelegramMethod, data?: any) =>
        await axios({
            method: "post",
            baseURL: BASE_URL,
            url: `/${method}`,
            data,
       }),
};

export default telegramApi;
