import { https } from "./config"


export const appService = {
    postDataUser  : () =>{
        return https.post("/Products")
    },
    resetPassword: (email) => {
        return https.post("/user-service/api/v1/account/forgot-password", { email });
    },
    conformOtp: (formData) => {
        console.log(formData)
        return https.post("/user-service/api/v1/account/confirm-otp", formData);
    },
    
}