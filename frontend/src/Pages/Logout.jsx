import axios from 'axios'
 

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

 
const Logout = () => {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
  
    useEffect(() => {
      const handleLogout = async () => {
        try {
          const response = await axios.post(
             `${import.meta.env.VITE_API_URL}/user/logout`,
            {},
            { withCredentials: true }
          );
  
          console.log('Logout Response:', response.data);
  
          if (response.data.data === 'User logged Out') {
            setMessage('User logged out successfully');
            alert(response.data.message || 'Logged out successfully');
            localStorage.removeItem('user'); // Clear user data from local storage
  
            // Navigate to /loggeduser and force page reload
            navigate('/loggeduser', { replace: true });
            //window.location.reload()
          } else {
            setMessage('Logout failed. Please try again.');
            alert(response.data.message || 'Failed to logout.');
          }
        } catch (error) {
          console.log('Logout failed:', error.response || error.message || error);
          setMessage('An error occurred during logout.');
          alert('Failed to logout. Please try again.');
        }
      };
  
      handleLogout();
    }, [navigate]);
  
    return (
      <div className="logout">
        <h1>{message}</h1>
      </div>
    );
  };
  
  export default Logout;

