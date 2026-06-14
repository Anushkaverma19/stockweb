import React from 'react'
import Awards from './Award';
import Pricing from './Pricing';
import Education from './Education';
import Hero from './Hero';
import Stats from './Stats';
import Openaccount from '../Openaccount';


function HomePage() {
    return (  
        <>
       
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <Openaccount/>
    
        </>

    );
}

export default HomePage;