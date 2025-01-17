import axios from "axios";
import { localUserService } from "./localService";



export const BASE_URL = "";
const TokenApi   = "";

export const configHeader = ()  =>{
    return{
        TokenApi: TokenApi,
        Authorization: "bearer" + localUserService.get()?.accessToken,
    }
}

export const https = axios.create({
    baseURL: BASE_URL,
    headers: configHeader(),
})