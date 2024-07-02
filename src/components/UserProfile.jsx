import React, { useState } from 'react'
import { Form, FloatingLabel, Button } from 'react-bootstrap';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic
    console.log(profile);
  };

  return (
    <div className="p-5">
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
          <Form.Control
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
          <Form.Control
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3">
          <Form.Control
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <Button type="submit" className="w-100">Update Profile</Button>
      </form>
    </div>
  );
};

export default UserProfile