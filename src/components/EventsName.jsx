import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { gethomeEventsAPI } from '../Services/allAPI';
import SERVERURL from '../Services/serverurl';

const EventsName = () => {
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
    <div className="pt-3 pb-3">
      <Container className="text-center fw-bolder">
        <h1 style={{fontFamily: "Dancing Script, cursive"}} className='mb-5'>Services</h1>
        <Row className="row justify-content-center">
          {homeEvents?.length > 0 ? (
            homeEvents?.map((homeEvent, index) => (
              <Col key={homeEvent?._id} className="d-flex justify-content-center">
                <div className='Eventname mt-5 mb-5'>
                  <Card style={{ width: '300px', height:'500px'}}>
                  <Card.Img className='w-100' style={{ height:'300px'}} variant="top" src={`${SERVERURL}/uploads/${homeEvent?.eventImg}`} />
                  <Card.Body>
                    <Card.Title>{homeEvent?.eventName}</Card.Title>
                    <Card.Text>
                    {homeEvent?.eventDescription.slice(0,50)}...
                    </Card.Text>
                  </Card.Body>
                  
                  <Card.Body>
                    <button className='btn btn-primary'>Book Now</button>
                  </Card.Body>
                </Card>
                </div>
              </Col>
            ))
          ) : (
            <div>No events available</div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default EventsName;
