 


import React, { useState } from 'react';
import './CSS/loginsignup.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginSign = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [adress, setadress] = useState('');
    const [avatar, setavatar] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(''); // For displaying preview

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        setavatar(file); // Store the file for submission

        // Read the file to display the preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setAvatarPreview(reader.result); // Store preview URL
        };
        reader.readAsDataURL(file);
    };

    const onhandleSubmit = async (e) => {
        e.preventDefault();

        // Create FormData object
        const formData = new FormData();
        formData.append('username', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('address', adress);
        if (avatar) {
            formData.append('avatar', avatar); // Append avatar image
        }

        try {
            const response = await axios.post('http://localhost:3001/user/register', formData, {
                
            });
            console.log('Response:', response.data);
            alert('Registration successful!');
        } catch (error) {
            console.error('Error registering user:', error.response?.data || error.message);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>

                {/* Avatar Preview Section */}
                {avatarPreview ? (
                    <div className="avatar-preview">
                        <img src={avatarPreview} alt="Avatar Preview" />
                    </div>
                ) : (
                    <div className="avatar-placeholder">
                        <p>Image Preview</p>
                    </div>
                )}

                {/* Form Section */}
                <form onSubmit={onhandleSubmit}>
                    <div className="loginsignup-fields">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            value={adress}
                            onChange={(e) => setadress(e.target.value)}
                        />
                        <button type="submit">Continue</button>
                    </div>

                    <p>
                        Already have an account? <Link to='/loggeduser' > <span>login in?</span> </Link>
                    </p>
                    <div className="loginsignup-agree">
                        <input type="checkbox" />
                        <p>By continuing, I agree to the terms of use & privacy policy</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginSign;


 