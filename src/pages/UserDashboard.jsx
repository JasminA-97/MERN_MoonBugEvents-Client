import React from 'react'
import NavHeader from '../components/NavHeader'
import { Link, Outlet } from 'react-router-dom'
import Logout from '../components/Logout'
import SidebarUser from '../components/SidebarUser'
import { Dropdown } from 'react-bootstrap'

const UserDashboard = () => {

  return (
    <>
      {/* <NavHeader/> */}
            <div className="row w-100"> 
                <div className="adminSidebar col-2 d-flex flex-column pt-5 ps-4">
                    <SidebarUser/>
                    <Link className='mb-4 text-light' style={{textDecoration:'none'}} to={'userHome'}><i className="fa-solid fa-house pe-3"></i>Home</Link>
                    <Link className='mb-4 text-light' style={{textDecoration:'none'}} to={'userBookEvents'}><i className="fa-solid fa-bars-progress pe-3"></i>Book Events</Link>
                    <Link className='mb-4 text-light' style={{textDecoration:'none'}} to={'userBookingHistory'}><i className="fa-solid fa-clock-rotate-left pe-3"></i>Booking History</Link>
                    <Link className='mb-2 text-light' style={{textDecoration:'none'}} to={'userAddReview'}><i className="fa-solid fa-pen pe-3"></i>Add Review</Link>
                    <hr className='text-white'/>
                    <Dropdown>
                      <Dropdown.Toggle style={{textDecoration:'none',border:'none'}} variant="link" id="dropdown-basic" className="text-light p-0">
                        <i className="fa-solid fa-user pe-3"></i>Profile
                      </Dropdown.Toggle>
                      <Dropdown.Menu style={{backgroundColor:'transparent',border:'none'}}>
                        <Dropdown.Item className='dropdownItem'>
                          <Link className='text-white' style={{textDecoration:'none',fontSize:'14px'}} to={'viewprofile'}><i style={{fontSize:'12px'}} className="greatersymbol pe-3 fa-solid fa-greater-than"></i>View Profile</Link> 
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdownItem'>
                          <Link className='text-light' style={{textDecoration:'none',fontSize:'14px'}} to={'updateprofile'}><i style={{fontSize:'12px'}} className="greatersymbol pe-3 fa-solid fa-greater-than"></i>Update Profile</Link> 
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Logout/>               
                 </div>
                <div style={{ height: '100vh',overflowY:'scroll'}} className="col p-0"><Outlet/></div>
            </div>
    </>
  )
}

export default UserDashboard