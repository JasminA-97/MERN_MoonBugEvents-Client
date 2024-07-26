import React from 'react'
import {Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Logout from '../components/Logout'

const NavHeader = () => {
  return (
    <>
        <Navbar style={{ background:'linear-gradient(to bottom, #000428, #004683)'}}  className="navbar-transparent ps-3 pe-3">
            
                <Navbar.Brand><Link to={'/'} style={{textDecoration:'none'}} className="nova-round-regular text-white fs-4">MoonBug Events</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link > <Logout/></Nav.Link>
                        {/* <Nav.Link ><Link to={'/'}className="text-dark text-white links" >About Us</Link></Nav.Link>
                        <Nav.Link ><Link to={'/'}className="text-dark text-white links" >Events</Link></Nav.Link>
                        <Nav.Link ><Link to={'/'}className="text-dark text-white links" >Gallery</Link></Nav.Link>
                        <Nav.Link ><Link to={'/'}className="text-dark text-white links" >Services</Link></Nav.Link>
                        <Nav.Link ><Link to={'/'}className="text-dark text-white links" >Contact us</Link></Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
           
        </Navbar>
    </>
  )
}

export default NavHeader