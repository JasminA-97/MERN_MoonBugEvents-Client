import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { getUserBookingAPI } from '../Services/allAPI';

const UserBookingHistory = () => {
  const [userBookings, setUserBookings] = useState([]);
  console.log(userBookings);

  useEffect(() => {
    fetchUserBookings();
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
        console.log(result);
        if(result.status == 200){
          setUserBookings(result.data)
        } 
      }catch(err){
        console.log(err);
      }
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB'); // This will format the date as DD/MM/YYYY
  }; 

  return (
    <div className="p-5">
      <h2>Your Booking History</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SL.No</th>
            <th>Event</th>
            <th>Date</th>
            <th>Location</th>
            <th>Requirements</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            userBookings?.length > 0 ?
            userBookings.map((booking, index) => (
              <tr key={booking?._id}>
                <td>{index + 1}</td>
                <td>{booking?.eventId.eventName}</td>
                <td>{formatDate(booking?.date)}</td>
                <td>{booking?.location}</td>
                <td>{booking?.requirements}</td>
                <td>{booking?.status}</td>
                <td>
                  <Button variant="warning" className="me-2"><i className="fa-solid fa-pen-to-square"></i></Button>
                  <Button variant="danger"><i className="fa-solid fa-trash"></i></Button>
                </td>
              </tr>
            ))
            :
            <div className="text-danger fw-bolder">You have no booking history!</div>
          }        
        </tbody>
      </Table>
    </div>
  );
};

export default UserBookingHistory;
