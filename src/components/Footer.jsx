import React from 'react'

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4 mt-5 position fixed bottom-0">
    <div className="container">
      <div className="row">
        <div className="col-md-3 mb-4">
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="col-md-3 mb-4">
          <h4>Quick Links</h4>
          <ul className="list-unstyled">
            <li><a href="/home" className="text-white">Home</a></li>
            <li><a href="/about" className="text-white">About</a></li>
            <li><a href="/services" className="text-white">Services</a></li>
            <li><a href="/contact" className="text-white">Contact</a></li>
          </ul>
        </div>
        <div className="col-md-3 mb-4">
          <h4>Follow Us</h4>
          <ul className="list-unstyled d-flex">
            <li><a href="https://www.facebook.com" className="text-white mx-2"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.twitter.com" className="text-white mx-2"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com" className="text-white mx-2"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com" className="text-white mx-2"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
        <div className="col-md-3 mb-4">
          <h4>Contact Us</h4>
          <p>123 Street Name, City, State, 12345</p>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);
};

export default Footer