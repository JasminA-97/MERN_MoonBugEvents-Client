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

export const editEventAPI = async(eid,reqBody)=>{
    console.log('inside allapi=========',eid);
    return await commonAPI("PUT",`${SERVERURL}/events/${eid}/edit`,reqBody)
}

export const deleteEventAPI = async(eid)=>{
    return await commonAPI("DELETE",`${SERVERURL}/events/${eid}/delete`,{})
}


