import React, { useEffect, useState } from 'react';
import { bookEventAPI, getFullEventsAPI } from '../Services/allAPI';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

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
          toast.info('Failed to fetch Events. Please try again!!!');
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
            toast.success('Event booked successfully!');
            setFormData({ eventId: '', date: '', location: '', requirements: '' });
          } else {
            toast.info(result.response.data);
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        toast.info('No token found. Please log in again.');
      }
    } else {
      toast.info('Please fill all required fields!');
    }
  };

  return (
    <div style={{ height: '100vh' }} className="w-100 bg-light">
                <h2 className='p-5 text-center'>Book an Event</h2>

      <div className='w-100 d-flex justify-content-center align-items-center'>
        <form className='w-50 border border-2 rounded-5 p-5 bg-white' onSubmit={handleSubmit}>
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
          <div className="text-center mt-4">
            <button style={{backgroundColor:'#7c047a', color:'white'}} type="submit" className="enquire btn border rounded-5 ps-3 pe-3 fw-bolder">Book Event</button>
          </div>
       </form>
      </div>
    </div>
  );
}

export default UserBookEvent;
