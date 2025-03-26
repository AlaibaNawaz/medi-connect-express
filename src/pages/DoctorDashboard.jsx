
import React from 'react';

function DoctorDashboard({ user }) {
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-red-600">Please login to access the doctor dashboard</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-blue-600">Doctor Dashboard</h1>
        <p className="text-gray-600 mb-4">Welcome, Dr. {user.name}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h2 className="text-lg font-semibold mb-2">Today's Appointments</h2>
            <p className="text-gray-600">You have no appointments today</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h2 className="text-lg font-semibold mb-2">Patient Records</h2>
            <p className="text-gray-600">Access your patients' medical records</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
