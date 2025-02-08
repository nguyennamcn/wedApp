import { message } from "antd";

export function validatePhone(phone){
    const phoneRegex = /^[0-9]{10}$/;
    if(!phone){
        return{
            isValid : false,
            message: 'Vui lòng nhập số điện thoại.'
        }
    }

    if(!phoneRegex.test(phone)){
        return{
            isValid: false,
            message: 'Số điện thoại phải gồm đúng 10 chữ số và không chứa ký tự.'
        }
    }

    return{
        isValid: true,
        message: '',
    }
}