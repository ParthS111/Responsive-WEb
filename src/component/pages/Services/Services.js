
import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import {homeObjectOne,homeObjThree,homeObjTwo,homeObjFour} from './Data'
function Services() {
    return (
        <>
            
            <Pricing/>
            <HeroSection {...homeObjectOne} />
        </>
    )
}

export default Services
