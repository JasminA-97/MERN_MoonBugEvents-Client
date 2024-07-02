import React from 'react'
import NavHeader from '../components/NavHeader'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const navigate  = useNavigate()
  const handleLogout=()=>{
    sessionStorage.clear();
    navigate('/')
  }

  return (
    <>
        <NavHeader/>
            <div className="row w-100">
                <div style={{ background:'linear-gradient(to bottom, #000428, #004683)',height:'91vh'}} className="col-2 d-flex flex-column p-5">
                    <Link className='mb-4 text-light' style={{textDecoration:'none'}} to={'adminhome'}><i className="fa-solid fa-house pe-3"></i>Home</Link>
                    <Link className='mb-4 text-light' style={{textDecoration:'none'}} to={'manage'}><i className="fa-solid fa-bars-progress pe-3"></i>Manage Events</Link>
                    <Link className='mb-4 text-light' style={{textDecoration:'none'}} to={'bookings'}><i className="fa-solid fa-bookmark pe-3"></i>View Bookings</Link>
                    <Link className='mb-4 text-light' style={{textDecoration:'none'}} to={'history'}><i className="fa-solid fa-clock-rotate-left pe-3"></i>Booking History</Link>
                    <Link className='mb-4 text-light' style={{textDecoration:'none'}} to={'viewusers'}><i class="fa-solid fa-users pe-3"></i>View users</Link>
                    <Link className='mb-4 text-light' style={{textDecoration:'none'}} to={'notifications'}><i className="fa-solid fa-comments pe-3"></i>Notifications</Link>
                    <hr />
                    <Link className='mb-4 text-light' style={{textDecoration:'none'}} to={'profile'}><i className="fa-solid fa-user pe-3"></i>Profile</Link> 
                    <button onClick={handleLogout} className='mb-4 text-light' style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', textDecoration: 'none', cursor: 'pointer' }}>
                      <i className="fa-solid fa-right-from-bracket pe-3"></i>Logout
                    </button>
                </div>
                <div style={{ height: '91vh',overflowY:'hidden'}} className="col"><Outlet/></div>
            </div>
    </>
  )
}

export default AdminDashboard