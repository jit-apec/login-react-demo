import axios from "axios";

const instance =axios.create({
    baseURL : "http://192.168.1.186:3001/auth"
})
    export const postApi = async(endPoint ,reqData) => {
        try {
            const {data} =await instance.post(endPoint ,reqData)
            return data
        }
        catch(error) {
            return error
        }
    }
