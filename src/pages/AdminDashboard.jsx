
import React from 'react';

function AdminDashboard({ user }) {
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-red-600">Please login to access the admin dashboard</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-blue-600">Admin Dashboard</h1>
        <p className="text-gray-600 mb-4">Welcome, Admin {user.name}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h2 className="text-lg font-semibold mb-2">User Management</h2>
            <p className="text-gray-600">Manage patients and doctors</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h2 className="text-lg font-semibold mb-2">System Statistics</h2>
            <p className="text-gray-600">View platform usage and analytics</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
