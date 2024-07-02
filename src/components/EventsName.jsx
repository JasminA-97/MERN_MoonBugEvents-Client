import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const EventsName = () => {
  return (
    <div className="py-5">
      <Container className="bg-grey text-center">
        <Row className="justify-content-center" md={4}>
          <Col className="py-3">
            <img src="https://img.icons8.com/?size=100&id=GUr9QmddhC6I&format=png&color=000000" alt="" />
            <br />
            <span>WEDDING</span>
          </Col>
          <Col className="py-3">
            <img src="https://img.icons8.com/?size=100&id=10052&format=png&color=000000" alt="" />
            <br />
            <span>BIRTHDAY</span>
          </Col>
          <Col className="py-3">
            <img src="https://img.icons8.com/?size=100&id=kuzCMGRTJUkH&format=png&color=000000" alt="" />
            <br />
            <span>BABY SHOWER</span>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row className="justify-content-center" md={4}>
          <Col className="py-3">
            <img src="https://img.icons8.com/?size=100&id=10136&format=png&color=000000" alt="" />
            <br />
            <span>ANNIVERSARY</span>
          </Col>
          <Col className="py-3">
            <img src="https://img.icons8.com/?size=100&id=107743&format=png&color=000000" alt="" />
            <br />
            <span>THEME PARTIES</span>
          </Col>
          <Col className="py-3">
            <img src="https://img.icons8.com/?size=100&id=SCXPsjoqmzAp&format=png&color=000000" alt="" />
            <br />
            <span>FESTIVALS</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EventsName;
