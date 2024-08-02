import React from 'react'
import NavHeader from '../components/NavHeader'
import { Link, Outlet } from 'react-router-dom'
import Logout from '../components/Logout'

const UserDashboard = () => {

  return (
    <>
      {/* <NavHeader/> */}
            <div className="row w-100"> 
                <div style={{ background:'linear-gradient(to bottom, #000428, #004683)',height:'91vh'}} className="col-2 d-flex flex-column p-5">
                    <Link className='mb-4 text-light' style={{textDecoration:'none'}} to={'userHome'}><i className="fa-solid fa-house pe-3"></i>Home</Link>
                    <Link className='mb-4 text-light' style={{textDecoration:'none'}} to={'userBookEvents'}><i className="fa-solid fa-bars-progress pe-3"></i>Book Events</Link>
                    <Link className='mb-4 text-light' style={{textDecoration:'none'}} to={'userBookingHistory'}><i className="fa-solid fa-clock-rotate-left pe-3"></i>Booking History</Link>
                    <Link className='mb-4 text-light' style={{textDecoration:'none'}} to={'userAddReview'}><i className="fa-solid fa-pen pe-3"></i>Add Review</Link>
                    <hr />
                    <Link className='mb-4 text-light' style={{textDecoration:'none'}} to={'userProfile'}><i className="fa-solid fa-user pe-3"></i>Profile</Link> 
                    <Logout/>               
                 </div>
                <div style={{ height: '91vh',overflowY:'hidden'}} className="col p-0"><Outlet/></div>
            </div>
    </>
  )
}

export default UserDashboard