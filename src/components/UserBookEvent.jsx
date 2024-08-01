import React, { useEffect, useState } from 'react';
import { bookEventAPI, getFullEventsAPI } from '../Services/allAPI';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const UserBookEvent = () => {
  const [userInfo, setUserInfo] = useState({});
  const [allEvents, setAllEvents] = useState([]);
  const [formData, setFormData] = useState({
    eventId: '',
    date: '',
    location: '',
    requirements: '',
  });

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      setUserInfo(user);
      console.log(user);
    }

    handleFetchEvents(); 
  }, []); 

  const handleFetchEvents = async () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { eventId, date, location, requirements } = formData;
    if (eventId && date && location) {
      const reqBody = { eventId, date, location, requirements };
      const token = sessionStorage.getItem("token");
      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        };

        try {
          const result = await bookEventAPI(reqBody, reqHeader);
          console.log('bookevent------', result);
          if (result.status === 200) {
            alert('Event booked successfully!');
            setFormData({ eventId: '', date: '', location: '', requirements: '' });
          } else {
            alert(result.response.data);
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        alert('No token found. Please log in again.');
      }
    } else {
      alert('Please fill all required fields!');
    }
  };

  return (
    <div style={{ height: '80vh' }} className="w-100">
      <div className='w-100 d-flex justify-content-center align-items-center'>
        <form className='w-50' onSubmit={handleSubmit}>
          <h2 className='p-5 text-center'>Book an Event</h2>
          <FloatingLabel controlId="floatingEventType" label="Event Type" className="mb-3">
            <Form.Select name="eventId" value={formData.eventId} onChange={e => setFormData({ ...formData, eventId: e.target.value })} required>
              <option value="">Select event type</option>
              {allEvents?.length > 0 ? allEvents.map((evnt) => (
                <option key={evnt?._id} value={evnt?._id}>{evnt?.eventName}</option>
              )) : <option value="">Select event type</option>}
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel controlId="floatingDate" label="Date" className="mb-3">
            <Form.Control type="date" name="date" value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} required />
          </FloatingLabel>
          <FloatingLabel controlId="floatingLocation" label="Location" className="mb-3">
            <Form.Control type="text" name="location" placeholder="Location" value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })} required />
          </FloatingLabel>
          <FloatingLabel controlId="floatingRequirements" label="Special Requirements" className="mb-3">
            <Form.Control style={{ height: '100px' }} as="textarea" name="requirements" placeholder="Special Requirements" value={formData.requirements} onChange={e => setFormData({ ...formData, requirements: e.target.value })} />
          </FloatingLabel>
          <Button type="submit" className="w-100">Book Event</Button>
        </form>
      </div>
    </div>
  );
}

export default UserBookEvent;
