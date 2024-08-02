import React from 'react'

const Videos = () => {
  return (
    <div className="videos pt-5 mt-5">
    <Container-fluid className="text-center">
        <h1 style={{fontFamily: "Dancing Script, cursive",color:'#7c047a'}} className=' fw-bolder text-center'>Videos</h1>
        <div className="row ms-5 me-5 mt-5">
            <div className="col-lg-6">
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/mT8K1W_9wTs" title="Trendy and Beautiful Mehndi Event Decor Ideas| Mehndi Stage decorations at Home" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="col-lg-6">
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/tXp0R9yqbHo" title="Adorable 15th Birthday Balloon Decoration Ideas"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>

    </Container-fluid>
</div> 
  )
}

export default Videos