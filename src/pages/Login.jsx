
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
  const [userType, setUserType] = useState('patient');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Mock credentials
  const mockCredentials = {
    patient: { email: 'patient@example.com', password: 'patient123' },
    doctor: { email: 'doctor@example.com', password: 'doctor123' },
    admin: { email: 'admin@example.com', password: 'admin123' }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock authentication - in a real app, you would validate with a backend
    const mockUser = {
      id: '123',
      email,
      userType,
      name: userType === 'doctor' ? 'Dr. John Smith' : 'John Doe',
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

  const fillMockCredentials = () => {
    setEmail(mockCredentials[userType].email);
    setPassword(mockCredentials[userType].password);
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
              type="button"
            >
              Patient
            </button>
            <button 
              className={`flex-1 py-2 text-center ${userType === 'doctor' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setUserType('doctor')}
              type="button"
            >
              Doctor
            </button>
            <button 
              className={`flex-1 py-2 text-center ${userType === 'admin' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setUserType('admin')}
              type="button"
            >
              Admin
            </button>
          </div>
        </div>
        
        <div className="mb-4 p-3 bg-blue-50 rounded-md border border-blue-200">
          <h3 className="font-medium text-blue-700 mb-2">Demo Credentials</h3>
          <p className="text-sm text-gray-600">Email: {mockCredentials[userType].email}</p>
          <p className="text-sm text-gray-600">Password: {mockCredentials[userType].password}</p>
          <button 
            onClick={fillMockCredentials}
            className="mt-2 w-full text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 py-1 px-2 rounded transition-colors"
            type="button"
          >
            Auto-fill credentials
          </button>
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
