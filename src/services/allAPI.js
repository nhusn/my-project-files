import { BASE_URL } from "./baseUrl"
import { commonAPI } from "./commonAPI"

export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}
export const loginAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

export const addProjectAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/project/add`,reqBody,reqHeader)
}

export const homeProjectAPI = async ()=>{
    return await commonAPI("GET",`${BASE_URL}/projects/home`,"","")
}

export const allProjectsAPI = async (searchKey,reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/projects/all?search=${searchKey}`,"",reqHeader)
}

export const userProjectAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/projects`,"",reqHeader)
}
