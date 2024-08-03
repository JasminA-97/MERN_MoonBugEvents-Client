import React from 'react'
import aboutus from '../assets/aboutus.jpg'
import { Container } from 'react-bootstrap'
const AboutUs = () => {
  return (
    <div className="aboutUs pt-5 mt-5">
        <Container className="text-center">
            <h1 style={{fontFamily: "Dancing Script, cursive",color:'#7c047a'}} className='mb-5  fw-bolder text-center'>About Us</h1>
            <div className="row ms-5 me-5 d-flex flex-row flex-wrap justify-content-between align-items-center">
                <div style={{textAlign:'justify'}} className="col-lg-6">
                    <p><span style={{fontFamily: "Dancing Script, cursive",color:'#7c047a'}} className='ms-5 ps-5 fs-2'>MoonBug Events,</span> believe in transforming your dreams into reality with our bespoke event decoration services. Based in Kerala, we specialize in creating unforgettable experiences for weddings, corporate events, festivals, and more. With a passion for creativity and a commitment to excellence, our team of skilled decorators brings a touch of elegance and uniqueness to every event we undertake.<br/>
                    Our journey began with a simple idea: to offer personalized event decoration that not only meets but exceeds our clients' expectations. Over the years, we have grown into a trusted name in the industry, known for our attention to detail, innovative designs, and dedication to customer satisfaction. Whether it's a grand celebration or an intimate gathering, we approach each project with the same level of enthusiasm and professionalism.<br/><br/>
                    Let us be a part of your next event and experience the magic of MoonBug Events.</p>
                </div>
                <div className="col-lg-6">
                <img style={{height:'30rem',width:'30rem'}} src={aboutus} alt="aboutUs" />
                </div>

            </div>
        </Container>
    </div> 
  )
}

export default AboutUs
