
import React from 'react';

function PatientDashboard({ user }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Patient Dashboard</h1>
      {user && <p>Welcome, {user.email}</p>}
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Book Appointment</h2>
          {/* Placeholder for appointment booking */}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Your Appointments</h2>
          {/* Placeholder for upcoming appointments */}
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
