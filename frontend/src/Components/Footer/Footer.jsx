import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container  bg-green-200 text-green-900 py-12 px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & Category */}
                <div className="space-y-4">
                    <img
                        src="https://greenbasket.co.in/wp-content/uploads/2023/11/cropped-cropped-cropped-cropped-Green-Basket-1-1-150x50.png"
                        alt="Green Basket Logo"
                        className="h-10 object-contain"
                    />
                    <p className="text-sm text-gray-600">Product Categories</p>
                    <ul className="text-sm space-y-1 text-green-800">
                        <li>Gardening Tools</li>
                        <li>Groceries</li>
                        <li>Grow Bags</li>
                        <li>Manure</li>
                        <li>Seeds</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="text-sm space-y-2 text-green-800">
                        <li>Know more About Us</li>
                        <li>Visit Store</li>
                        <li>Let’s Connect</li>
                        <li>Locate Store</li>
                    </ul>
                </div>

                {/* Get in Touch */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Discover the convenience of GreenBasket on the go!
                    </p>
                    <div className="flex space-x-4">
                        <img
                            src="https://greenbasket.co.in/wp-content/uploads/2019/06/play-store.png"
                            alt="Play Store"
                            className="h-10"
                        />
                        <img
                            src="https://greenbasket.co.in/wp-content/uploads/2019/06/app-store.png"
                            alt="App Store"
                            className="h-10"
                        />
                    </div>
                </div>

                {/* Newsletter or Social (optional) */}
                 
                <div  >
                    <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
                    <p className="text-sm text-gray-600 mb-2">
                        Get the latest updates, offers, and gardening tips.
                    </p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full p-2 text-sm rounded-l-md border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-r-md hover:bg-green-700 transition-colors">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="text-center mt-12 text-sm text-gray-500">
                © {new Date().getFullYear()} Green Basket. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
