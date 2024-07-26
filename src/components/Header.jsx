import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header className="bg-image">
         
            <div className='header-content' >
                <div style={{height:'100%'}}  className="d-flex flex-column justify-content-center align-items-center w-100 " >
                    <h4>Your one-stop solution for event decoration.</h4>
                    <button className='mt-2 btn btn-light p-2'><Link style={{textDecoration:'none',color:'black'}} to={'/login'}>Book Now</Link></button>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header