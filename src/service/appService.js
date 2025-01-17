import { https } from "./config"


export const appService = {
    getDataList  : () =>{
        return https.get("/")
    },
}