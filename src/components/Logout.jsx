import React, { useContext } from 'react'
import { tokenAuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate  = useNavigate()
    // Authentication
    const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)

    const handleLogout=()=>{
    sessionStorage.clear();
    setIsAuthorised(false)
    navigate('/')
  }

  return (
    <div className='mt-auto mb-5'>
        <button onClick={handleLogout} className='text-light' style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', textDecoration: 'none', cursor: 'pointer' }}>
            <i className="fa-solid fa-right-from-bracket pe-3"></i>Logout
        </button>
  </div>
  )
}

export default Logout