import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Videos from '../components/Videos'
import Testimonials from '../components/Testimonials'
import Services from '../components/Services'



const Home = () => {
  return (
    <div>
        <Header/>
        <Services/>
        <Videos/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home