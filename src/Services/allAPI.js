import commonAPI from "./commonAPI";
import SERVERURL from "./serverurl";

export const registerAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

export const loginAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}

export const addEventAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVERURL}/events/addEvent`,reqBody,reqHeader)
}

//get all events based on search key
export const getAllEventsAPI = async(searchKey)=>{
    return await commonAPI("GET",`${SERVERURL}/events?search=${searchKey}`,"")
}

export const editEventAPI = async(eid,reqBody)=>{
    console.log('inside allapi edit, eventid=========',eid);
    return await commonAPI("PUT",`${SERVERURL}/events/${eid}/edit`,reqBody)
}

export const deleteEventAPI = async(eid)=>{
    return await commonAPI("DELETE",`${SERVERURL}/events/${eid}/delete`,{})
}

// Get full events for each user
export const getFullEventsAPI = async (reqHeader) => {
    return await commonAPI("GET",`${SERVERURL}/all-events`,"",reqHeader);
};

// Get homeEvents for home page
export const gethomeEventsAPI = async () => {
    return await commonAPI("GET",`${SERVERURL}/all-event`,"",);
};

// Book an event
export const bookEventAPI = async (reqBody,reqHeader) => {
    return await commonAPI("POST",`${SERVERURL}/events/bookings`,reqBody,reqHeader);
};

// Get all bookings for admin-view-bookings 
export const getAllBookingsAPI = async () => {
    return await commonAPI("GET",`${SERVERURL}/all-bookings`, "");
};

// Edit booking status by admin
export const editBookingStatusAPI = async (bookingId,status) => {
    return await commonAPI("PUT",`${SERVERURL}/all-bookings/${bookingId}`,status);
};

//get booking history of a single user who is logged-in
export const getUserBookingAPI = async (reqHeader) => {
    return await commonAPI("GET",`${SERVERURL}/user-bookings`,"",reqHeader);
};

//user edit his booking
export const userEditBookingAPI = async (bookingId, reqBody, reqHeader) => {
    return await commonAPI("PUT", `${SERVERURL}/user-bookings/${bookingId}/edit`, reqBody, reqHeader);
};

//user delete his booking
export const userDeleteBookingAPI = async (bookingId,reqHeader) => {
    return await commonAPI("DELETE", `${SERVERURL}/user-bookings/${bookingId}/delete`, {}, reqHeader);
}

// Get users who have made bookings for adminViewBooking
export const usersWithBookingsAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/users-with-bookings`, "", reqHeader);
}

//edit user profile
export const editUserAPI = async (reqBody,reqHeader) => {
    return await commonAPI("PUT",`${SERVERURL}/user/edit`,reqBody,reqHeader);
};

//add review
export const addReviewAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVERURL}/review/add`,reqBody,reqHeader)
}

// Get homeReviews for home page
export const gethomeReviewsAPI = async () => {
    return await commonAPI("GET",`${SERVERURL}/all-reviews`,"",);
}

