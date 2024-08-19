import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const NavDashboard = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow fixed-top" style={{zIndex:'2'}} >
      <Container>
        <Navbar.Brand>
          <Link to={'/'} style={{marginLeft:'150px'}} className="logoName nova-round-regular fs-3">MoonBug Events</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown className='fw-bolder' style={{color:'#7c047a'}} title="Profile" id="basic-nav-dropdown" align="end">
              <NavDropdown.Item as={Link} to={'viewprofile'}>View Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'editprofile'}>Update Profile</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item><Logout/></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavDashboard;
