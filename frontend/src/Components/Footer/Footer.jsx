import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src="https://greenbasket.co.in/wp-content/uploads/2023/11/cropped-cropped-cropped-cropped-Green-Basket-1-1-150x50.png" alt="" />
                <p>Product Category</p>
            </div>
             <ul>
                <li>Gardenning Tools</li>
                <li>Groceries</li>
                <li>Grow Bags</li>
                <li>Manure</li>
                <li>Seeds</li>
             </ul>

             <div className="footer-left">
                <h1>Download Our Mobile </h1>
                <h2>App</h2>
                <p>Discover the convenience of Greenbasket on the go!  </p>
             </div>

             <div className="footer-links">
                <h3>Quick Links</h3>
                <ul>
                    <li>Know more About Us</li>
                    <li>Visit store</li>
                    <li> Let connect</li>
                    <li>Locate store</li>
                </ul>
             </div>

             <div className="icon">
                <img src="https://greenbasket.co.in/wp-content/uploads/2019/06/play-store.png" alt="" />
                <img src="https://greenbasket.co.in/wp-content/uploads/2019/06/app-store.png" alt="" />
             </div>
        </div>
    )
}

export default Footer
