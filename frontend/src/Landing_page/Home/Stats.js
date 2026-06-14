import React from 'react'
function Stats() {
    return ( 
      <div className='container mt-5'>
            <div className='row'>

            <div className='col-6 '>
<h2>Trust with confidence</h2>
<h2>Customer-first always</h2>
<p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>

<h2>No spam or gimmicks</h2>
<p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

<h2>The Zerodha universe</h2>
<p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

<h2>Do better with money</h2>
<p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className='col-6 p-4'>
       <img style={{width:"75%"}}  className='ms-5 mb-5' src="/media/images/ecosystem.png" alt="hero" />
       <div className='text-center mb-5'>
     <a className='mx-5' href="/products">
  Explore our products <i className="fa-solid fa-arrow-right ms-2"></i>
</a>
<a  href="/products">
  Explore our products <i className="fa-solid fa-arrow-right ms-2"></i>
</a>
</div>
            </div>
           
            </div>
        </div>
     );
}

export default Stats;