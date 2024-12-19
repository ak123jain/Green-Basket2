import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './CSS/profile.css';

const Profile = () => {
    const [userdata, setuserdata] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchedUserDetail = async () => {
            try {
                 
                const response = await axios.get('http://localhost:3001/user/profile' , {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true, // Include cookies in the request
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
                    <div className="profile-details">
                        <img src={userdata.avatar} alt="User Avatar" className="profile-avatar" />
                        <h2>{userdata.username}</h2>
                        <p>Email: {userdata.email}</p>
                        <p>Joined: {new Date(userdata.createdAt).toLocaleDateString()}</p>
                    </div>
                ) : (
                    <p>No user data found.</p> // If no user data is found
                )
            }
        </div>
    );
};

export default Profile;


