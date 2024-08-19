import React, { useEffect, useState } from 'react';
import SERVERURL from '../Services/serverurl';
import profileImg from '../assets/profileImg.jpg';

const ViewProfile = () => {
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    profilePic: ""
  });

  useEffect(() => {
    const existingProfile = JSON.parse(sessionStorage.getItem('user'));
    if (existingProfile) {
      setProfile(existingProfile);
    }
  }, []);

  return (
    <>
      <h3 className='text-center mt-5'>Profile</h3>
      <div style={{height:'60vh'}} className='w-100 d-flex flex-wrap justify-content-center align-items-center'>
        <div className="row pt-3 pb-3 border border-5 rounded-5 w-50 d-flex justify-content-center align-items-center">
          <div className="col-lg-5 text-center">
            <img
              height={'200px'}
              width={'200px'}
              src={profile.profilePic ? `${SERVERURL}/uploads/${profile.profilePic}` : profileImg}
              alt="User Profile"
              className='rounded-circle'
            />
            <h5 >{profile.username}</h5>
          </div>
          <div className="col-lg-5 mt-4">
            <h6><i style={{color:'#7c047a'}} className="mb-3 pe-3 fa-solid fa-envelope"></i>{profile.email}</h6>
            <h6><i style={{color:'#7c047a'}} className="mb-3 pe-3 fa-solid fa-phone"></i>{profile.phone}</h6>
            <h6><i style={{color:'#7c047a'}} className="mb-3 pe-3 fa-solid fa-key"></i>{profile.password}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;
