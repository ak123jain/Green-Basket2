import './Hero.css'
import banne from '../Assets/greenbanner.png'
import React from 'react'
import sd from '../Assets/leaves.png' 

const  Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>Best Quality Products</h2>
            <div className="hero-icon">
                <p>Join The Organic </p>
                <p>Movement!</p>
                <img src={sd} alt="hello" />
            </div>
            <p>Get Seeds, Manure, Tools and</p>
            <p>Much More at affordable rate</p>
         </div>
             
            <div className="hero-right">
            <div className="second-icon">
                <img src={banne} alt="" />
            </div>
            </div>
         </div>
    )
}

export default Hero