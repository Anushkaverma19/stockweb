import React from 'react'
    
 function Hero() {
    return (
<div className='container'>
    <div className='row'>
        <div className='col'>
       <img   className="img-fluid mx-auto d-block" src="/media/images/homeHero.png" alt="hero" />
       </div>
    </div>
    <div className='row'>
        <div className='col text-center mt-5'>
            <h1>
                Invest in everything </h1>
                <p className='fs-5'>
Online platform to invest in stocks, derivatives, mutual funds, and more</p>
<button style={{width:"20%",margin:"0 auto"}} className='btn btn-primary btn-lg fs-4 p-2'>singn up </button>
           
        </div>
    </div>


</div>

      );
 }
 
 export default Hero;