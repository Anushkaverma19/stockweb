import React from 'react';

function Team() {
    return (
        <div className="container">
   <div className="row   p-5" >
                    <div className="col-6"></div>
            <h1 className='text-center fs-1 '>
              People
            </h1>

</div>
<div/>
           
                <div className="row p-5 text-center mb-5">
                    <div className="col-6">
                       
       <img style={{borderRadius:"100%",width:"60%"}} src="/media/images/largestBroker.svg" alt="hero" />
       <h4 className='mt-3'>nithin kamanath</h4>
       <h6>ceo</h6>
                    </div>
                    <div className="col-6">
                        <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.

                           <p> Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

                            Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                            <p style={{textDecoration:"done"}}>Connect on <a href=''>Homepage / </a> <a href=''>TradingQnA /</a> <a href=''>Twitter</a></p>
                    </div>
                </div>
            </div>

   
    );
}

export default Team;