import React, { useEffect, useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { editUserAPI } from '../Services/allAPI';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    username: "", email: "", password: "", phone: ""
  });

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const existingProfile = JSON.parse(sessionStorage.getItem("user"));
      setProfile({
        username: existingProfile.username,
        email: existingProfile.email,
        password: existingProfile.password,
        phone: existingProfile.phone
      });
    }
  }, []);

  const handleUpdateProfile = async (event) => {
    event.preventDefault(); // Prevent form submission if there are validation errors

    const { username, email, password, phone } = profile;
    const reqBody = { username, email, password, phone };
    const token = sessionStorage.getItem("token");

    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      };
      try {
        const result = await editUserAPI(reqBody, reqHeader);
        if (result.status === 200) {
          sessionStorage.setItem("user", JSON.stringify(result.data));
          alert("Profile updated successfully!");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleCancel = () => {
    if (sessionStorage.getItem("user")) {
      const existingProfile = JSON.parse(sessionStorage.getItem("user"));
      setProfile({
        username: existingProfile.username,
        email: existingProfile.email,
        password: existingProfile.password,
        phone: existingProfile.phone
      });
    }
  };

  return (
    <>
      <h2 className='text-center p-5'>Profile</h2>
      <div className="w-100">
        <div className='d-flex justify-content-center align-items-center w-100'>
          <form className='w-50' onSubmit={handleUpdateProfile}>
            <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
              <Form.Control
                type="text"
                name="username"
                value={profile.username}
                onChange={e => setProfile({ ...profile, username: e.target.value })}
                required
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
              <Form.Control
                type="email"
                name="email"
                value={profile.email}
                onChange={e => setProfile({ ...profile, email: e.target.value })}
                required
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
              <Form.Control
                name="password"
                value={profile.password}
                onChange={e => setProfile({ ...profile, password: e.target.value })}
                required
                minLength="4"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3">
              <Form.Control
                type="text"
                name="phone"
                value={profile.phone}
                onChange={e => setProfile({ ...profile, phone: e.target.value })}
                required
                pattern="\d{10}"
                title="Phone number must be 10 digits"
              />
            </FloatingLabel>
            <div className='d-flex justify-content-evenly align-items-center'>
              <Button className='btn' type="submit">Update Profile</Button>
              <Button className='btn btn-secondary' type="button" onClick={handleCancel}>Cancel</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
