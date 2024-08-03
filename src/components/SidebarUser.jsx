import React, { useEffect, useState } from 'react'
import profileImg from '../assets/profileImg.jpg';
import SERVERURL from '../Services/serverurl';

const SidebarUser = () => {    
    const [profile, setProfile] = useState({
        username: "",
        email: "",
        phone: "",
        profilePic: ""
      });
    const [existingImg, setExistingImg] = useState("");
    
    useEffect(() => {
        // Fetch the user details from session storage
        const existingProfile = JSON.parse(sessionStorage.getItem('user'));
        if (existingProfile) {
          setProfile({
            username: existingProfile.username,
            email: existingProfile.email,
            phone: existingProfile.phone,
            profilePic: existingProfile.profilePic
          });
          setExistingImg(existingProfile.profilePic || "");
        }
    }, []);
  return (
    <div className="d-flex flex-column align-items-center mb-4">
    <img
      height={'100px'}
      width={'100px'}
      className='border rounded-circle bg-light'
      src={existingImg ? `${SERVERURL}/uploads/${existingImg}` : profileImg}
      alt="User Profile"
    />
    <h6 className='mt-2 text-white'>{profile.username}</h6>
  </div>
);
}
export default SidebarUser