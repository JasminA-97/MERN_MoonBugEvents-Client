import React, { useContext, useEffect, useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { editResponseContext } from '../contexts/ContextAPI';
import { editEventAPI } from '../Services/allAPI';
import SERVERURL from '../Services/serverurl';

const AdminEditEvents = ({ evnt }) => {
  const { editResponse, setEditResponse } = useContext(editResponseContext);
  const [eventDetails, setEventDetails] = useState({
    eventName: evnt?.eventName,
    eventCost: evnt?.eventCost,
    eventDescription: evnt?.eventDescription,
    eventImg:""
  });

  const [imgFileStatus, setImgFileStatus] = useState(false);
  const[preview,setPreview]=useState("")

  useEffect(() => {
    if (eventDetails.eventImg) {
      if (
        eventDetails.eventImg.type === "image/png" ||
        eventDetails.eventImg.type === "image/jpg" ||
        eventDetails.eventImg.type === "image/jpeg"
      ) {
        setImgFileStatus(true);
        setPreview(URL.createObjectURL(eventDetails.eventImg));
      } else {
        setPreview("");
        setImgFileStatus(false);
        setEventDetails({ ...eventDetails, eventImg: "" });
      }
    }
  }, [eventDetails.eventImg]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleCancel = () => {
    setEventDetails({
      eventName: evnt?.eventName,
      eventCost: evnt?.eventCost,
      eventDescription: evnt?.eventDescription,
      eventImg:""
    });
  };

  const handleUpdateEvent = async (e) => {
    e.preventDefault();
    const { id, eventName, eventCost, eventDescription, eventImg } = eventDetails;
    if (eventName && eventCost && eventDescription) {
      const reqBody = new FormData();
      reqBody.append("eventName", eventName);
      reqBody.append("eventCost", eventCost); 
      reqBody.append("eventDescription", eventDescription); 
      preview ? reqBody.append("eventImg", eventImg) : reqBody.append("eventImg", evnt.eventImg);
      const token = sessionStorage.getItem("token");
      if (token) {
        const reqHeader = {
          "Content-Type": preview ? "multipart/form-data" : "application/json",
          "Authorization": `Bearer ${token}`
        };
        try {
          const result = await editEventAPI(id, reqBody, reqHeader); 
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
    }
  };
  
  // Ensure `id` is set correctly in handleShow
  const handleShow = () => {
    setShow(true);
    setEventDetails({
      id: evnt?._id, // Ensure `id` is included
      eventName: evnt?.eventName,
      eventCost: evnt?.eventCost,
      eventDescription: evnt?.eventDescription,
      eventImg: ""
    });
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
          <Form onSubmit={handleUpdateEvent}>
            <div className='row align-items-center'>
              <div className="col-lg-4">
              <label>
                <input type="file" style={{display:'none'}} onChange={e=>setEventDetails({...eventDetails,eventImg:e.target.files[0]})}/>
                <img height={'200px'} className='img-fluid'  src={preview?preview:`${SERVERURL}/uploads/${evnt?.eventImg}`} alt="" />
              </label>
              {
                !imgFileStatus&&
                <div className="text-warning fw-bolder my-2">*Upload only the following file types (jpeg/jpg/png)here!!!</div>
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
