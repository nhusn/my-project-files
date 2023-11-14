import { BASE_URL } from "./baseUrl"
import { commonAPI } from "./commonAPI"

export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}
export const loginAPI = async (user)=>{
    return await commonAPI("GET",`${BASE_URL}/user/login`,user,"")
}