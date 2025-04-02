import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Users, Settings, ChevronDown, User, Shield, BarChart, Search, Check, X, Edit, Calendar, Star, FileText, Download } from 'lucide-react';

function AdminDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Sample data for UI demonstration
  const stats = {
    totalDoctors: 48,
    totalPatients: 1256,
    totalAppointments: 327,
    pendingDoctorApprovals: 5
  };
  
  const recentDoctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Cardiologist",
      email: "sarah.johnson@example.com",
      status: "active",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "Dermatologist",
      email: "michael.chen@example.com",
      status: "active",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialization: "Pediatrician",
      email: "emily.rodriguez@example.com",
      status: "pending",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];
  
  const recentPatients = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      registrationDate: "May 2, 2025",
      appointmentsCount: 3,
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria.garcia@example.com",
      registrationDate: "May 1, 2025",
      appointmentsCount: 1,
      image: "https://randomuser.me/api/portraits/women/62.jpg"
    },
    {
      id: 3,
      name: "David Kim",
      email: "david.kim@example.com",
      registrationDate: "April 29, 2025",
      appointmentsCount: 0,
      image: "https://randomuser.me/api/portraits/men/42.jpg"
    }
  ];
  
  const recentAppointments = [
    {
      id: 1,
      patientName: "John Smith",
      doctorName: "Dr. Sarah Johnson",
      date: "May 15, 2025",
      time: "10:00 AM",
      status: "confirmed"
    },
    {
      id: 2,
      patientName: "Maria Garcia",
      doctorName: "Dr. Michael Chen",
      date: "May 20, 2025",
      time: "2:30 PM",
      status: "pending"
    },
    {
      id: 3,
      patientName: "David Kim",
      doctorName: "Dr. Emily Rodriguez",
      date: "May 18, 2025",
      time: "9:15 AM",
      status: "cancelled"
    }
  ];
  
  const pendingDoctors = [
    {
      id: 101,
      name: "Dr. Robert Miller",
      specialization: "Neurologist",
      email: "robert.miller@example.com",
      submissionDate: "May 5, 2025",
      image: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    {
      id: 102,
      name: "Dr. Jennifer Lee",
      specialization: "Orthopedist",
      email: "jennifer.lee@example.com",
      submissionDate: "May 4, 2025",
      image: "https://randomuser.me/api/portraits/women/41.jpg"
    },
    {
      id: 103,
      name: "Dr. James Wilson",
      specialization: "Ophthalmologist",
      email: "james.wilson@example.com",
      submissionDate: "May 3, 2025",
      image: "https://randomuser.me/api/portraits/men/29.jpg"
    },
    {
      id: 104,
      name: "Dr. Amanda Brown",
      specialization: "Endocrinologist",
      email: "amanda.brown@example.com",
      submissionDate: "May 3, 2025",
      image: "https://randomuser.me/api/portraits/women/37.jpg"
    },
    {
      id: 105,
      name: "Dr. Thomas White",
      specialization: "Gastroenterologist",
      email: "thomas.white@example.com",
      submissionDate: "May 2, 2025",
      image: "https://randomuser.me/api/portraits/men/12.jpg"
    }
  ];
  
  const patientReviews = [
    {
      id: 1,
      patientName: "John Smith",
      doctorName: "Dr. Sarah Johnson",
      rating: 5,
      comment: "Dr. Johnson was very professional and caring. She took the time to explain everything thoroughly.",
      date: "May 3, 2025",
      status: "approved"
    },
    {
      id: 2,
      patientName: "Maria Garcia",
      doctorName: "Dr. Michael Chen",
      rating: 4,
      comment: "Good experience overall. Would recommend Dr. Chen to others.",
      date: "May 2, 2025",
      status: "approved"
    },
    {
      id: 3,
      patientName: "David Kim",
      doctorName: "Dr. Emily Rodriguez",
      rating: 2,
      comment: "I had to wait for an hour past my appointment time. The doctor seemed rushed when she finally saw me.",
      date: "May 1, 2025",
      status: "flagged"
    }
  ];
  
  // If user is not logged in, show a message to login
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <p className="text-xl text-red-600 mb-4">Please login to access the admin dashboard</p>
          <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }
  
  const handleApproveDoctorRegistration = (doctorId) => {
    // In a real app, this would make an API call to approve the doctor
    console.log(`Approving doctor ${doctorId}`);
    alert(`Doctor ${doctorId} has been approved.`);
  };
  
  const handleRejectDoctorRegistration = (doctorId) => {
    // In a real app, this would make an API call to reject the doctor
    console.log(`Rejecting doctor ${doctorId}`);
    alert(`Doctor ${doctorId} has been rejected.`);
  };
  
  const handleDeleteReview = (reviewId) => {
    // In a real app, this would make an API call to delete the review
    console.log(`Deleting review ${reviewId}`);
    alert(`Review ${reviewId} has been deleted.`);
  };
  
  const handleApproveReview = (reviewId) => {
    // In a real app, this would make an API call to approve the flagged review
    console.log(`Approving review ${reviewId}`);
    alert(`Review ${reviewId} has been approved.`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center">
              <div className="mr-4 text-right">
                <p className="text-sm font-medium text-gray-900">Welcome, {user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <img
                className="h-10 w-10 rounded-full"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Admin avatar"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <nav className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-600 text-white">
                <h2 className="text-lg font-semibold">Admin Menu</h2>
              </div>
              <div className="p-2">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full flex items-center px-4 py-2 text-left rounded-md ${
                    activeTab === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <BarChart className="mr-3 h-5 w-5" />
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={() => setActiveTab('doctors')}
                  className={`w-full flex items-center px-4 py-2 text-left rounded-md ${
                    activeTab === 'doctors' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <User className="mr-3 h-5 w-5" />
                  <span>Doctor Management</span>
                </button>
                <button
                  onClick={() => setActiveTab('patients')}
                  className={`w-full flex items-center px-4 py-2 text-left rounded-md ${
                    activeTab === 'patients' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Users className="mr-3 h-5 w-5" />
                  <span>Patient Management</span>
                </button>
                <button
                  onClick={() => setActiveTab('appointments')}
                  className={`w-full flex items-center px-4 py-2 text-left rounded-md ${
                    activeTab === 'appointments' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Calendar className="mr-3 h-5 w-5" />
                  <span>Appointments</span>
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`w-full flex items-center px-4 py-2 text-left rounded-md ${
                    activeTab === 'reviews' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Star className="mr-3 h-5 w-5" />
                  <span>Reviews & Feedback</span>
                </button>
                <button
                  onClick={() => setActiveTab('reports')}
                  className={`w-full flex items-center px-4 py-2 text-left rounded-md ${
                    activeTab === 'reports' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FileText className="mr-3 h-5 w-5" />
                  <span>Reports & Analytics</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center px-4 py-2 text-left rounded-md ${
                    activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Settings className="mr-3 h-5 w-5" />
                  <span>System Settings</span>
                </button>
              </div>
            </nav>

            {/* Admin Actions */}
            <div className="bg-white shadow rounded-lg overflow-hidden mt-6">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Quick Actions</h2>
              </div>
              <div className="p-4">
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveTab('doctors')}
                    className="w-full text-left px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded flex items-center"
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    Approve Doctor Registrations ({stats.pendingDoctorApprovals})
                  </button>
                  <button 
                    className="w-full text-left px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded flex items-center"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    View New Patients (12)
                  </button>
                  <button 
                    className="w-full text-left px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded flex items-center"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Generate Monthly Report
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-3">
            {/* Dashboard Overview */}
            {activeTab === 'dashboard' && (
              <div className="bg-white shadow rounded-lg p-6">
                <div className="border-b border-gray-200 mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 pb-4">Dashboard Overview</h2>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="text-sm text-blue-600 font-medium">Total Doctors</h3>
                    <p className="text-2xl font-bold text-gray-800 mt-2">{stats.totalDoctors}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="text-sm text-green-600 font-medium">Total Patients</h3>
                    <p className="text-2xl font-bold text-gray-800 mt-2">{stats.totalPatients}</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h3 className="text-sm text-yellow-600 font-medium">Total Appointments</h3>
                    <p className="text-2xl font-bold text-gray-800 mt-2">{stats.totalAppointments}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h3 className="text-sm text-purple-600 font-medium">Pending Approvals</h3>
                    <p className="text-2xl font-bold text-gray-800 mt-2">{stats.pendingDoctorApprovals}</p>
                  </div>
                </div>

                {/* Recent Activity Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Recent Doctors */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Recently Added Doctors</h3>
                    <div className="space-y-4">
                      {recentDoctors.map((doctor) => (
                        <div key={doctor.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="h-10 w-10 rounded-full mr-3"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-medium">{doctor.name}</h4>
                            <p className="text-xs text-gray-500">{doctor.specialization}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            doctor.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {doctor.status === 'active' ? 'Active' : 'Pending'}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-center">
                      <button
                        onClick={() => setActiveTab('doctors')}
                        className="text-blue-600 text-sm font-medium hover:text-blue-800"
                      >
                        View All Doctors
                      </button>
                    </div>
                  </div>

                  {/* Recent Patients */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Recently Added Patients</h3>
                    <div className="space-y-4">
                      {recentPatients.map((patient) => (
                        <div key={patient.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <img
                            src={patient.image}
                            alt={patient.name}
                            className="h-10 w-10 rounded-full mr-3"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-medium">{patient.name}</h4>
                            <p className="text-xs text-gray-500">Joined: {patient.registrationDate}</p>
                          </div>
                          <span className="text-xs text-gray-600">
                            {patient.appointmentsCount} {patient.appointmentsCount === 1 ? 'appointment' : 'appointments'}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-center">
                      <button
                        onClick={() => setActiveTab('patients')}
                        className="text-blue-600 text-sm font-medium hover:text-blue-800"
                      >
                        View All Patients
                      </button>
                    </div>
                  </div>
                </div>

                {/* Recent Appointments */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-700 mb-4">Recent Appointments</h3>
                  <div className="bg-white overflow-hidden shadow rounded-lg border">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Patient
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Doctor
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date & Time
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {recentAppointments.map((appointment) => (
                          <tr key={appointment.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{appointment.patientName}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">{appointment.doctorName}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">
                                {appointment.date}, {appointment.time}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 text-center">
                    <button
                      onClick={() => setActiveTab('appointments')}
                      className="text-blue-600 text-sm font-medium hover:text-blue-800"
                    >
                      View All Appointments
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Doctor Management */}
            {activeTab === 'doctors' && (
              <div className="space-y-6">
                {/* Pending Doctor Approvals */}
                <div className="bg-white shadow rounded-lg p-6">
                  <div className="border-b border-gray-200 mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 pb-4">Doctor Registration Approvals</h2>
                  </div>

                  {pendingDoctors.length === 0 ? (
                    <p className="text-gray-500">There are no pending doctor registrations.</p>
                  ) : (
                    <div className="space-y-4">
                      {pendingDoctors.map((doctor) => (
                        <div key={doctor.id} className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="flex items-center mb-4 md:mb-0">
                              <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="h-12 w-12 rounded-full mr-4"
                              />
                              <div>
                                <h4 className="text-md font-semibold">{doctor.name}</h4>
                                <p className="text-sm text-gray-600">{doctor.specialization}</p>
                                <p className="text-sm text-gray-600">{doctor.email}</p>
                              </div>
                            </div>
                            <div className="text-sm text-gray-600">
                              Submitted: {doctor.submissionDate}
                            </div>
                          </div>
                          <div className="mt-4 flex flex-wrap justify-end gap-2">
                            <button 
                              onClick={() => window.location.href = `/doctor-details/${doctor.id}`}
                              className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50"
                            >
                              View Details
                            </button>
                            <button 
                              onClick={() => handleApproveDoctorRegistration(doctor.id)}
                              className="inline-flex items-center px-3 py-1 border border-green-300 text-sm font-medium rounded text-green-700 bg-green-50 hover:bg-green-100"
                            >
                              <Check className="h-4 w-4 mr-1" />
                              Approve
                            </button>
                            <button 
                              onClick={() => handleRejectDoctorRegistration(doctor.id)}
                              className="inline-flex items-center px-3 py-1 border border-red-300 text-sm font-medium rounded text-red-700 bg-red-50 hover:bg-red-100"
                            >
                              <X className="h-4 w-4 mr-1" />
                              Reject
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Doctor Management */}
                <div className="bg-white shadow rounded-lg p-6">
                  <div className="border-b border-gray-200 mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 pb-4">All Doctors</h2>
                  </div>

                  <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search doctors..."
                        className="pl-10 w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="flex flex-col md:flex-row gap-2">
                      <select className="p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500">
                        <option value="">All Specializations</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="dermatology">Dermatology</option>
                        <option value="neurology">Neurology</option>
                        <option value="pediatrics">Pediatrics</option>
                      </select>
                      <select className="p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500">
                        <option value="">All Status</option>
                        <option value="active">Active</option>
                        <option value="pending">Pending</option>
                        <option value="suspended">Suspended</option>
                      </select>
                      <button className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Filter
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Doctor
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Specialization
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {recentDoctors.map((doctor) => (
                          <tr key={doctor.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src={doctor.image}
                                    alt={doctor.name}
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{doctor.name}</div>
                                  <div className="text-sm text-gray-500">{doctor.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{doctor.specialization}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                doctor.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {doctor.status === 'active' ? 'Active' : 'Pending'}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                              <button className="text-green-600 hover:text-green-900 mr-3">Edit</button>
                              <button className="text-red-600 hover:text-red-900">Suspend</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-gray-700">
                      Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of <span className="font-medium">{stats.totalDoctors}</span> doctors
                    </div>
                    <div className="flex justify-center gap-2">
                      <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Previous
                      </button>
                      <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Patient Management */}
            {activeTab === 'patients' && (
              <div className="bg-white shadow rounded-lg p-6">
                <div className="border-b border-gray-200 mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 pb-4">Patient Management</h2>
                </div>

                <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search patients..."
                      className="pl-10 w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-2">
                    <select className="p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500">
                      <option value="">Registration Date</option>
                      <option value="today">Today</option>
                      <option value="week">This Week</option>
                      <option value="month">This Month</option>
                    </select>
                    <button className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Filter
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Patient
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Registration Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Appointments
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentPatients.map((patient) => (
                        <tr key={patient.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={patient.image}
                                  alt={patient.name}
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                                <div className="text-sm text-gray-500">{patient.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{patient.registrationDate}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{patient.appointmentsCount}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                            <button className="text-green-600 hover:text-green-900 mr-3">Edit</button>
                            <button className="text-red-600 hover:text-red-900">Deactivate</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of <span className="font-medium">{stats.totalPatients}</span> patients
                  </div>
                  <div className="flex justify-center gap-2">
                    <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      Previous
                    </button>
                    <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Management */}
            {activeTab === 'reviews' && (
              <div className="bg-white shadow rounded-lg p-6">
                <div className="border-b border-gray-200 mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 pb-4">Reviews & Feedback</h2>
                </div>

                <div className="mb-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <button
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      All Reviews
                    </button>
                    <button
                      className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50"
                    >
                      Flagged Reviews
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  {patientReviews.map((review) => (
                    <div 
                      key={review.id} 
                      className={`p-4 rounded-lg border ${
                        review.status === 'flagged' ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div>
                          <div className="flex items-center mb-2">
                            <h4 className="text-md font-semibold">{review.patientName}</h4>
                            <span className="mx-2 text-gray-400">→</span>
                            <h4 className="text-md font-semibold">{review.doctorName}</h4>
                          </div>
                          <div className="flex items-center mb-2">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4" fill={i < review.rating ? 'currentColor' : 'none'} />
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">{review.date}</span>
                          </div>
                          <p className="text-sm text-gray-700">{review.comment}</p>
                        </div>
                        
                        <div className="mt-4 md:mt-0 ml-auto">
                          {review.status === 'flagged' ? (
                            <div className="flex gap-2">
                              <button 
                                onClick={() => handleApproveReview(review.id)}
                                className="inline-flex items-center px-3 py-1 border border-green-300 text-sm font-medium rounded text-green-700 bg-green-50 hover:bg-green-100"
                              >
                                <Check className="h-4 w-4 mr-1" />
                                Approve
                              </button>
                              <button 
                                onClick={() => handleDeleteReview(review.id)}
                                className="inline-flex items-center px-3 py-1 border border-red-300 text-sm font-medium rounded text-red-700 bg-red-50 hover:bg-red-100"
                              >
                                <X className="h-4 w-4 mr-1" />
                                Delete
                              </button>
                            </div>
                          ) : (
                            <div className="flex gap-2">
                              <button 
                                className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50"
                              >
                                <Edit className="h-4 w-4 mr-1" />
                                Flag
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-center">
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Load More Reviews
                  </button>
                </div>
              </div>
            )}

            {/* Reports & Analytics */}
            {activeTab === 'reports' && (
              <div className="bg-white shadow rounded-lg p-6">
                <div className="border-b border-gray-200 mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 pb-4">Reports & Analytics</h2>
                </div>

                <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-medium text-gray-700 mb-2">Report Type</h3>
                    <select className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500">
                      <option value="appointments">Appointment Reports</option>
                      <option value="users">User Reports</option>
                      <option value="revenue">Revenue Reports</option>
                      <option value="performance">Performance Reports</option>
                    </select>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-medium text-gray-700 mb-2">Date Range</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">From</label>
                        <input
                          type="date"
                          className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">To</label>
                        <input
                          type="date"
                          className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex items-end">
                    <button
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Generate Report
                    </button>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-700 mb-4">Appointment Trends</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 h-64 flex items-center justify-center">
                    <p className="text-gray-500">Chart showing appointment trends over time would be displayed here.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Top Specializations</h3>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 h-64 flex items-center justify-center">
                      <p className="text-gray-500">Chart showing most popular specializations would be displayed here.</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Patient Demographics</h3>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 h-64 flex items-center justify-center">
                      <p className="text-gray-500">Chart showing patient demographics would be displayed here.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-center gap-4">
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    <Download className="h-4 w-4 mr-2" />
                    Export as PDF
                  </button>
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    <Download className="h-4 w-4 mr-2" />
                    Export as CSV
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
