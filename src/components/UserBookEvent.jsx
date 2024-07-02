import React, { useState } from 'react';
import { Form, FloatingLabel, Button, Alert } from 'react-bootstrap';
const UserBookEvent = () => {
  const [formData, setFormData] = useState({
    eventType: '',
    date: '',
    location: '',
    requirements: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send data to server
    console.log(formData);
  };

  return (
    <div className="p-5">
      <h2>Book an Event</h2>
      <form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingEventType" label="Event Type" className="mb-3">
          <Form.Select name="eventType" onChange={handleChange} required>
            <option value="">Select event type</option>
            <option value="wedding">Wedding</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="babyshower">Baby Shower</option>
            <option value="theme_party">Theme Party</option>
            <option value="festival">Festival</option>
          </Form.Select>
        </FloatingLabel>
        <FloatingLabel controlId="floatingDate" label="Date" className="mb-3">
          <Form.Control type="date" name="date" onChange={handleChange} required />
        </FloatingLabel>
        <FloatingLabel controlId="floatingLocation" label="Location" className="mb-3">
          <Form.Control type="text" name="location" placeholder="Location" onChange={handleChange} required />
        </FloatingLabel>
        <FloatingLabel controlId="floatingRequirements" label="Special Requirements" className="mb-3">
          <Form.Control as="textarea" name="requirements" placeholder="Special Requirements" onChange={handleChange} />
        </FloatingLabel>
        <Button type="submit" className="w-100">Book Event</Button>
      </form>
    </div>
  );
};

export default UserBookEvent;

