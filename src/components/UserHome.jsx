import React, { useEffect, useState } from 'react'

const UserHome = () => {
  const [userName,setUserName]=useState("")

  useEffect(()=>{
    if(sessionStorage.getItem('user')){
      const uname = JSON.parse(sessionStorage.getItem('user')).username
      setUserName(uname)
    }else{
      setUserName("")
    }
  },[])

  return (
    <>
      <h1 className='m-5'>Hey&nbsp;<span className='text-primary'>{userName},</span></h1>
      <div style={{height:'50%'}} className="d-flex flex-column justify-content-center align-items-center">
          <h2>Welcome to MoonBug Events!</h2>
          <h4 className='pt-2'>Book Your Event</h4>
          <p className='pt-2'>We are delighted to help you plan and manage your special events <p>Explore our services and book your event with us today!</p></p>
      </div>
    </>
  )
}

export default UserHome