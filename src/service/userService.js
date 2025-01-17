import axios from "axios"
import { BASE_URL, configHeader } from "./config"



export const userService = {
    postLogin :  (loginForm) =>{
        return  axios({
            url: `${BASE_URL}`,
            method: "POST",
            headers: configHeader(),
            data: loginForm,
        })
    },
    postSignUp : (signUpForm)  =>{
        return axios({
            url: `${BASE_URL}`,
            method: "POST",
            headers: configHeader(),
            data : signUpForm,
        })
    }
}