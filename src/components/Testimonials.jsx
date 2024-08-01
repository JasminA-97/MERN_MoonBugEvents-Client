import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { gethomeReviewsAPI } from '../Services/allAPI';
import { FaStar } from 'react-icons/fa';
import SERVERURL from '../Services/serverurl';
import dummyImg from '../assets/dummy.png'

const Testimonials = () => {
    const [homeReviews, setHomeReviews] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    getHomeReviews();
  }, []);

  const getHomeReviews = async () => {
    try {
      const result = await gethomeReviewsAPI();
      if (result.status === 200) {
        setHomeReviews(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar key={index} color={index < rating ? 'gold' : 'lightgray'} />
    ));
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < homeReviews.length - 3 ? prev + 1 : prev));
  };

  return (
    <>
      <h1 style={{fontFamily: "Dancing Script, cursive"}} className='pt-5 mt-5 fw-bolder text-center'>Testimonials</h1>   
      <div className="container d-flex align-items-center justify-content-center">
        <i className="fa-solid fa-caret-left" onClick={handlePrev} style={{ cursor: 'pointer', fontSize: '2rem', marginRight: '6rem' }}></i>
  
        <Row className="d-flex justify-content-evenly testim">
          {homeReviews.slice(startIndex, startIndex + 3).map((review) => (
            <div key={review?._id} className="col-lg-4 pe-5">
              <div className="card" style={{ height: '22rem' }}>
                <div className="face front-face">
                  <img
                    src={review?.userId?.profilePic ? `${SERVERURL}/uploads/${review.userId.profilePic}` : dummyImg}
                    alt=""
                    className="profile"
                  />
                  <div className="pt-3 text-uppercase name">
                    {review?.userId?.username}
                  </div>
                  <div className="rating">{renderStars(review?.rating)}</div>
                </div>
                <div className="face back-face">
                  <span className="fas fa-quote-left"></span>
                  <div className="testimonial text-light p-3">
                    {review?.review}
                  </div>
                  <span className="fas fa-quote-right"></span>
                </div>
              </div>
            </div>
          ))}
        </Row>
        <i className="fa-solid fa-caret-right" onClick={handleNext} style={{ cursor: 'pointer', fontSize: '2rem', marginLeft: '6rem' }}></i>
      </div>
     </>
  )
}

export default Testimonials




  


   


