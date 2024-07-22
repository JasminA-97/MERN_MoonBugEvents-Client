import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { addReviewAPI } from '../Services/allAPI';
import { FaStar } from 'react-icons/fa';

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
            alert('Review added successfully!');
            setFormData({ review: '', rating: 0 });
          } else {
            alert(result.response.data);
          }
        } catch (err) {
          console.log(err);
          alert('Error occurred while adding review.');
        }
      } else {
        alert('No token found. Please log in again.');
      }
    } else {
      alert('Please fill all required fields!');
    }
  };

  const handleRatingChange = (ratingValue) => {
    setFormData({ ...formData, rating: ratingValue });
  };

  return (
    <div className="user-add-review">
      <h2 className='text-center p-5'>Add a Review</h2>
      <div className='d-flex justify-content-center flex-column align-items-center'>
        <Form className='w-50' onSubmit={handleSubmit}>
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

          <Button variant="primary" type="submit">
            Submit Review
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UserAddReview;
