
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, FileText, Clock, Settings, User, Check, X, Star, Download, Upload } from 'lucide-react';

function DoctorDashboard({ user }) {
  const [activeTab, setActiveTab] = useState('appointments');

  // Sample data for UI demonstration
  const todayAppointments = [
    {
      id: 1,
      patientName: "John Doe",
      age: 45,
      time: "10:00 AM",
      status: "upcoming",
      reason: "Annual check-up",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      id: 2,
      patientName: "Alice Smith",
      age: 32,
      time: "11:30 AM",
      status: "upcoming",
      reason: "Chest pain",
      image: "https://randomuser.me/api/portraits/women/62.jpg"
    },
    {
      id: 3,
      patientName: "Robert Johnson",
      age: 58,
      time: "2:00 PM",
      status: "upcoming",
      reason: "Follow-up",
      image: "https://randomuser.me/api/portraits/men/42.jpg"
    }
  ];

  const pendingAppointments = [
    {
      id: 101,
      patientName: "Emily Davis",
      age: 28,
      requestedDate: "May 18, 2025",
      requestedTime: "9:15 AM",
      reason: "Consultation",
      image: "https://randomuser.me/api/portraits/women/25.jpg"
    },
    {
      id: 102,
      patientName: "Michael Brown",
      age: 52,
      requestedDate: "May 20, 2025",
      requestedTime: "3:30 PM",
      reason: "Blood pressure issues",
      image: "https://randomuser.me/api/portraits/men/55.jpg"
    }
  ];

  const pastAppointments = [
    {
      id: 201,
      patientName: "Sarah Wilson",
      age: 36,
      date: "May 2, 2025",
      time: "1:00 PM",
      status: "completed",
      diagnosis: "Hypertension",
      prescription: "Lisinopril 10mg",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      rating: 5,
      review: "Dr. Smith was very thorough and explained everything clearly."
    },
    {
      id: 202,
      patientName: "David Miller",
      age: 41,
      date: "April 28, 2025",
      time: "10:30 AM",
      status: "completed",
      diagnosis: "Common cold",
      prescription: "Rest and fluids",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 4,
      review: "Good experience overall."
    }
  ];

  const patientRecords = [
    {
      id: 1,
      patientName: "John Doe",
      dateOfBirth: "1978-05-15",
      lastVisit: "May 2, 2025",
      medicalHistory: ["Hypertension", "Type 2 Diabetes"],
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      id: 2,
      patientName: "Alice Smith",
      dateOfBirth: "1990-08-23",
      lastVisit: "May 5, 2025",
      medicalHistory: ["Asthma"],
      image: "https://randomuser.me/api/portraits/women/62.jpg"
    },
    {
      id: 3,
      patientName: "Sarah Wilson",
      dateOfBirth: "1986-12-10",
      lastVisit: "May 2, 2025",
      medicalHistory: ["Hypertension", "Allergies"],
      image: "https://randomuser.me/api/portraits/women/33.jpg"
    }
  ];

  // If user is not logged in, show a message to login
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <p className="text-xl text-red-600 mb-4">Please login to access the doctor dashboard</p>
          <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  const handleAcceptAppointment = (appointmentId) => {
    // In a real app, this would make an API call to accept the appointment
    console.log(`Accepting appointment ${appointmentId}`);
    alert(`Appointment ${appointmentId} has been accepted.`);
  };

  const handleDeclineAppointment = (appointmentId) => {
    // In a real app, this would make an API call to decline the appointment
    console.log(`Declining appointment ${appointmentId}`);
    alert(`Appointment ${appointmentId} has been declined.`);
  };

  const handleCompleteAppointment = (appointmentId) => {
    // In a real app, this would open a form to complete the appointment details
    console.log(`Completing appointment ${appointmentId}`);
    alert(`Appointment ${appointmentId} has been marked as completed.`);
  };

  const handleUploadPrescription = (appointmentId) => {
    // In a real app, this would open a prescription upload form
    console.log(`Uploading prescription for appointment ${appointmentId}`);
    alert('Prescription uploaded successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Doctor Dashboard</h1>
            <div className="flex items-center">
              <div className="mr-4 text-right">
                <p className="text-sm font-medium text-gray-900">Welcome, Dr. {user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <img
                className="h-10 w-10 rounded-full"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User avatar"
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
                <h2 className="text-lg font-semibold">Dashboard</h2>
              </div>
              <div className="p-2">
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
                  onClick={() => setActiveTab('patients')}
                  className={`w-full flex items-center px-4 py-2 text-left rounded-md ${
                    activeTab === 'patients' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Users className="mr-3 h-5 w-5" />
                  <span>Patient Records</span>
                </button>
                <button
                  onClick={() => setActiveTab('prescriptions')}
                  className={`w-full flex items-center px-4 py-2 text-left rounded-md ${
                    activeTab === 'prescriptions' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FileText className="mr-3 h-5 w-5" />
                  <span>Prescriptions</span>
                </button>
                <button
                  onClick={() => setActiveTab('availability')}
                  className={`w-full flex items-center px-4 py-2 text-left rounded-md ${
                    activeTab === 'availability' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Clock className="mr-3 h-5 w-5" />
                  <span>Availability</span>
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center px-4 py-2 text-left rounded-md ${
                    activeTab === 'profile' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <User className="mr-3 h-5 w-5" />
                  <span>Profile</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center px-4 py-2 text-left rounded-md ${
                    activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Settings className="mr-3 h-5 w-5" />
                  <span>Settings</span>
                </button>
              </div>
            </nav>

            {/* Quick Stats */}
            <div className="bg-white shadow rounded-lg overflow-hidden mt-6">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Today's Overview</h2>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Appointments</p>
                    <p className="text-2xl font-bold text-blue-600">{todayAppointments.length}</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Completed</p>
                    <p className="text-2xl font-bold text-green-600">0</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Pending</p>
                    <p className="text-2xl font-bold text-yellow-600">{pendingAppointments.length}</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">New Patients</p>
                    <p className="text-2xl font-bold text-purple-600">2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              {/* Appointments Tab */}
              {activeTab === 'appointments' && (
                <div>
                  <div className="border-b border-gray-200 mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 pb-4">Appointments</h2>
                  </div>

                  {/* Today's Appointments */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Today's Appointments</h3>
                    {todayAppointments.length === 0 ? (
                      <p className="text-gray-500">You have no appointments scheduled for today.</p>
                    ) : (
                      <div className="space-y-4">
                        {todayAppointments.map((appointment) => (
                          <div key={appointment.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                              <div className="flex items-center mb-4 md:mb-0">
                                <img
                                  src={appointment.image}
                                  alt={appointment.patientName}
                                  className="h-12 w-12 rounded-full mr-4"
                                />
                                <div>
                                  <h4 className="text-md font-semibold">{appointment.patientName}</h4>
                                  <p className="text-sm text-gray-600">Age: {appointment.age}</p>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className="text-right mr-4">
                                  <p className="text-sm font-medium">{appointment.time}</p>
                                  <p className="text-sm text-gray-600">{appointment.reason}</p>
                                </div>
                                <span className="inline-flex px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                                  Upcoming
                                </span>
                              </div>
                            </div>
                            <div className="mt-4 flex flex-wrap justify-end gap-2">
                              <button 
                                onClick={() => window.location.href = `/patient-records/${appointment.id}`}
                                className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50"
                              >
                                View Records
                              </button>
                              <button 
                                onClick={() => handleCompleteAppointment(appointment.id)}
                                className="inline-flex items-center px-3 py-1 border border-green-300 text-sm font-medium rounded text-green-700 bg-green-50 hover:bg-green-100"
                              >
                                <Check className="h-4 w-4 mr-1" />
                                Complete
                              </button>
                              <button 
                                onClick={() => handleUploadPrescription(appointment.id)}
                                className="inline-flex items-center px-3 py-1 border border-blue-300 text-sm font-medium rounded text-blue-700 bg-blue-50 hover:bg-blue-100"
                              >
                                <Upload className="h-4 w-4 mr-1" />
                                Prescription
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Appointment Requests */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Appointment Requests</h3>
                    {pendingAppointments.length === 0 ? (
                      <p className="text-gray-500">You have no pending appointment requests.</p>
                    ) : (
                      <div className="space-y-4">
                        {pendingAppointments.map((appointment) => (
                          <div key={appointment.id} className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                              <div className="flex items-center mb-4 md:mb-0">
                                <img
                                  src={appointment.image}
                                  alt={appointment.patientName}
                                  className="h-12 w-12 rounded-full mr-4"
                                />
                                <div>
                                  <h4 className="text-md font-semibold">{appointment.patientName}</h4>
                                  <p className="text-sm text-gray-600">Age: {appointment.age}</p>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className="text-right mr-4">
                                  <p className="text-sm font-medium">{appointment.requestedDate}</p>
                                  <p className="text-sm text-gray-600">{appointment.requestedTime}</p>
                                  <p className="text-sm text-gray-600">{appointment.reason}</p>
                                </div>
                                <span className="inline-flex px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                                  Pending
                                </span>
                              </div>
                            </div>
                            <div className="mt-4 flex flex-wrap justify-end gap-2">
                              <button 
                                onClick={() => window.location.href = `/patient-records/${appointment.id}`}
                                className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50"
                              >
                                View Records
                              </button>
                              <button 
                                onClick={() => handleAcceptAppointment(appointment.id)}
                                className="inline-flex items-center px-3 py-1 border border-green-300 text-sm font-medium rounded text-green-700 bg-green-50 hover:bg-green-100"
                              >
                                <Check className="h-4 w-4 mr-1" />
                                Accept
                              </button>
                              <button 
                                onClick={() => handleDeclineAppointment(appointment.id)}
                                className="inline-flex items-center px-3 py-1 border border-red-300 text-sm font-medium rounded text-red-700 bg-red-50 hover:bg-red-100"
                              >
                                <X className="h-4 w-4 mr-1" />
                                Decline
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Past Appointments */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Past Appointments</h3>
                    {pastAppointments.length === 0 ? (
                      <p className="text-gray-500">You have no past appointments.</p>
                    ) : (
                      <div className="space-y-4">
                        {pastAppointments.map((appointment) => (
                          <div key={appointment.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                              <div className="flex items-center mb-4 md:mb-0">
                                <img
                                  src={appointment.image}
                                  alt={appointment.patientName}
                                  className="h-12 w-12 rounded-full mr-4"
                                />
                                <div>
                                  <h4 className="text-md font-semibold">{appointment.patientName}</h4>
                                  <p className="text-sm text-gray-600">Age: {appointment.age}</p>
                                  <div className="flex items-center mt-1">
                                    <div className="flex text-yellow-400">
                                      {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4" fill={i < appointment.rating ? 'currentColor' : 'none'} />
                                      ))}
                                    </div>
                                    <span className="ml-1 text-xs text-gray-600">{appointment.review}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className="text-right">
                                  <p className="text-sm font-medium">{appointment.date}</p>
                                  <p className="text-sm text-gray-600">{appointment.time}</p>
                                  <span className="inline-block mt-1 px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                                    Completed
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 p-3 bg-white rounded border border-gray-200">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <p className="text-sm font-medium text-gray-700">Diagnosis</p>
                                  <p className="text-sm text-gray-600">{appointment.diagnosis}</p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-700">Prescription</p>
                                  <p className="text-sm text-gray-600">{appointment.prescription}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-4 text-center">
                      <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                        View More Past Appointments
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Patient Records Tab */}
              {activeTab === 'patients' && (
                <div>
                  <div className="border-b border-gray-200 mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 pb-4">Patient Records</h2>
                  </div>

                  <div className="mb-6">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search patients..."
                        className="pl-10 w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {patientRecords.map((patient) => (
                      <div key={patient.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        <div className="p-4">
                          <div className="flex items-start">
                            <img
                              src={patient.image}
                              alt={patient.patientName}
                              className="h-16 w-16 rounded-full mr-4"
                            />
                            <div>
                              <h3 className="text-lg font-medium">{patient.patientName}</h3>
                              <p className="text-sm text-gray-600">DOB: {patient.dateOfBirth}</p>
                              <p className="text-sm text-gray-600">Last Visit: {patient.lastVisit}</p>
                              <div className="mt-2">
                                <p className="text-sm font-medium text-gray-700">Medical History:</p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {patient.medicalHistory.map((condition, index) => (
                                    <span key={index} className="inline-block px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                                      {condition}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <Link
                              to={`/patient-details/${patient.id}`}
                              className="inline-flex items-center px-3 py-1 border border-blue-300 text-sm font-medium rounded text-blue-700 bg-blue-50 hover:bg-blue-100"
                            >
                              View Full Records
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                      View All Patients
                    </button>
                  </div>
                </div>
              )}

              {/* Prescriptions Tab */}
              {activeTab === 'prescriptions' && (
                <div>
                  <div className="border-b border-gray-200 mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 pb-4">Prescriptions</h2>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                    <h3 className="text-md font-medium mb-4">Create New Prescription</h3>
                    <form>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Patient</label>
                          <select className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500">
                            <option value="">Select Patient</option>
                            {patientRecords.map(patient => (
                              <option key={patient.id} value={patient.id}>{patient.patientName}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                          <input
                            type="date"
                            defaultValue={new Date().toISOString().split('T')[0]}
                            className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Diagnosis</label>
                        <input
                          type="text"
                          placeholder="Enter diagnosis"
                          className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Medications</label>
                        <div className="space-y-2">
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                            <input
                              type="text"
                              placeholder="Medication name"
                              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                            />
                            <input
                              type="text"
                              placeholder="Dosage"
                              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                            />
                            <input
                              type="text"
                              placeholder="Frequency"
                              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                            />
                            <input
                              type="text"
                              placeholder="Duration"
                              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>
                          <button
                            type="button"
                            className="inline-flex items-center px-3 py-1 border border-blue-300 text-sm font-medium rounded text-blue-700 bg-blue-50 hover:bg-blue-100"
                          >
                            + Add Another Medication
                          </button>
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                        <textarea
                          rows="3"
                          placeholder="Additional notes or instructions"
                          className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                        >
                          Generate Prescription
                        </button>
                      </div>
                    </form>
                  </div>

                  <h3 className="text-lg font-medium text-gray-700 mb-4">Recent Prescriptions</h3>
                  <div className="space-y-4">
                    {pastAppointments.map(appointment => (
                      <div key={appointment.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <img
                                src={appointment.image}
                                alt={appointment.patientName}
                                className="h-10 w-10 rounded-full mr-3"
                              />
                              <div>
                                <h4 className="text-sm font-medium">{appointment.patientName}</h4>
                                <p className="text-xs text-gray-600">Date: {appointment.date}</p>
                              </div>
                            </div>
                            <button className="inline-flex items-center text-blue-600 hover:text-blue-800">
                              <Download className="h-5 w-5 mr-1" />
                              Download
                            </button>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm font-medium text-gray-700">Diagnosis</p>
                              <p className="text-sm text-gray-600">{appointment.diagnosis}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-700">Prescription</p>
                              <p className="text-sm text-gray-600">{appointment.prescription}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Availability Tab */}
              {activeTab === 'availability' && (
                <div>
                  <div className="border-b border-gray-200 mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 pb-4">Manage Availability</h2>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                    <h3 className="text-md font-medium mb-4">Set Your Regular Schedule</h3>
                    <div className="grid grid-cols-7 gap-4 mb-2 text-center">
                      <div className="text-sm font-medium text-gray-700">Monday</div>
                      <div className="text-sm font-medium text-gray-700">Tuesday</div>
                      <div className="text-sm font-medium text-gray-700">Wednesday</div>
                      <div className="text-sm font-medium text-gray-700">Thursday</div>
                      <div className="text-sm font-medium text-gray-700">Friday</div>
                      <div className="text-sm font-medium text-gray-700">Saturday</div>
                      <div className="text-sm font-medium text-gray-700">Sunday</div>
                    </div>

                    <div className="grid grid-cols-7 gap-4 text-center">
                      {/* Monday */}
                      <div className="p-2 border border-gray-200 rounded-md bg-white">
                        <div className="space-y-2">
                          <label className="inline-flex items-center">
                            <input type="checkbox" checked className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-700">9:00 AM - 12:00 PM</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input type="checkbox" checked className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-700">1:00 PM - 5:00 PM</span>
                          </label>
                        </div>
                      </div>

                      {/* Tuesday */}
                      <div className="p-2 border border-gray-200 rounded-md bg-white">
                        <div className="space-y-2">
                          <label className="inline-flex items-center">
                            <input type="checkbox" checked className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-700">9:00 AM - 12:00 PM</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input type="checkbox" checked className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-700">1:00 PM - 5:00 PM</span>
                          </label>
                        </div>
                      </div>

                      {/* Wednesday */}
                      <div className="p-2 border border-gray-200 rounded-md bg-white">
                        <div className="space-y-2">
                          <label className="inline-flex items-center">
                            <input type="checkbox" checked className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-700">9:00 AM - 12:00 PM</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input type="checkbox" checked className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-700">1:00 PM - 5:00 PM</span>
                          </label>
                        </div>
                      </div>

                      {/* Thursday */}
                      <div className="p-2 border border-gray-200 rounded-md bg-white">
                        <div className="space-y-2">
                          <label className="inline-flex items-center">
                            <input type="checkbox" checked className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-700">9:00 AM - 12:00 PM</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input type="checkbox" checked className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-700">1:00 PM - 5:00 PM</span>
                          </label>
                        </div>
                      </div>

                      {/* Friday */}
                      <div className="p-2 border border-gray-200 rounded-md bg-white">
                        <div className="space-y-2">
                          <label className="inline-flex items-center">
                            <input type="checkbox" checked className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-700">9:00 AM - 12:00 PM</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input type="checkbox" checked className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-700">1:00 PM - 5:00 PM</span>
                          </label>
                        </div>
                      </div>

                      {/* Saturday */}
                      <div className="p-2 border border-gray-200 rounded-md bg-white">
                        <div className="space-y-2">
                          <label className="inline-flex items-center">
                            <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-700">9:00 AM - 12:00 PM</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-700">1:00 PM - 5:00 PM</span>
                          </label>
                        </div>
                      </div>

                      {/* Sunday */}
                      <div className="p-2 border border-gray-200 rounded-md bg-white">
                        <div className="space-y-2">
                          <label className="inline-flex items-center">
                            <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-700">9:00 AM - 12:00 PM</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-700">1:00 PM - 5:00 PM</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                      >
                        Save Schedule
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="text-md font-medium mb-4">Set Specific Unavailable Dates</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date From</label>
                        <input
                          type="date"
                          className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date To</label>
                        <input
                          type="date"
                          className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Reason (Optional)</label>
                        <input
                          type="text"
                          placeholder="Vacation, Conference, etc."
                          className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                      >
                        Add Unavailable Date
                      </button>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Upcoming Unavailable Dates</h3>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date From
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date To
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Reason
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              June 15, 2025
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              June 20, 2025
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              Medical Conference
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button className="text-blue-600 hover:text-blue-900 mr-4">
                                Edit
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                Delete
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              July 10, 2025
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              July 15, 2025
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              Vacation
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button className="text-blue-600 hover:text-blue-900 mr-4">
                                Edit
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                Delete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div>
                  <div className="border-b border-gray-200 mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 pb-4">Your Profile</h2>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center mb-6">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                      <div className="relative">
                        <img
                          src="https://randomuser.me/api/portraits/men/32.jpg"
                          className="h-24 w-24 rounded-full object-cover"
                          alt="Profile"
                        />
                        <label className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-1 cursor-pointer">
                          <Upload className="h-4 w-4" />
                          <input type="file" className="sr-only" />
                        </label>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Dr. {user.name}</h3>
                      <p className="text-gray-600">{user.email}</p>
                    </div>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          defaultValue={`Dr. ${user.name}`}
                          className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          defaultValue={user.email}
                          className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          defaultValue="(555) 987-6543"
                          className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
                        <select className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500">
                          <option>Cardiology</option>
                          <option>Dermatology</option>
                          <option>Neurology</option>
                          <option>Pediatrics</option>
                          <option>Orthopedics</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Office Address</label>
                      <input
                        type="text"
                        defaultValue="456 Health Ave"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 mb-2"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <input
                          type="text"
                          defaultValue="New York"
                          placeholder="City"
                          className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                        <input
                          type="text"
                          defaultValue="NY"
                          placeholder="State"
                          className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                        <input
                          type="text"
                          defaultValue="10001"
                          placeholder="Zip Code"
                          className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Professional Bio</label>
                      <textarea
                        rows="4"
                        defaultValue="Dr. Smith is a board-certified cardiologist with over 15 years of experience. He specializes in preventative cardiology and heart disease management. Dr. Smith completed his medical training at Johns Hopkins University and his residency at Mayo Clinic."
                        className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Education & Certifications</label>
                      <textarea
                        rows="4"
                        defaultValue="- MD, Johns Hopkins University School of Medicine\n- Residency in Internal Medicine, Mayo Clinic\n- Fellowship in Cardiology, Cleveland Clinic\n- Board Certified in Cardiovascular Disease"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                      ></textarea>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div>
                  <div className="border-b border-gray-200 mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 pb-4">Account Settings</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                      <div className="p-4 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-800">Change Password</h3>
                      </div>
                      <div className="p-4">
                        <form className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                            <input
                              type="password"
                              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                              placeholder="••••••••"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                            <input
                              type="password"
                              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                              placeholder="••••••••"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                            <input
                              type="password"
                              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                              placeholder="••••••••"
                            />
                          </div>
                          <div className="flex justify-end">
                            <button
                              type="submit"
                              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                            >
                              Update Password
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                      <div className="p-4 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-800">Notification Settings</h3>
                      </div>
                      <div className="p-4">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-700">Email Notifications</p>
                              <p className="text-sm text-gray-500">Receive email for new appointments, cancellations, etc.</p>
                            </div>
                            <label className="flex items-center cursor-pointer">
                              <div className="relative">
                                <input type="checkbox" className="sr-only" defaultChecked />
                                <div className="block bg-gray-300 w-10 h-6 rounded-full"></div>
                                <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition translate-x-4"></div>
                              </div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-700">SMS Notifications</p>
                              <p className="text-sm text-gray-500">Receive text messages for appointment reminders</p>
                            </div>
                            <label className="flex items-center cursor-pointer">
                              <div className="relative">
                                <input type="checkbox" className="sr-only" defaultChecked />
                                <div className="block bg-gray-300 w-10 h-6 rounded-full"></div>
                                <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition translate-x-4"></div>
                              </div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-700">Marketing Communications</p>
                              <p className="text-sm text-gray-500">Receive updates about our products and services</p>
                            </div>
                            <label className="flex items-center cursor-pointer">
                              <div className="relative">
                                <input type="checkbox" className="sr-only" />
                                <div className="block bg-gray-300 w-10 h-6 rounded-full"></div>
                                <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="mt-6 flex justify-end">
                          <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                          >
                            Save Preferences
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DoctorDashboard;
