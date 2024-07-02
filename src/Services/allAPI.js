import commonAPI from "./commonAPI";
import SERVERURL from "./serverurl";

export const registerAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

export const loginAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}

export const addEventAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/events/addEvent`,reqBody)
}

export const getAllEventsAPI = async()=>{
    return await commonAPI("GET",`${SERVERURL}/events`,"")
}

