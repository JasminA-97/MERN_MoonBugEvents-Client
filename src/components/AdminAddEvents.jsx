import React, { useContext, useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { addEventAPI } from '../Services/allAPI';
import { addResponseContext } from '../contexts/ContextAPI';
import addImg from '../assets/AddImg.png';

const AdminAddEvents = () => {
  const { addResponse,setAddresponse } = useContext(addResponseContext);
  const [eventDetails, setEventDetails] = useState({
    eventName: "", eventCost: "", eventDescription: "", eventImg: ""
  });
  const [imgFileStatus, setImgFileStatus] = useState(false);
  const [preview, setPreview] = useState(addImg);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setEventDetails({ eventName: "", eventCost: "", eventDescription: "", eventImg: "" });
    setPreview(addImg); // Reset the preview image to the default
    setImgFileStatus(false); // Reset the image file status
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const handleAddEvent = async (e) => {
    e.preventDefault();
    const { eventName, eventCost, eventDescription, eventImg } = eventDetails;

    const reqBody = new FormData();
    reqBody.append("eventName", eventName);
    reqBody.append("eventCost", eventCost);
    reqBody.append("eventDescription", eventDescription);
    reqBody.append("eventImg", eventImg);

    const token = sessionStorage.getItem("token");

    if (token) {
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      };
      try {
        const result = await addEventAPI(reqBody, reqHeader);
        if (result.status === 200) {
          setAddresponse(result.data);
          handleClose(); // Close the modal and reset state
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
    setEventDetails({ eventName: "", eventCost: "", eventDescription: "", eventImg: "" });
    setPreview(addImg); // Reset the preview image to the default
    setImgFileStatus(false); // Reset the image file status
    setShow(false); // Close the modal
  };

  return (
    <>
      <button style={{backgroundColor:'#7c047a', color:'white'}} onClick={handleShow} className='enquire btn border rounded-5 ps-4 pe-4 fw-bolder'>
        <i className="fa-solid fa-plus"></i>&nbsp;Event
      </button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title className='text-primary'>Add New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddEvent}>
            <div className='row align-items-center'>
              <div className="col-lg-4">
                <label>
                  <input type="file" style={{ display: 'none' }} onChange={e => {
                    setEventDetails({ ...eventDetails, eventImg: e.target.files[0] });
                    setPreview(URL.createObjectURL(e.target.files[0]));
                    setImgFileStatus(true);
                  }} />
                  <img height={'200px'} className='img-fluid' src={preview} alt="Event Preview" />
                </label>
                {!imgFileStatus &&
                  <div className="text-warning fw-bolder my-2">*Upload only the following file types (jpeg/jpg/png) here!!!</div>
                }
              </div>
              <div className="col-lg-8">
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
              </div>
            </div>

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
