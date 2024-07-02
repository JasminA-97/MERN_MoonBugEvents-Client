import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';

const AdminAddEvents = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className='btn btn-primary'><i className="fa-solid fa-plus"></i>&nbsp;Event</button>
      {/* Modal */}
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingInputeventname" label="Event Name" className="mb-3">
            <Form.Control type="text" placeholder="Event Name" required />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputeventcost" label="Event Cost" className="mb-3">
            <Form.Control type="number" placeholder="Event Cost" required />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputeventdate" label="Event Date" className="mb-3">
            <Form.Control type="date" placeholder="Event Date" required />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputeventdesc" label="Event Description" className="mb-3">
            <Form.Control as="textarea" placeholder="Event Description" style={{ height: '100px' }} required />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AdminAddEvents;
