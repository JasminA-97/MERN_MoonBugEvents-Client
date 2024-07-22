import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { gethomeEventsAPI } from '../Services/allAPI';

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

  const colors = [
    '#dda0dd',
    '#9ac1e3',
    '#e3bc9a',
    '	#d2adad',
    '#D0C4AB',
    '#9ae3bc',
    '#D8BFD8',
    '#ffc0cb',  
    '#dcae96'
  ];

  const boxStyle = {
    width: '200px',  
    height: '200px', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
    borderRadius: '8px', 
  };

  const getColSize = (index) => {
    // Calculate the column size
    const colsInRow = 4;
    return homeEvents.length % colsInRow === 1 && index === homeEvents.length - 1 ? 12 : 3;
  };

  return (
    <div className="py-5">
      <Container className="text-center text-white fw-bolder">
        <Row className="justify-content-center">
          {homeEvents?.length > 0 ? (
            homeEvents?.map((homeEvent, index) => (
              <Col key={homeEvent?._id} md={getColSize(index)} className="d-flex justify-content-center">
                <div
                  style={{
                    ...boxStyle,
                    backgroundColor: colors[index % colors.length],
                  }}
                >
                  <span>{homeEvent?.eventName}</span>
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
