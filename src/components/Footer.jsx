import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [comment, setComment] = useState('');

  const handleSendEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('New Comment from Website');
    const body = encodeURIComponent(comment);
    window.location.href = `mailto:hajis4u2mail@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <footer style={{backgroundColor:'#7c047a'}} className="footer text-white mt-5 pt-5">
      <div className="container-fluid">
        <div className="row ps-5 pe-5 ">

          <div className="col-lg-3"> 
            <h4 className='text-white mb-3'>About Us</h4>
            <p>We create unforgettable events with style and elegance.</p>
          </div>
          <div  className="col-lg-3">
            <h4 className='text-white mb-3'>Quick Links</h4>
            <ul  className="list-unstyled">
              <li><Link style={{textDecoration:'none'}} className='text-white' to={'/'}>Home</Link></li>
              <li><Link style={{textDecoration:'none'}} className='text-white' to={'/services'}>Services</Link></li>
              <li><Link style={{textDecoration:'none'}} className='text-white' to={'/testimonials'}>Testimonials</Link></li>
              <li><Link style={{textDecoration:'none'}} className='text-white' to={'/contact'}>Contact Us</Link></li>
            </ul>
          </div>
          <div style={{lineHeight:'10px'}} className="col-lg-3">
            <h4 className='text-white mb-3'>Contact Us</h4>
            <p><i className="pe-2 fa-solid fa-location-dot"></i>395W+R4W, Pukkattupady</p><p className='ps-4'> Kerala 683561</p>
            <p><i className="pe-2 fa-solid fa-envelope"></i><a style={{textDecoration:'none',color:'white'}} href="mailto:hajis4u2mail@gmail.com">hajis4u2mail@gmail.com</a></p>
            <p className='mb-0'><i className="pe-2 fa-solid fa-phone"></i>9946124710</p>
          </div>
          <div className="col-lg-3 ">
      <h4 className='text-white mb-3'>Connect</h4>
      <Form onSubmit={handleSendEmail}>
        <Form.Group className="d-flex justify-content-between align-items-center">
          <div>
            <Form.Control
              as="textarea"
              rows={1}
              cols={28}
              placeholder='Leave your comment here...'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div>
            <button style={{color:'#7c047a'}} className="ps-2 btn btn-light" type="submit">
              <i className="fa-solid fa-arrow-right fw-bolder"></i>
            </button>
          </div>
        </Form.Group>
      </Form>
    
            <ul className="list-unstyled d-flex mt-4">
              <li><a href="https://www.facebook.com" className="text-white mx-2"><FaFacebookF /></a></li>
              <li><a href="https://wa.me/9946124710" className="text-white mx-2"><FaWhatsapp /></a></li>
              <li><a href="https://www.instagram.com/_jas.m.i.n_?igsh=MW4wazk0dGVjemM5bA==" className="text-white mx-2"><FaInstagram /></a></li>
              <li><a href="https://www.linkedin.com" className="text-white mx-2"><FaLinkedinIn /></a></li>
            </ul>
          </div>
         
        </div>
        <hr className="bg-white" />
        <div className="row">
          <div className="col text-center">
            <p>&copy; 2024 MoonBug Events. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
