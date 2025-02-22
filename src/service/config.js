import axios from "axios";
import { localUserService } from "./localService";



export const BASE_URL = "https://12ea-171-243-48-112.ngrok-free.app";

export const configHeader = ()  =>{
    const accessToken = localUserService.getAccessToken();
    return{
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
        "Content-Type": "application/json"
    }
}

export const https = axios.create({
    baseURL: BASE_URL,
})

// https.interceptors.request.use((config) => {
//     config.headers = configHeader();
//     return config;
// });