import React, { useState } from 'react'
import './CSS/loginsignup.css'

const LoginSign = () => {

    const [name,setName] = useState("")


    const handleSubmit = () =>{
        // api call : axios.post() h
        // http:localhost:8000 => SERVER_URL

    }

    return (
         <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
            
            <div className="loginsignup-fields">
                <input type="text"  placeholder='your name' />
                <input type="email"  placeholder='Email aAdress' />
                <input type="password"  placeholder='Password' />

            </div>
            <button>Continue</button>
            <p>Already have an account <span>Login here ? </span> </p>
            <div className="loginsignup-agree">
                <input type="checkbox"  />
                <p>By continuing , i agree to the terms of use & privacy policy</p>
            </div>
            </div>
         </div>
    )
}

export default LoginSign
