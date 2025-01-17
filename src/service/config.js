import axios from "axios";



export const BASE_URL = "";
const TokenApi   = "";

export const configHeader = ()  =>{
    return{
        TokenApi: TokenApi,
        Authorization: "bearer" + localUserServ.get()?.accessToken,
    }
}

export const https = axios.create({
    baseURL: BASE_URL,
    headers: configHeader(),
})