import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';

const AdminEditEvents = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <button onClick={handleShow} className='btn'><i className="fa-solid fa-pen-to-square text-warning"></i></button>
     {/* Modal*/}
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
            <Modal.Title>Update Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FloatingLabel controlId="floatingInputeventname" label="Event Name" className="mb-3">
                <Form.Control type="text" placeholder="Event Name" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputeventcost" label="Event Cost" className="mb-3">
                <Form.Control type="text" placeholder="Event Cost" />
            </FloatingLabel> 
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="primary">Update</Button>
        </Modal.Footer>
    </Modal>

 </>
  )
}

export default AdminEditEvents
