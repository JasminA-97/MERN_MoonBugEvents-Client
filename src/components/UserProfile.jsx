import React, { useEffect, useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { editUserAPI } from '../Services/allAPI';
import profileImg from '../assets/profileImg.jpg';
import SERVERURL from '../Services/serverurl';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    username: "", email: "", password: "", phone: "", profilePic: ""
  });
  const [existingImg, setExistingImg] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const existingProfile = JSON.parse(sessionStorage.getItem("user"));
      setProfile({
        ...profile,
        username: existingProfile.username,
        email: existingProfile.email,
        password: existingProfile.password,
        phone: existingProfile.phone
      });
      setExistingImg(existingProfile.profilePic || "");
    }
  }, []);

  useEffect(() => {
    if (profile.profilePic) {
      setPreview(URL.createObjectURL(profile.profilePic));
    } else {
      setPreview("");
    }
  }, [profile.profilePic]);

  const handleUpdateProfile = async (e) => {
     e.preventDefault();

    const { username, email, password, phone, profilePic } = profile;
    if (username && email && password && phone) {
      const reqBody = new FormData();
      reqBody.append("username", username);
      reqBody.append("email", email);
      reqBody.append("password", password);
      reqBody.append("phone", phone);
      preview?reqBody.append("profilePic",profilePic):reqBody.append("profilePic",existingImg)
    
      const token = sessionStorage.getItem("token");

      if (token) {
        const reqHeader ={
          "Content-Type": preview?"multipart/form-data" :"application/json",
          "Authorization":`Bearer ${token}`
        }
        try {
          const result = await editUserAPI(reqBody, reqHeader);
          if (result.status === 200) {
            sessionStorage.setItem("user", JSON.stringify(result.data));
            alert("Profile updated successfully!");
          }else{
            console.log(result);
          }
        } catch (err) {
          console.log(err);
        }
      }
    }else{
      alert('Please fill the form completely!')
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
      setExistingImg(existingProfile.profilePic || "");
    }
  };

  return (
    <>
      <h2 className='text-center p-3'>Update Profile</h2>
      <div className="w-100">
        <div className='d-flex justify-content-center align-items-center w-100'>
          <form className='w-50 border border-5 rounded-5 ps-3 pe-3 pb-3 ' onSubmit={handleUpdateProfile}>
          <label className='d-flex justify-content-center mb-2'>
         
            <input type="file" style={{display:'none'}} onChange={e=>setProfile({...profile,profilePic:e.target.files[0]})}/>

            {
              existingImg==""?
              <img width={'200px'} height={'200px'} className='rounded-circle' src={preview?preview:profileImg} alt="" />
              :
              <img width={'200px'} height={'200px'} className='rounded-circle' src={preview ? preview : existingImg ? `${SERVERURL}/uploads/${existingImg}` : profileImg} alt="" />

            }

          </label>
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
              <button style={{backgroundColor:'#7c047a', color:'white'}} className='enquire btn border rounded-5 ps-3 pe-3 fw-bolder' type="submit">Update</button>
              <Button className='btn btn-secondary border rounded-5 ps-3 pe-3 fw-bolder' type="button" onClick={handleCancel}>Cancel</Button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
