import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';
 
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar  = () =>  {

    const [menu , setmunu] = useState("shop")

    return (
        <div className='navbar' >
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>GreenBasket</p>
            </div>
            <div>
                <ul className="nav-menu" >
                    <li onClick={()=> {setmunu("shop")}} > <Link to='/' >Shop</Link>  {menu==="shop" ? <hr /> : <> </> }</li>
                    <li onClick={()=> {setmunu("Air Purifying Plants")}} > <Link to='/Air Purifying Plants' >Air Purifying Plants</Link> {menu==="Air Purifying Plants" ? <hr /> : <></> }</li>
                    <li onClick={()=> {setmunu("Herbs & Edibles")}} > <Link to='/Herbs & Edibles' >Herbs & Edibles</Link> {menu==="Herbs & Edibles" ? <hr /> : <></> } </li>
                    <li onClick={()=> {setmunu("Healthy Vegetable")}} > <Link to='/Healthy Vegetable' >Healthy Vegetable </Link> {menu===" Healthy Vegetable" ? <hr /> : <></> } </li>
                </ul>
            </div>
            <div className="nav-login-cart">
                 <Link to='/login' ><button>Sign</button></Link>

                  <Link to='/cart' ><img src={cart_icon} alt="" /></Link>
                 <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar