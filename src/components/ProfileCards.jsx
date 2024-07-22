import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { gethomeReviewsAPI } from '../Services/allAPI';
import { FaStar } from 'react-icons/fa';

const ProfileCards = () => {
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
    <div className="container d-flex align-items-center justify-content-center pb-5">
      <i className="fa-solid fa-caret-left" onClick={handlePrev} style={{ cursor: 'pointer', fontSize: '2rem', marginRight: '6rem' }}></i>

      <Row className="d-flex justify-content-evenly">
        {homeReviews.slice(startIndex, startIndex + 3).map((review) => (
          <div key={review?._id} className="col-lg-4 pe-5">
            <div className="card" style={{ height: '20rem' }}>
              <div className="face front-face">
                <img
                  src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
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
  );
};

export default ProfileCards;
