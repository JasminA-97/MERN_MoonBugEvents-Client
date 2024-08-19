import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'

const UserHome = () => {
  const [userName,setUserName]=useState("")
  const navigate = useNavigate()

  useEffect(()=>{
    if(sessionStorage.getItem('user')){
      const uname = JSON.parse(sessionStorage.getItem('user')).username
      setUserName(uname)
    }else{
      setUserName("")
    }
  },[])

  const handleNavigate = ()=>{
    navigate('/userdashboard/userBookEvents')
  }

  return (
    <>
      <h3 className='m-5'>Hey&nbsp;<span className='username'>{userName},</span></h3>
      <div style={{height:'auto'}} className="d-flex flex-column justify-content-center align-items-center">
          <h2>Welcome to MoonBug Events!</h2>
          <h4 className='pt-2'>Book Your Event</h4>
          <p className='pt-2'>We are delighted to help you plan and manage your special events <p>Explore our services and book your event with us today!</p></p>
          <button style={{backgroundColor:'#7c047a',color:'white'}} onClick={handleNavigate} className="enquire btn border rounded-5 ps-3 pe-3 fw-bolder">Book Now</button>
      </div>
    </>
  )
}

export default UserHome