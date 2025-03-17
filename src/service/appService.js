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
    resendOtp: (data) =>{
        // console.log(data)
        return https.post("/user-service/api/v1/account/resend-otp",  data);
    },
    getProfile: () =>{
        return https.get("/user-service/api/v1/users/profile");
    },
    updateProfile: (data) =>{
        // console.log(data)
        return https.put("/user-service/api/v1/users", data);
    },
    resetPass: (data) =>{
        console.log(data)
        return https.post("/user-service/api/v1/account/reset-password", data);
    },
    postAddress: (data) =>{
        // console.log(data)
        return https.post("/user-service/api/v1/users/address/create", data);
    },
    updateAddress: (data) =>{
        // console.log(data)
        return https.put("/user-service/api/v1/users/address/update", data);
    },
    deleteAddress: (id) =>{
        // console.log(id)
        return https.delete(`/user-service/api/v1/users/address/delete/${id}`);
    },
//store service
    postStore: (data) =>{
        // console.log(data)
        return https.post("/store-service/api/v1/stores/register", data);
    },
}