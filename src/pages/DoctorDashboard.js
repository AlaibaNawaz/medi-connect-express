
import React from 'react';

function DoctorDashboard({ user }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Doctor Dashboard</h1>
      {user && <p>Welcome, Dr. {user.email}</p>}
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Scheduled Appointments</h2>
          {/* Placeholder for doctor's appointments */}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Manage Profile</h2>
          {/* Placeholder for profile management */}
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
