import React, { useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { userEditBookingAPI } from '../Services/allAPI';

const UserBookingEdit = ({ booking, allEvents, fetchUserBookings }) => {
  const [formData, setFormData] = useState({
    bookingId: booking?._id,
    eventId: booking?.eventId._id,
    date: booking?.date,
    location: booking?.location,
    requirements: booking?.requirements
  });
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setFormData({
      bookingId: booking?._id,
      eventId: booking?.eventId._id,
      date: booking?.date,
      location: booking?.location,
      requirements: booking?.requirements
    });
  }
  const handleShow = () => {
    setShow(true);
    setFormData({
      bookingId: booking?._id,
      eventId: booking?.eventId._id,
      date: booking?.date,
      location: booking?.location,
      requirements: booking?.requirements
    });

  }

  const handleUserEditBooking = async () => {
    const { bookingId, eventId, date, location, requirements } = formData;
    if (eventId && date && location) {
      const reqBody = { eventId, date, location, requirements };
      const token = sessionStorage.getItem("token");
      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        };
        try {
          const result = await userEditBookingAPI(bookingId, reqBody, reqHeader);
          if (result.status === 200) {
            fetchUserBookings(); // Refresh the bookings list
            handleClose()
          } else {
            console.log(result.response);
          }
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      alert('Please fill the form completely!');
    }
  }

  return (
    <>
      <div className="btn me-2" onClick={handleShow}><i className="text-warning fa-solid fa-pen-to-square"></i></div>  

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingEventType" label="Event Type" className="mb-3">
            <Form.Select
              name="eventId"
              value={formData.eventId}
              onChange={e => setFormData({ ...formData, eventId: e.target.value })}
              required
            >
              <option value="">Select event type</option>
              {
                allEvents?.length > 0 ?
                  allEvents.map((evnt) => (
                    <option key={evnt?._id} value={evnt?._id}>{evnt?.eventName}</option>
                  ))
                  :
                  <option value="">No events available</option>
              }
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel controlId="floatingDate" label="Date" className="mb-3">
            <Form.Control
              type="date"
              name="date"
              value={new Date(formData?.date).toISOString().split('T')[0]}
              onChange={e => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingLocation" label="Location" className="mb-3">
            <Form.Control
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={e => setFormData({ ...formData, location: e.target.value })}
              required
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingRequirements" label="Special Requirements" className="mb-3">
            <Form.Control
              style={{ height: '100px' }}
              as="textarea"
              name="requirements"
              placeholder="Special Requirements"
              value={formData.requirements}
              onChange={e => setFormData({ ...formData, requirements: e.target.value })}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUserEditBooking} variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>              
    </>
  )
}
export default UserBookingEdit;
