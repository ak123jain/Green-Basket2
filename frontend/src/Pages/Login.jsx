import { useState } from 'react';
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
            const token = localStorage.getItem("accessToken"); 
            console.log("akash token is here in frontend " , token);
            
            const response = await axios.post( `${import.meta.env.VITE_API_URL}/user/loggedin`, formdata, {
                withCredentials : true,
                 
            });
            console.log('response:', response.data);

            console.log("Login Successful:", response.data.messege);
            const { accessToken } = response.data.messege;

            console.log("Access Token: in login response", accessToken);
            
      
              // Store accessToken in localStorage
              localStorage.setItem("accessToken", accessToken);
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
