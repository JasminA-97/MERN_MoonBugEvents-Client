import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { addReviewAPI } from '../Services/allAPI';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

const UserAddReview = () => {
  const [formData, setFormData] = useState({
    review: '',
    rating: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { review, rating } = formData;
    const token = sessionStorage.getItem('token');

    if (review && rating) {
      if (token) {
        const reqBody = { review, rating };
        const reqHeader = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        };

        try {
          const result = await addReviewAPI(reqBody, reqHeader);
          if (result.status === 200) {
            toast.info('Review added successfully!');
            setFormData({ review: '', rating: 0 });
          } else {
            toast.info(result.response.data);
          }
        } catch (err) {
          console.log(err);
          toast.info('Error occurred while adding review.');
        }
      } else {
        toast.warning('No token found. Please log in again.');
      }
    } else {
      toast.info('Please fill all required fields!');
    }
  };

  const handleRatingChange = (ratingValue) => {
    setFormData({ ...formData, rating: ratingValue });
  };

  return (
    <div style={{ height: '100vh' }} className="user-add-review bg-light w-100">
      <h2 className='text-center p-5'>Add a Review</h2>
      <div className='d-flex justify-content-center flex-column align-items-center'>
        <Form className='w-50 border border-2 rounded-5 p-5 bg-white ' onSubmit={handleSubmit}>
          <FloatingLabel controlId="floatingReview" label="Review" className="mb-3">
            <Form.Control
              value={formData.review}
              onChange={(e) => setFormData({ ...formData, review: e.target.value })}
              as="textarea"
              placeholder="Enter Your Review"
              style={{ height: '100px' }}
              required
            />
          </FloatingLabel>

          <div className="star-rating mb-3">
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => handleRatingChange(ratingValue)}
                    style={{ display: 'none' }}
                  />
                  <FaStar
                    className="star"
                    color={ratingValue <= formData.rating ? "#ffc107" : "#e4e5e9"}
                    size={30}
                    style={{ cursor: 'pointer' }}
                  />
                </label>
              );
            })}
          </div>
          <div className="text-center mt-4">
            <button style={{backgroundColor:'#7c047a', color:'white'}} type="submit" className="enquire btn border rounded-5 ps-3 pe-3 fw-bolder">Submit Review</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UserAddReview;
