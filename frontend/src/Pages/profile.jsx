import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './CSS/profile.css';
import { Link } from 'react-router-dom';
 

const Profile = () => {
    const [userdata, setuserdata] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchedUserDetail = async () => {
            try {
                
                
                const token = localStorage.getItem("accessToken"); 
                console.log("akash token is here in frontend in profile section" , token);
                
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/profile` , {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization :   `Bearer ${token}`,
                    },
                    withCredentials: true,  
                    
                });
                console.log("what data i received ",response.data);
                setuserdata(response.data.messege); // Save user data in state
            } catch (error) {
                console.error("Error fetching profile data:", error);}
                 finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };

        fetchedUserDetail(); // Call the async function
    }, []);  // Empty dependency array, so it runs once when the component mounts

    if (loading) {
        return <div className="loading">Loading...</div>; // Show loading indicator while data is fetching
    }

    return (
        <div className="profile">
            {
                userdata ? (
                    <div className="container">
                     <div className="profile-details">
                        <h1>User Profile</h1>
                        <img src={userdata.avatar} alt="User Avatar" className="profile-avatar" />
                        <h2>{userdata.username}</h2>
                        <p>Email: {userdata.email}</p>
                        <p>Joined: {new Date(userdata.createdAt).toLocaleDateString()}</p>
                         
                </div>
                 
                <div className="image">
                    <img src="https://img.freepik.com/free-photo/arrangement-with-red-basket-with-plants_23-2148447150.jpg?semt=ais_hybrid" alt="" />
                    <Link to='/logout' > <button className='btn' >Logout</button> </Link>
                </div>

                </div>
                     
                ) : (
                    <p>No user data found.</p> // If no user data is found
                )
            }
        </div>
    );
};

export default Profile;

 