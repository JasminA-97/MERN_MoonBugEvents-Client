
import {Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'

import CardContainer from './components/CardContainer'
import AdminDashboard from './pages/AdminDashboard'
import AdminManageEvent from './components/AdminManageEvent'
import AdminViewBookings from './components/AdminViewBookings'
import AdminProfile from './components/AdminProfile'
import AdminViewUsers from './components/AdminViewUsers'
import AdminHome from './components/AdminHome'
import UserDashboard from './pages/UserDashboard'
import UserHome from './components/UserHome'
import UserBookEvent from './components/UserBookEvent'
import UserBookingHistory from './components/UserBookingHistory'
import UserProfile from './components/UserProfile'
import { useContext } from 'react'
import { tokenAuthContext } from './contexts/AuthContext'
import Logout from './components/Logout'
import UserAddReview from './components/UserAddReview'
import SingleEvent from './components/SingleEvent'
import Services from './components/Services'
import Videos from './components/Videos'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'
import AboutUs from './components/AboutUs'
import ViewProfile from './components/ViewProfile'

function App() {
  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)

  return (
<>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<AboutUs/>} path='/aboutUs'/>
      <Route element={<Services/>} path='/services'/>
      <Route element={<Videos/>} path='/videos'/>
      <Route element={<Testimonials/>} path='/testimonials'/>
      <Route element={<Contact/>} path='/contact'/>

      <Route element={<CardContainer/>} path='/login'/>
      <Route element={<CardContainer/>} path='/register'/>
      <Route element={<Logout/>} path='/logout'/>
      <Route element={<SingleEvent/>} path ='/singleEvent/:eid'/>

      <Route element={isAuthorised?<AdminDashboard/>:<Navigate to={'/login'}/>} path='/admindashboard/*'>
      <Route element={<AdminHome/>} path='adminhome'/>
        <Route element={<AdminManageEvent/>} path='manage'/>
        <Route element={<AdminViewBookings/>} path='bookings'/>
        <Route element={<AdminViewUsers/>} path='viewusers'/>
        <Route element={<ViewProfile/>} path='viewprofile'/>
        <Route element={<AdminProfile/>} path='editprofile'/>
      </Route>

      <Route element={isAuthorised?<UserDashboard/>:<Navigate to={'/login'}/>} path='/userdashboard/*'>
        <Route element={<UserHome/>} path='userHome'/>
        <Route element={<UserBookEvent />} path="userBookEvents" />
        <Route element={<UserBookingHistory/>}  path='userBookingHistory'/>
        <Route element={<UserAddReview/>}  path='userAddReview'/>
        <Route element={<ViewProfile/>} path='viewprofile'/>
        <Route element={<UserProfile/>} path='updateprofile'/>
      </Route>

    </Routes>
   
</>
  )
}

export default App
