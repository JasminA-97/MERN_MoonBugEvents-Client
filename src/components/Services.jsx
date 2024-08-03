import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { gethomeEventsAPI } from '../Services/allAPI';
import SERVERURL from '../Services/serverurl';
import { Link } from 'react-router-dom';

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
        <h1 style={{fontFamily: "Dancing Script, cursive",color:'#7c047a'}} className=' fw-bolder text-center'>Services</h1>
       
        <Row className="row justify-content-center ms-5 me-5">
        {
          homeEvents?.length > 0 ? (
            homeEvents?.map((homeEvent) => (
              <Col key={homeEvent?._id} className="d-flex justify-content-center text-center">
                <div>
                  <Card className='eventCard mt-5  rounded-4' style={{ width: '300px', height:'480px',border:'none'}}>
                    <Link to={`singleEvent/${homeEvent._id}`}  style={{textDecoration:'none'}} >
                      <Card.Img className='w-100 border rounded-4' style={{ height:'300px'}} variant="top" src={`${SERVERURL}/uploads/${homeEvent?.eventImg}`} />
                      <div className="card-overlay">
                          <h2>{homeEvent?.eventName}</h2>
                      </div>
                    </Link>
                    <Card.Body>
                      <Card.Title className=' fw-bold'>{homeEvent?.eventName}</Card.Title>
                      <Card.Text>
                        {homeEvent?.eventDescription.slice(0,55)}...
                      </Card.Text>
                    </Card.Body>
                    <Card.Body>
                    <Link to={`/singleEvent/${homeEvent._id}`}  style={{textDecoration:'none',backgroundColor:'#7c047a',color:'white'}} className='enquire btn border rounded-5 ps-4 pe-4'>Enquire Now</Link>
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