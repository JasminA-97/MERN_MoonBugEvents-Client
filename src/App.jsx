
import {Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'

import CardContainer from './components/CardContainer'
import AdminDashboard from './pages/AdminDashboard'
import AdminManageEvent from './components/AdminManageEvent'
import AdminViewBookings from './components/AdminViewBookings'
import AdminBookingHistory from './components/AdminBookingHistory'
import AdminNotifictions from './components/AdminNotifictions'
import AdminProfile from './components/AdminProfile'
import AdminViewUsers from './components/AdminViewUsers'
import AdminHome from './components/AdminHome'
import UserDashboard from './pages/UserDashboard'
import UserHome from './components/UserHome'
import UserBookEvent from './components/UserBookEvent'
import UserBookingHistory from './components/UserBookingHistory'
import UserNotification from './components/UserNotification'
import UserProfile from './components/UserProfile'


function App() {


  return (
<>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<CardContainer/>} path='/login'/>
      <Route element={<CardContainer/>} path='/register'/>
      <Route element={<AdminDashboard/>} path='/admindashboard/*'>
      <Route element={<AdminHome/>} path='adminhome'/>
        <Route element={<AdminManageEvent/>} path='manage'/>
        <Route element={<AdminViewBookings/>} path='bookings'/>
        <Route element={<AdminBookingHistory/>} path='history'/>
        <Route element={<AdminViewUsers/>} path='viewusers'/>
        <Route element={<AdminNotifictions/>} path='notifications'/>
        <Route element={<AdminProfile/>} path='profile'/>
      </Route>

      <Route element={<UserDashboard/>} path='/userdashboard/*'>
        <Route element={<UserHome/>} path='userHome'/>
        <Route element={<UserBookEvent />} path="userBookEvents" />
        <Route element={<UserBookingHistory/>}  path='userBookingHistory'/>
        <Route element={<UserNotification/>} path='userNotifications'/>
        <Route element={<UserProfile/>} path='userProfile'/>
      </Route>

    </Routes>
   
</>
  )
}

export default App
