
import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { 
  Star, 
  MapPin, 
  Clock, 
  Award, 
  Briefcase, 
  GraduationCap, 
  DollarSign, 
  Calendar,
  ArrowLeft,
  User
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

function DoctorProfile() {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const { doctors, user } = useAuth();
  
  // Find the doctor by ID
  const doctor = doctors.find(d => d.id === doctorId);
  
  // If doctor not found, show error
  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Doctor Not Found</h2>
          <p className="text-gray-600 mb-6">The doctor you're looking for doesn't exist or has been removed.</p>
          <Link to="/doctor-list" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Back to Doctor List
          </Link>
        </div>
      </div>
    );
  }
  
  // Mock reviews for the doctor
  const reviews = [
    {
      id: 'r1',
      patientName: 'John Smith',
      rating: 5,
      date: '2023-06-10',
      content: 'Dr. Sarah was extremely thorough and took the time to explain everything. Highly recommend!',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 'r2',
      patientName: 'Emily Johnson',
      rating: 4,
      date: '2023-05-22',
      content: 'Very professional and knowledgeable. The waiting time was a bit long though.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 'r3',
      patientName: 'Michael Brown',
      rating: 5,
      date: '2023-04-15',
      content: 'Outstanding care and attention to detail. I felt very comfortable during my appointment.',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back</span>
          </button>
        </div>
      </div>
      
      {/* Doctor Profile */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Profile Header */}
          <div className="bg-blue-600 p-6 text-white">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-white border-4 border-white flex-shrink-0">
                {doctor.image ? (
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600">
                    <span className="text-3xl font-bold">{doctor.name.charAt(0)}</span>
                  </div>
                )}
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{doctor.name}</h1>
                
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-3">
                  {doctor.specialization && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500 bg-opacity-30">
                      {doctor.specialization}
                    </span>
                  )}
                  {doctor.location && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500 bg-opacity-30">
                      <MapPin className="h-4 w-4 mr-1" />
                      {doctor.location}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < Math.floor(doctor.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2">{doctor.rating || 0} ({reviews.length} reviews)</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  to={`/book-appointment/${doctor.id}`}
                  className="px-6 py-2 bg-white text-blue-600 rounded-md hover:bg-blue-50 font-semibold"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
          
          {/* Profile Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Main Info */}
              <div className="md:col-span-2 space-y-8">
                {/* About */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">About</h2>
                  <p className="text-gray-600">
                    {doctor.bio || 'No bio available for this doctor.'}
                  </p>
                </div>
                
                {/* Qualifications */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Education & Qualifications</h2>
                  {doctor.education ? (
                    <div className="space-y-3">
                      <div className="flex">
                        <div className="flex-shrink-0 mt-1">
                          <GraduationCap className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-800">{doctor.education}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-600">No education details available.</p>
                  )}
                </div>
                
                {/* Experience */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Experience</h2>
                  {doctor.experience ? (
                    <div className="flex">
                      <div className="flex-shrink-0 mt-1">
                        <Briefcase className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-800">{doctor.experience} years of experience</p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-600">No experience details available.</p>
                  )}
                </div>
                
                {/* Reviews */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Patient Reviews</h2>
                  {reviews.length > 0 ? (
                    <div className="space-y-4">
                      {reviews.map(review => (
                        <div key={review.id} className="border rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <div className="h-10 w-10 rounded-full overflow-hidden">
                                {review.avatar ? (
                                  <img 
                                    src={review.avatar} 
                                    alt={review.patientName} 
                                    className="h-full w-full object-cover"
                                  />
                                ) : (
                                  <div className="h-full w-full flex items-center justify-center bg-gray-200">
                                    <User className="h-6 w-6 text-gray-500" />
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="ml-3 flex-1">
                              <div className="flex justify-between">
                                <div>
                                  <h4 className="font-medium">{review.patientName}</h4>
                                  <div className="flex items-center mt-1">
                                    <div className="flex">
                                      {[...Array(5)].map((_, i) => (
                                        <Star 
                                          key={i} 
                                          className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                        />
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                              <p className="mt-2 text-gray-600">{review.content}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No reviews yet.</p>
                  )}
                </div>
              </div>
              
              {/* Sidebar Info */}
              <div className="space-y-6">
                {/* Availability */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-blue-600" />
                    Availability
                  </h3>
                  
                  {doctor.availableDays && doctor.availableDays.length > 0 ? (
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-700">Days:</h4>
                      <div className="flex flex-wrap gap-2">
                        {doctor.availableDays.map(day => (
                          <span key={day} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {day}
                          </span>
                        ))}
                      </div>
                      
                      <h4 className="text-sm font-medium text-gray-700 mt-3">Time Slots:</h4>
                      <div className="flex flex-wrap gap-2">
                        {doctor.availableTimeSlots && doctor.availableTimeSlots.length > 0 ? (
                          doctor.availableTimeSlots.map(slot => (
                            <span key={slot} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                              {slot}
                            </span>
                          ))
                        ) : (
                          <p className="text-sm text-gray-600">No specific time slots provided.</p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-600">Availability information not provided.</p>
                  )}
                  
                  <div className="mt-4">
                    <Link 
                      to={`/book-appointment/${doctor.id}`}
                      className="block w-full py-2 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700"
                    >
                      Book an Appointment
                    </Link>
                  </div>
                </div>
                
                {/* Consultation Fee */}
                {doctor.fees && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <DollarSign className="h-5 w-5 mr-2 text-blue-600" />
                      Consultation Fee
                    </h3>
                    <p className="text-xl font-bold text-gray-900">${doctor.fees}</p>
                    <p className="text-sm text-gray-600">Per consultation</p>
                  </div>
                )}
                
                {/* Location */}
                {doctor.location && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                      Location
                    </h3>
                    <p className="text-gray-800">{doctor.location}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
