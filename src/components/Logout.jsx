import React, { useContext } from 'react'
import { tokenAuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Logout = ({insideDashboard}) => {
    const navigate  = useNavigate()
    // Authentication
    const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)

    const handleLogout=()=>{
    sessionStorage.clear();
    setIsAuthorised(false)
    navigate('/')
  }

return (
  <button style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', textDecoration: 'none', cursor: 'pointer' }}
    className={`btn ${insideDashboard ? 'text-white mt-auto p-0 mb-5' : 'text-dark'}`} 
    onClick={handleLogout}>
    <i className="fa-solid fa-right-from-bracket pe-2"></i>Logout
  </button> 
);
}

export default Logout;


