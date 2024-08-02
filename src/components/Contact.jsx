import React from 'react'


const Contact = () => {
  return (
    <div className="contact pt-5 mt-5 pb-5">
        <Container-fluid className="text-center">
            <h1 style={{fontFamily: "Dancing Script, cursive",color:'#7c047a'}} className='mb-5  fw-bolder text-center'>Contact Us</h1>
            <div className="row ms-5 me-5">
                <div className="col-lg-8">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491.0602174021867!2d76.39530323191185!3d10.059555819771692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080bfef92462ed%3A0x9f24af83e3ec2feb!2sBABY%20BOOM!5e0!3m2!1sen!2sin!4v1722068529105!5m2!1sen!2sin" width="95%" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-lg-4">
                    <table className="table mt-4">
                        <tbody>
                            <tr>
                                <td className="pr-4 p-3" style={{ border: 'none',color:'#7c047a' }}><i className=" p-2 fs-3 fa-solid fa-location-dot"></i></td>
                                <td style={{ border: 'none',fontSize:'18px' }}>
                                    <p>395W+R4W, Pukkattupady, Kerala 683561</p>
                                    <p>Located in: Kallens Shopping Centre</p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: 'none',color:'#7c047a' }} className="pr-4 p-3"><i className=" p-2 fs-3 fa-solid fa-phone"></i></td>
                                <td style={{ border: 'none',fontSize:'18px' }} className='p-3'>9946124710</td>
                            </tr>
                            <tr>
                                <td style={{ border: 'none',color:'#7c047a' }} className="pr-4 p-3"><i className=" p-2 fs-3 fs-3 fa-solid fa-clock"></i></td>
                                <td style={{ border: 'none',fontSize:'18px' }} className='p-3'>Mon-Sun: 10:00AM - 07:00PM</td>
                            </tr>
                            <tr>
                                <td style={{ border: 'none',color:'#7c047a' }} className="pr-4 p-3"><i className=" p-2 fs-3 fs-3 fa-solid fa-envelope"></i></td>
                                <td style={{ border: 'none',fontSize:'18px' }} className='p-3'>hajis4u2mail@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Container-fluid>
    </div> 
)
}

export default Contact