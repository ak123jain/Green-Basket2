import './Hero.css'

import React from 'react'
 
const  Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>Best Quality Products</h2>
            <div className="hero-icon">
                <p>Join The Organic </p>
                <p>Movement!</p>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2G6nqfYga9u1j2K1hhvAxDeU9R-2F5-Jisg&s' alt="hello" />
            </div>
            <p>Get Seeds, Manure, Tools and</p>
            <p>Much More at affordable rate</p>
         </div>
             
            <div className="hero-right">
            <div className="second-icon">
                <img src="https://greenbasket.co.in/wp-content/uploads/2021/02/gardenwala-banner.png" alt="" />
            </div>
            </div>
         </div>
    )
}

export default Hero