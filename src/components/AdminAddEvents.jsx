import React, { useContext, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { addEventAPI } from '../Services/allAPI';
import { addResponseContext } from '../contexts/ContextAPI';

const AdminAddEvents = () => {
  const {addresponse,setAddresponse} = useContext(addResponseContext)
  const[eventDetails,setEventDetails] = useState({eventName:"",eventCost:"",eventDescription:""})

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setEventDetails({eventName:"",eventCost:"",eventDescription:""})
  }
  const handleShow = () => setShow(true);

  const handleAddEvent = async () => {
    const { eventName, eventCost, eventDescription } = eventDetails;
    // console.log('Event Details:', eventDetails); 
  
    if (eventName && eventCost && eventDescription) {
      try {
        const result = await addEventAPI(eventDetails);
        if (result.status === 200) {
          setAddresponse(result.data)
          handleClose();
        } else {
          alert(result.response.data);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('Please fill the form completely!');
    }
  };

  const handleCancel=()=>{
    setEventDetails({eventName:"",eventCost:"",eventDescription:""})
  }
  
  return (
    <>
      <button onClick={handleShow} className='btn btn-primary'><i className="fa-solid fa-plus"></i>&nbsp;Event</button>
      {/* Modal */}
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title className='text-primary'>Add New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingeventname" label="Event Name" className="mb-3">
            <Form.Control value={eventDetails.eventName} onChange={e=>setEventDetails({...eventDetails,eventName:e.target.value})} type="text" placeholder="Event Name" required />
          </FloatingLabel>
          <FloatingLabel controlId="floatingeventcost" label="Event Cost" className="mb-3">
            <Form.Control value={eventDetails.eventCost} onChange={e=>setEventDetails({...eventDetails,eventCost:e.target.value})} type="number" placeholder="Event Cost" required />
          </FloatingLabel>
          <FloatingLabel controlId="floatingeventdesc" label="Event Description" className="mb-3">
            <Form.Control value={eventDetails.eventDescription} onChange={e=>setEventDetails({...eventDetails,eventDescription:e.target.value})} as="textarea" placeholder="Event Description" style={{ height: '100px' }} required />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}> Cancel</Button>
          <Button onClick={handleAddEvent} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AdminAddEvents;
