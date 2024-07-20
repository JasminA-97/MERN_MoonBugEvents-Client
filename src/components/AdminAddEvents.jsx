import React, { useContext, useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { addEventAPI } from '../Services/allAPI';
import { addResponseContext } from '../contexts/ContextAPI';

const AdminAddEvents = () => {
  const { addresponse, setAddresponse } = useContext(addResponseContext);
  const [eventDetails, setEventDetails] = useState({
    eventName: "", eventCost: "", eventDescription: ""
  });

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setEventDetails({ eventName: "", eventCost: "", eventDescription: "" });
  };

  const handleShow = () => setShow(true);

  const handleAddEvent = async (e) => {
    e.preventDefault();
    const { eventName, eventCost, eventDescription } = eventDetails;

    const reqBody = { eventName, eventCost, eventDescription };
    const token = sessionStorage.getItem("token");

    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      };
      try {
        const result = await addEventAPI(reqBody, reqHeader);
        if (result.status === 200) {
          setAddresponse(result.data);
          handleClose();
        } else {
          alert(result.response.data);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('No token found. Please log in again.');
    }
  };

  const handleCancel = () => {
    setEventDetails({ eventName: "", eventCost: "", eventDescription: "" });
  };

  return (
    <>
      <button onClick={handleShow} className='btn btn-primary'>
        <i className="fa-solid fa-plus"></i>&nbsp;Event
      </button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title className='text-primary'>Add New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddEvent}>
            <FloatingLabel controlId="floatingeventname" label="Event Name" className="mb-3">
              <Form.Control
                value={eventDetails.eventName}
                onChange={e => setEventDetails({ ...eventDetails, eventName: e.target.value })}
                type="text"
                placeholder="Event Name"
                required
                pattern="[a-zA-Z ]+"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingeventcost" label="Event Cost" className="mb-3">
              <Form.Control
                value={eventDetails.eventCost}
                onChange={e => setEventDetails({ ...eventDetails, eventCost: e.target.value })}
                type="number"
                placeholder="Event Cost"
                required
                min="0"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingeventdesc" label="Event Description" className="mb-3">
              <Form.Control
                value={eventDetails.eventDescription}
                onChange={e => setEventDetails({ ...eventDetails, eventDescription: e.target.value })}
                as="textarea"
                placeholder="Event Description"
                style={{ height: '100px' }}
                required
              />
            </FloatingLabel>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
              <Button type="submit" variant="primary">Add</Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AdminAddEvents;
