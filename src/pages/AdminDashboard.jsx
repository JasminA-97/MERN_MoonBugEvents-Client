import React from 'react'
import NavHeader from '../components/NavHeader'
import { Link, Outlet} from 'react-router-dom'
import Logout from '../components/Logout'
import SidebarUser from '../components/SidebarUser'
import { Dropdown } from 'react-bootstrap'
import NavDashboard from '../components/NavDashboard'

const AdminDashboard = () => {
  return (
    <>
        {/* <NavHeader/> */}
            <div className="row w-100">
                <div className="adminSidebar col-2 d-flex flex-column pt-5 ps-4">
                  <SidebarUser/>
                    <Link className='mb-4 text-light' style={{textDecoration:'none'}} to={'adminhome'}><i className="fa-solid fa-house pe-3"></i>Home</Link>
                    <Link className='mb-4 text-light' style={{textDecoration:'none'}} to={'manage'}><i className="fa-solid fa-bars-progress pe-3"></i>Manage Events</Link>
                    <Link className='mb-4 text-light' style={{textDecoration:'none'}} to={'bookings'}><i className="fa-solid fa-bookmark pe-3"></i>View Bookings</Link>
                    <Link className='mb-2 text-light' style={{textDecoration:'none'}} to={'viewusers'}><i class="fa-solid fa-users pe-3"></i>View users</Link>
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
                          <Link className='text-light' style={{textDecoration:'none',fontSize:'14px'}} to={'editprofile'}><i style={{fontSize:'12px'}} className="greatersymbol pe-3 fa-solid fa-greater-than"></i>Update Profile</Link> 
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Logout/>
                </div>
                <div style={{ height: '100vh',overflowY:'scroll'}} className="col-10 p-0" ><NavDashboard/><Outlet/></div>
            </div>
    </>
  )
}

export default AdminDashboard