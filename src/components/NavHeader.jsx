import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const NavHeader = () => {
  return (
    <>
      {/* Top Info Bar */}
      <div style={{ backgroundColor: '#f8f9fa',height:'45px', zIndex: 10, position:'fixed',top:'0' }} className='row w-100' >
       <div style={{height:'45px'}} className='pt-2 d-flex flex-wrap justify-content-center align-items-center'>
          <div className='col-lg-9 d-flex flex-wrap justify-content-evenly align-items-center'>
            <p><i style={{color:'#7c047a'}} className="pe-2 fa-solid fa-location-dot"></i>395W+R4W, Pukkattupady, Kerala 683561</p>
            <p><i style={{color:'#7c047a'}} className="pe-2 fa-solid fa-phone"></i>9946124710</p>
            <p><i style={{color:'#7c047a'}} className="pe-2 fa-solid fa-clock"></i>Mon-Sun: 10:00AM - 07:00PM</p>
            <p><i style={{color:'#7c047a'}} className="pe-2 fa-solid fa-envelope"></i>hajis4u2mail@gmail.com</p>
          </div>
          <div className="col-lg-1"></div>
          <div className='col-lg-2 d-flex flex-wrap justify-content-evenly align-items-center'>
            <a href="https://www.facebook.com"><i style={{color:'#316FF6'}} className=" fs-5 fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/_jas.m.i.n_?igsh=MW4wazk0dGVjemM5bA=="><i className="instagram fs-5 fa-brands fa-instagram"></i></a>
            <a href="https://wa.me/9946124710"><i style={{color:'#25D366'}} className=" fs-5 fa-brands fa-whatsapp"></i></a>
            <a href="https://www.linkedin.com"><i style={{color:'#0072b1'}} className="fs-5 fa-brands fa-linkedin"></i></a>
                      
          </div>
       </div>
      </div>

      {/* Main Navbar */}
      <Navbar expand="lg" style={{ position: 'fixed', top: '45px', width: '100%', zIndex: 10, backgroundColor: '#fff' }} className="shadow-sm ps-3 pe-3">
        <Navbar.Brand>
          <Link to={'/'}className="logoName nova-round-regular fs-3">MoonBug Events</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link style={{color:'#7c047a'}} to={'/'} className="fw-bolder links">About Us</Link></Nav.Link>
            <Nav.Link><Link style={{color:'#7c047a'}} to={'/services'} className="fw-bolder links">Services</Link></Nav.Link>
            <Nav.Link><Link style={{color:'#7c047a'}} to={'/videos'} className="fw-bolder links">Videos</Link></Nav.Link>
            <Nav.Link><Link style={{color:'#7c047a'}} to={'/testimonials'} className="fw-bolder links">Testimonials</Link></Nav.Link>
            <Nav.Link><Link style={{color:'#7c047a'}} to={'/contact'} className="fw-bolder links">Contact us</Link></Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link><Link to={'/login'} style={{textDecoration:'none',backgroundColor:'#af05ac',color:'white'}}className='enquire btn border ms-4 ps-4 pe-4 fw-bolder'>Login</Link></Nav.Link>   
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavHeader;
