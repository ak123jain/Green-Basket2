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
                console.log("akash token is here in frontend in profile section", token);
                
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/profile`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                });
                console.log("what data i received ", response.data);
                setuserdata(response.data.messege); // Save user data in state
            } catch (error) {
                console.error("Error fetching profile data:", error);
            } finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };

        fetchedUserDetail(); // Call the async function
    }, []); // Empty dependency array, so it runs once when the component mounts

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                <p className="ml-3 text-lg font-medium text-gray-700">Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            {userdata ? (
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2 p-8">
                            <div className="flex flex-col items-center">
                                <div className="relative">
                                    {userdata.avatar ? (
                                        <img 
                                            src={userdata.avatar} 
                                            alt="User Avatar" 
                                            className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
                                        />
                                    ) : (
                                        <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-4xl font-bold">
                                            {userdata.username ? userdata.username.charAt(0).toUpperCase() : '?'}
                                        </div>
                                    )}
                                    <div className="absolute bottom-0 right-0 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
                                </div>
                                
                                <h2 className="mt-4 text-2xl font-bold text-gray-800">{userdata.username}</h2>
                                <p className="text-gray-500 mb-4">{userdata.email}</p>
                                
                                <div className="bg-blue-50 px-4 py-2 rounded-lg mb-6 w-full text-center">
                                    <p className="text-sm text-blue-600">
                                        Member since {new Date(userdata.createdAt).toLocaleDateString()}
                                    </p>
                                </div>
                                
                                <Link to='/logout' className="w-full">
                                    <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors font-medium flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm7 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm1 4a1 1 0 102 0V7a1 1 0 10-2 0v4z" clipRule="evenodd" />
                                        </svg>
                                        Logout
                                    </button>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="md:w-1/2 image">
                            <img 
                                src="https://img.freepik.com/free-photo/arrangement-with-red-basket-with-plants_23-2148447150.jpg?semt=ais_hybrid" 
                                alt="" 
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                    
                    <div className="p-8 bg-gray-50 border-t">
                        <h3 className="text-lg font-medium text-gray-800 mb-4">Account Information</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="text-sm text-gray-500">Username</p>
                                <p className="font-medium">{userdata.username}</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="text-sm text-gray-500">Email Address</p>
                                <p className="font-medium">{userdata.email}</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="text-sm text-gray-500">Joined Date</p>
                                <p className="font-medium">{new Date(userdata.createdAt).toLocaleDateString()}</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="text-sm text-gray-500">Account Status</p>
                                <p className="font-medium text-green-600">Active</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-8 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">No user data found</h3>
                    <p className="mt-2 text-gray-500">Please login to view your profile information.</p>
                    <div className="mt-6">
                        <Link to="/login" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                            Go to Login
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;