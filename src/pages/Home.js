

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">MediConnect Express</h1>
      <p className="text-xl text-gray-600 mb-12">
        Connecting Patients with Healthcare Providers
      </p>
      
      <div className="flex justify-center space-x-6">
        <Link 
          to="/login" 
          className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Home;

