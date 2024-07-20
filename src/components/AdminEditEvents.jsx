import React, { useContext, useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { editResponseContext } from '../contexts/ContextAPI';
import { editEventAPI } from '../Services/allAPI';

const AdminEditEvents = ({ evnt }) => {
  const { editResponse, setEditResponse } = useContext(editResponseContext);
  const [eventDetails, setEventDetails] = useState({
    eventName: evnt?.eventName,
    eventCost: evnt?.eventCost,
    eventDescription: evnt?.eventDescription
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setEventDetails({
      eventName: evnt?.eventName,
      eventCost: evnt?.eventCost,
      eventDescription: evnt?.eventDescription
    });
  };

  const handleCancel = () => {
    setEventDetails({
      eventName: evnt?.eventName,
      eventCost: evnt?.eventCost,
      eventDescription: evnt?.eventDescription
    });
    handleClose();
  };

  const handleUpdateProject = async (e) => {
    e.preventDefault();
    const { eventName, eventCost, eventDescription } = eventDetails;
    if (eventName && eventCost && eventDescription) {
      try {
        const result = await editEventAPI(evnt?._id, eventDetails);
        console.log(result);
        if (result.status === 200) {
          handleClose();
          setEditResponse(result.data);
        } else {
          console.log(result.response);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('Please fill the form!!!');
    }
  };

  return (
    <>
      <button onClick={handleShow} className='btn'>
        <i className="fa-solid fa-pen-to-square text-warning"></i>
      </button>
      {/* Modal */}
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdateProject}>
            <FloatingLabel controlId="floatingeventname" label="Event Name" className="mb-3">
              <Form.Control
                value={eventDetails.eventName}
                onChange={e => setEventDetails({ ...eventDetails, eventName: e.target.value })}
                type="text"
                placeholder="Event Name"
                required
                pattern="[a-zA-Z ]+"
                title="Only letters and spaces are allowed"
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
                title="Cost must be a positive number"
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
              <Button variant="secondary" onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                Update
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AdminEditEvents;
