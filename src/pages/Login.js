
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
  const [userType, setUserType] = useState('patient');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock authentication - in a real app, you would validate with a backend
    const mockUser = {
      id: '123',
      email,
      userType,
      name: 'John Doe',
    };
    
    setUser(mockUser);
    
    // Redirect based on user type
    if (userType === 'patient') {
      navigate('/patient-dashboard');
    } else if (userType === 'doctor') {
      navigate('/doctor-dashboard');
    } else if (userType === 'admin') {
      navigate('/admin-dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login to MediConnect</h2>
        
        <div className="mb-4">
          <div className="flex mb-4">
            <button 
              className={`flex-1 py-2 text-center ${userType === 'patient' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setUserType('patient')}
            >
              Patient
            </button>
            <button 
              className={`flex-1 py-2 text-center ${userType === 'doctor' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setUserType('doctor')}
            >
              Doctor
            </button>
            <button 
              className={`flex-1 py-2 text-center ${userType === 'admin' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setUserType('admin')}
            >
              Admin
            </button>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-2 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
