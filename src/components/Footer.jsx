import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-2 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-2">
            <h4 className='text-white'>About Us</h4>
            <p>We create unforgettable events with style and elegance.</p>
          </div>
          <div className="col-lg-3 mb-2">
            <h4 className='text-white'>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="/home" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/services" className="text-white">Services</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-3 mb-2">
            <h4 className='text-white'>Follow Us</h4>
            <ul className="list-unstyled d-flex">
              <li><a href="https://www.facebook.com" className="text-white mx-2"><FaFacebookF /></a></li>
              <li><a href="https://www.twitter.com" className="text-white mx-2"><FaTwitter /></a></li>
              <li><a href="https://www.instagram.com" className="text-white mx-2"><FaInstagram /></a></li>
              <li><a href="https://www.linkedin.com" className="text-white mx-2"><FaLinkedinIn /></a></li>
            </ul>
          </div>
          <div className="col-lg-3 mb-2">
            <h4 className='text-white'>Contact Us</h4>
            <p>123 Event Avenue, City, State, 12345</p>
            <p>Email: info@moonbugevents.com</p>
            <p>Phone: (123) 456-7890</p>
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
