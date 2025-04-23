import { useState } from 'react';
import { User, Mail, MapPin, Upload, Check, ArrowRight } from 'lucide-react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const LoginSign = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) errors.name = "Name is required";
    if (!email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email is invalid";
    if (!password) errors.password = "Password is required";
    else if (password.length < 6) errors.password = "Password must be at least 6 characters";
    if (!address.trim()) errors.address = "Address is required";
    if (!agreeTerms) errors.terms = "You must agree to the terms";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    const formData = new FormData();
    formData.append('username', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('address', address);
    if (avatar) {
      formData.append('avatar', avatar);
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/user/register`, {
        method: 'POST',
        body: formData,
      });
      console.log('Response:', response.data);
      
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      
      const data = await response.json();
      console.log('Response:', data);
      alert('Registration successful!');
    // Assuming the response data contains the access token
    const { accessToken } = data;
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      window.location.href = '/'; // Redirect to the home page after successful registration and login
    } else {
      console.error('Access token not found in response data');
      alert('Registration successful, but automatic login failed. Please log in manually.');
    }
  } catch (error) {
    console.error('Error registering user:', error.message);
    alert('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 mt-14">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl w-full grid md:grid-cols-2">
        {/* Left Side - Form */}
        <div className="p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Create Your Account</h1>
          
          <form onSubmit={onHandleSubmit} className="space-y-4">
            {/* Name Field - Fixed placeholder overlap issue */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  style={{ paddingLeft: '2.5rem' }}
                />
              </div>
              {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
            </div>
            
            {/* Email Field - Fixed placeholder overlap issue */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  style={{ paddingLeft: '2.5rem' }}
                />
              </div>
              {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
            </div>
            
            {/* Password Field - Fixed display issue */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                 
                <input
                  type="password"
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
              </div>
              {formErrors.password && <p className="mt-1 text-sm text-red-500">{formErrors.password}</p>}
            </div>
            
            {/* Address Field - Fixed placeholder overlap issue */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="pl-10 w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  style={{ paddingLeft: '2.5rem' }}
                />
              </div>
              {formErrors.address && <p className="mt-1 text-sm text-red-500">{formErrors.address}</p>}
            </div>
            
            {/* Avatar Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Profile Picture</label>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                  {avatarPreview ? (
                    <img src={avatarPreview} alt="Avatar Preview" className="w-full h-full object-cover" />
                  ) : (
                    <User size={32} className="text-gray-400" />
                  )}
                </div>
                <label className="cursor-pointer flex-1">
                  <div className="flex items-center justify-center px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                    <Upload size={18} className="mr-2 text-gray-500" />
                    <span className="text-sm text-gray-700">Choose a file</span>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            
            {/* Terms and Conditions */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-medium text-gray-700">
                  I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                </label>
              </div>
            </div>
            {formErrors.terms && <p className="mt-1 text-sm text-red-500">{formErrors.terms}</p>}
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg py-2.5 px-5 transition-colors flex items-center justify-center mt-6"
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  Create Account <ArrowRight size={18} className="ml-2" />
                </>
              )}
            </button>



          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/loggeduser" className="text-blue-600 hover:underline font-medium">
                 Log in instead
               </Link>
            </p>
          </div>
        </div>
        
        {/* Right Side - Image/Branding */}
        <div className="hidden md:block bg-gradient-to-br from-green-400 to-teal-800 p-8 text-white">
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Welcome to Our Community</h2>
              <p className="text-blue-100 mb-8">Join thousands of users and enjoy a seamless shopping experience with our platform.</p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-400 bg-opacity-30 p-2 rounded-full">
                    <Check size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Fast Checkout</h3>
                    <p className="text-sm text-blue-100">Save your details for a quick and easy checkout</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-400 bg-opacity-30 p-2 rounded-full">
                    <Check size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Order Tracking</h3>
                    <p className="text-sm text-blue-100">Follow your orders in real-time until delivery</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-400 bg-opacity-30 p-2 rounded-full">
                    <Check size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Exclusive Offers</h3>
                    <p className="text-sm text-blue-100">Get access to members-only deals and promotions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-sm text-blue-100">
              <p>© 2025 Your Company. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSign;
