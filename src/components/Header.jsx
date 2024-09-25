import React from 'react';
import { Link } from 'react-router-dom';
import NavHeader from './NavHeader';
import { Carousel } from 'react-bootstrap';
import homebg1 from '../assets/homebg1.jpg'
import homebg2 from '../assets/homebg2.jpg';
import homebg3 from '../assets/homebg3.jpg';

const Header = () => {
  return (
    <div>
      <NavHeader />

      <div style={{ paddingTop: '107px' }}>
        <Carousel className='carousel'>
          <Carousel.Item>
            <div className="carousel-img-wrapper">
              <img src={homebg1} alt="First slide" />
              <div className="carousel-overlay"></div>
            </div>
            <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center">
              <h3>Your One-stop Solution for Event Decoration</h3>
              <h5>for all your special moments</h5>
              <button className='mt-4 btn btn-light ps-3 pe-3 pt-2 pb-2 rounded-5'>
                <Link style={{ textDecoration: 'none',color:'#7c047a',fontWeight:'bold'}} to={'/login'}>Book Now</Link>
              </button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-img-wrapper">
              <img src={homebg2} alt="Second slide" />
              <div className="carousel-overlay"></div>
            </div>
            <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center">
            <h3>Your One-stop Solution for Event Decoration</h3>
              <h5>for all your special moments</h5>
              <button className='mt-4 btn btn-light ps-3 pe-3 pt-2 pb-2 rounded-5'>
                <Link style={{ textDecoration: 'none',color:'#7c047a',fontWeight:'bold'}} to={'/login'}>Book Now</Link>
              </button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-img-wrapper">
              <img src={homebg3} alt="Third slide" />
              <div className="carousel-overlay"></div>
            </div>
            <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center">
              <h3>Your One-stop Solution for Event Decoration</h3>
              <h5>for all your special moments</h5>
              <button className='mt-4 btn btn-light ps-3 pe-3 pt-2 pb-2 rounded-5'>
                <Link style={{ textDecoration: 'none',color:'#7c047a',fontWeight:'bold'}} to={'/login'}>Book Now</Link>
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}
export default Header;
