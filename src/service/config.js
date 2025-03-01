import axios from "axios";
import { localUserService } from "./localService";



export const BASE_URL = "http://113.22.66.128:8081";

export const configHeader = () => {
    const accessToken = localUserService.getAccessToken();
    console.log("Access Token:", accessToken); // In ra Access Token
    return {
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
        "Content-Type": "application/json",
    };
};

export const https = axios.create({
    baseURL: BASE_URL,
})

// https.interceptors.request.use(
//     (config) => {
//         config.headers = { ...config.headers, ...configHeader() };
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );