import axios from "axios";
import { localUserService } from "./localService";
export const BASE_URL = "http://118.68.137.195:8081";


export const configHeader = () => {
    const accessToken = localUserService.getAccessToken();
    console.log("Access Token:", accessToken); // In ra Access Token
    return {
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
        "Content-Type": "application/json",
    };
};


// Tạo Axios instance
export const https = axios.create({
    baseURL: BASE_URL,
});

console.log(https)

// Kích hoạt interceptor
https.interceptors.request.use(
    (config) => {
        // Không thêm Authorization vào các API đăng ký & đăng nhập
        const authExcludedUrls = [
            "/register",
            "/login",
            "/oauth2/authorization",
            "/user-service/api/v1/account/confirm-otp",
            "/user-service/api/v1/account/resend-otp" // Thêm đường dẫn này
        ];
        const isExcluded = authExcludedUrls.some((url) => config.url.includes(url));

        if (!isExcluded) {
            config.headers = { ...config.headers, ...configHeader() };
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);