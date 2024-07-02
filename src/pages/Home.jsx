import React from 'react'
import Header from '../components/Header'
import ProfileCards from '../components/ProfileCards'
import Footer from '../components/Footer'
import EventsName from '../components/EventsName'


const Home = () => {
  return (
    <div>
        <Header/>
        <EventsName/>
        <ProfileCards/>
        <Footer/>
    </div>
  )
}

export default Home