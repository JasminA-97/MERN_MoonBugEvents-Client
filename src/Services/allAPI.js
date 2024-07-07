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

//get all events based on search key
export const getAllEventsAPI = async(searchKey)=>{
    return await commonAPI("GET",`${SERVERURL}/events?search=${searchKey}`,"")
}

export const editEventAPI = async(eid,reqBody)=>{
    console.log('inside allapi=========',eid);
    return await commonAPI("PUT",`${SERVERURL}/events/${eid}/edit`,reqBody)
}

export const deleteEventAPI = async(eid)=>{
    return await commonAPI("DELETE",`${SERVERURL}/events/${eid}/delete`,{})
}

// Get all events
export const getFullEventsAPI = async () => {
    return await commonAPI("GET",`${SERVERURL}/all-events`, "");
};

// Book an event
export const bookEventAPI = async (reqBody,reqHeader) => {
    return await commonAPI("POST",`${SERVERURL}/events/bookings`, reqBody,reqHeader);
};
