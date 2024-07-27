import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { gethomeEventsAPI } from '../Services/allAPI';
import SERVERURL from '../Services/serverurl';

const Services = () => {
    const [homeEvents, setHomeEvents] = useState([]);

    useEffect(() => {
      getHomeEvents();
    }, []);
  
    const getHomeEvents = async () => {
      try {
        const result = await gethomeEventsAPI();
        if (result.status === 200) {
          setHomeEvents(result.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
  return (
    <div className="services pt-5 mt-5">
    <Container-fluid className="text-center">
        <h1 style={{fontFamily: "Dancing Script, cursive"}} className=' fw-bolder text-center'>Services</h1>
       
        <Row className="row justify-content-center ms-5 me-5">
        {
          homeEvents?.length > 0 ? (
            homeEvents?.map((homeEvent, index) => (
              <Col key={homeEvent?._id} className="d-flex justify-content-center text-center">
                <div>
                  <Card className='mt-5' style={{ width: '300px', height:'480px',border:'none'}}>
                  <Card.Img className='w-100 border rounded-4' style={{ height:'300px'}} variant="top" src={`${SERVERURL}/uploads/${homeEvent?.eventImg}`} />
                  <Card.Body>
                    <Card.Title className=' fw-bold'>{homeEvent?.eventName}</Card.Title>
                    <Card.Text>
                      {homeEvent?.eventDescription.slice(0,55)}...
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <button className='btn btn-info rounded-5 ps-4 pe-4'>Enquire Now</button>
                  </Card.Body>
                </Card>
                </div>
              </Col>
            ))
          ) : (
            <div>No events available!</div>
          )
        }
        </Row>
      </Container-fluid>
    </div>  )
}

export default Services