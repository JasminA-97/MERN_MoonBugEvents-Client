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
      <h3 className='m-5'>Hey&nbsp;<span className='username'>{userName},</span></h3>
      </>
  )
}

export default AdminHome