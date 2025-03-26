
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import PatientDashboard from './pages/PatientDashboard.jsx';
import DoctorDashboard from './pages/DoctorDashboard.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/patient-dashboard" element={<PatientDashboard user={user} />} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard user={user} />} />
          <Route path="/admin-dashboard" element={<AdminDashboard user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
