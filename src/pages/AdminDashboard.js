

import React from 'react';

function AdminDashboard({ user }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      {user && <p>Welcome, Admin {user.email}</p>}
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Users Management</h2>
          {/* Placeholder for user management */}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Appointments Overview</h2>
          {/* Placeholder for appointments management */}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">System Settings</h2>
          {/* Placeholder for system settings */}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

