import React, { useState } from 'react';
import './CSS/Login.css';
import axios from 'axios';
 

const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Correcting FormData creation
        const formdata = new FormData();
        formdata.append('username', username);
        formdata.append('email', email);
        formdata.append('password', password);

        try {
            const response = await axios.post('http://localhost:3001/user/loggedin', formdata, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials : true
                 
            });
            console.log('response:', response.data);
            alert('Login successful!');
        } catch (error) {
            console.error('Error logging in user:', error.response?.data || error.message);
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div className="login">
            <div className="login-container">
                
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">Login</button>
                     
                </form>
            </div>
        </div>
    );
};

export default Login;
