
import React from 'react';

function PatientDashboard({ user }) {
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-red-600">Please login to access the patient dashboard</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-blue-600">Patient Dashboard</h1>
        <p className="text-gray-600 mb-4">Welcome, {user.name}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h2 className="text-lg font-semibold mb-2">My Appointments</h2>
            <p className="text-gray-600">You have no upcoming appointments</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h2 className="text-lg font-semibold mb-2">Find a Doctor</h2>
            <p className="text-gray-600">Search for healthcare providers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
