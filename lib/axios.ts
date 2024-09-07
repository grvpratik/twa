import axios from "axios";

// Base URL including the bot token
const BASE_URL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;

const axiosInstance = () => {
    return {
        get(method: string, params: any) {
            return axios.get(`${BASE_URL}/${method}`, {
                params: params, // Passing query parameters
            });
        },
        post(method: string, data: any) {
            return axios.post(`${BASE_URL}/${method}`, data); // Post request with data payload
        },
    };
};

// Exporting the axios instance functions
export default axiosInstance;
