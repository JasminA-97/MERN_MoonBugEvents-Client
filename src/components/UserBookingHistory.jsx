import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { getFullEventsAPI, getUserBookingAPI, userDeleteBookingAPI } from '../Services/allAPI'; // Assuming this API call exists
import UserBookingEdit from './UserBookingEdit';

const UserBookingHistory = () => {
  const [userBookings, setUserBookings] = useState([]);
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    fetchUserBookings();
    fetchAllEvents();
  }, []);

  const fetchUserBookings = async () => {
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`
      }
      try{    
        const result = await getUserBookingAPI(reqHeader)  
        if(result.status === 200){
          setUserBookings(result.data)
        } 
      }catch(err){
        console.log(err);
      }
    }
  };

  const fetchAllEvents = async () => {
    const token = sessionStorage.getItem('token');
    if (token) {
      const reqHeader = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };
      try {
        const result = await getFullEventsAPI(reqHeader);
        console.log(result);
        if (result.status === 200) {
          setAllEvents(result.data);
        } else {
          alert('Failed to fetch Events. Please try again!!!');
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleDeleteBooking = async(bookingId)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
      try{
        const result = await userDeleteBookingAPI(bookingId,reqHeader)
        if(result.status == 200){
          fetchUserBookings()
        }else{
          console.log(result);
        }
      }catch(err){
        console.log(err);
      } 
  }
}

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB'); // This will format the date as DD/MM/YYYY
  }; 

  return (
    <div style={{height:'100vh'}} className="p-5 bg-light">
      <h2 className='text-center pb-3'>Your Booking History</h2>
<div className=' d-flex justify-content-center align-items-center'>
        <Table hover className='border border-2'>
          <thead>
            <tr>
              <th className='p-3'>SL.No</th>
              <th className='p-3'>Event</th>
              <th className='p-3'>Date</th>
              <th className='p-3'>Location</th>
              <th className='p-3'>Requirements</th>
              <th className='p-3'>Status</th>
              <th className='p-3'></th>
            </tr>
          </thead>
          <tbody>
          {
              userBookings?.length > 0 ?
              userBookings?.map((booking, index) => (
                <tr key={booking?._id}>
                  <td>{index + 1}</td>
                  <td>{booking?.eventId ? booking.eventId.eventName : 'N/A'}</td>
                  <td>{formatDate(booking?.date)}</td>
                  <td>{booking?.location}</td>
                  <td>{booking?.requirements}</td>
                  <td>{booking?.status}</td>
                  <td className='d-flex justify-content-evenly align-items-center'>
                    <div><UserBookingEdit booking={booking} allEvents={allEvents} fetchUserBookings={fetchUserBookings} /></div>
                    <div onClick={() => handleDeleteBooking(booking?._id)} className='btn'><i className="text-danger fa-solid fa-trash"></i></div>
                  </td>
                </tr>
              ))
              :
              <div className="text-danger fw-bolder">You have no booking history!</div>
            }        
          </tbody>
        </Table>
</div>
    </div>
  );
};

export default UserBookingHistory;
