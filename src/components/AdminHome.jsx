import React, { useEffect, useState } from 'react'

const AdminHome = () => {
  const [userName,setUserName] = useState("")

useEffect(()=>{
  if(sessionStorage.getItem('user')){
    const uname=JSON.parse(sessionStorage.getItem('user')).username;
    setUserName(uname)
  }else{
    setUserName("")
  }
},[])

  return (
    <>
      <h1 className='m-5'>Welcome&nbsp;<span className='text-primary'>{userName},</span></h1>
      </>
  )
}

export default AdminHome