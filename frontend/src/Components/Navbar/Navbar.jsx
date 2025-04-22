import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import logo from '../Assets/logo.png'
import Akash from '../Assets/Akash.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 sm:px-6   ">
            <div className={`pointer-events-auto w-full max-w-7xl mx-auto rounded-3xl px-6 py-4 transition-all bg-green-800 duration-300 ${
                scrolled
                    ? "bg-green-700 shadow-2xl"
                    : "bg-green-800"
            }`}>
                <div className="flex items-center justify-between flex-wrap">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="GreenBasket Logo" className="w-10 h-10 object-contain" />
                        <p className={`text-xl font-semibold ${scrolled ? "text-white" : "text-green-100"}`}>GreenBasket</p>
                    </div>

                    {/* Navigation Menu */}
                    <ul className="flex items-center space-x-8">
                        {[
                            { name: "Shop", path: "/" },
                            { name: "Air Purifying Plants", path: "/Air Purifying Plants" },
                            { name: "Herbs & Edibles", path: "/Herbs & Edibles" },
                            { name: "Healthy Vegetable", path: "/Healthy Vegetable" },
                        ].map(({ name, path }) => (
                            <li key={name} className="relative" onClick={() => setMenu(name)}>
                                <Link to={path} className="text-green-200 hover:text-white transition-colors duration-300">
                                    {name}
                                </Link>
                                {menu === name && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-300 mt-1 rounded-full"></div>}
                            </li>
                        ))}
                    </ul>

                    {/* Login, Cart and Profile */}
                    <div className="flex items-center space-x-6">
                        <Link to='/login'>
                            <button className={`${
                                scrolled 
                                    ? "bg-black hover:bg-black" 
                                    : "bg-lack hover:bg-black"
                            } text-white px-4 py-1 rounded-full bg-black transition-colors duration-300`}>
                                Sign In
                            </button>
                        </Link>

                        <div className="relative">
                            <Link to='/cart'>
                                <img src={cart_icon} alt="Cart" className="w-6 h-6 filter brightness-0 invert" />
                            </Link>
                            <div className="absolute -top-2 -right-2 bg-green-300 text-green-800 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                0
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Link to='/profile'>
                                <img src={Akash} alt="Profile" className="w-10 h-10 rounded-full object-cover border-2 border-green-300" />
                            </Link>
                            <Link to='/addproduct'>
                                <button className={`${
                                    scrolled 
                                        ? "bg-green-600 hover:bg-green-500" 
                                        : "bg-green-700 hover:bg-green-600"
                                } text-green-100 px-3 py-1 rounded-full text-sm transition-colors bg-black duration-300`}>
                                    Add Product
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
