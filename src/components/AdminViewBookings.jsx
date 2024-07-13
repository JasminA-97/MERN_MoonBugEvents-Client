import React, { useEffect, useState } from 'react'
import {Dropdown, DropdownButton, Table } from 'react-bootstrap';
import { editBookingStatusAPI,getAllBookingsAPI } from '../Services/allAPI';

const AdminViewBookings = () => {
  const [allbookings, setAllBookings] = useState([]);
  console.log(allbookings);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const result = await getAllBookingsAPI();
      setAllBookings(result.data);
    } catch(err) {
      console.log(err);
    }
  };

  const handleStatusChange = async (bookingId, status) => {
    try {
      await editBookingStatusAPI(bookingId, {status})
      fetchBookings(); // Refresh bookings list after update
    } catch (err) {
      console.log(err);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB'); // This will format the date as DD/MM/YYYY
  }; 

  return (
<div className="p-5">
      <h2>View Bookings</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SL.No</th>
            <th>Event</th>
            <th>Booking Date</th>
            <th>Location</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th> 
            <th>Requirements</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            allbookings?.length>0 ?
            allbookings.map((booking,index)=>(
              <tr key={booking?._id}>
                  <td>{index+1}</td>
                  <td>{booking?.eventId.eventName}</td>
                  <td>{formatDate(booking?.date)}</td>
                  <td>{booking?.location}</td>
                  <td>{booking?.userId.username}</td>
                  <td>{booking?.userId.email}</td>
                  <td>{booking?.userId.phone}</td>
                  <td>{booking?.requirements}</td>

                  <td>
                    <DropdownButton title={booking?.status}>
                      <Dropdown.Item onClick={() => handleStatusChange(booking?._id, 'Pending')}>Pending</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleStatusChange(booking?._id, 'Confirmed')}> Confirmed</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleStatusChange(booking?._id, 'Rejected')}>Rejected</Dropdown.Item>
                    </DropdownButton>
                  </td>
            </tr>
            ))
            :
            <div className="text-danger fw-bolder">No Bookings Yet!</div>
          }         
        </tbody>
      </Table>
    </div>
  )
}

export default AdminViewBookings
