import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LogoHeader = () => {
  return (
    <div><Navbar.Brand>
    <Link to={'/'} style={{textDecoration:'none',color:'#7c047a'}} className="nova-round-regular fs-4">MoonBug Events</Link>
  </Navbar.Brand></div>
  )
}

export default LogoHeader