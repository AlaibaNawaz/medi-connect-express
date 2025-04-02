
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, MapPin, Calendar, Book, Upload } from 'lucide-react';

function DoctorSignup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    specialization: '',
    location: '',
    bio: '',
    profileImage: null
  });
  
  const [availability, setAvailability] = useState({
    monday: { morning: false, afternoon: false, evening: false },
    tuesday: { morning: false, afternoon: false, evening: false },
    wednesday: { morning: false, afternoon: false, evening: false },
    thursday: { morning: false, afternoon: false, evening: false },
    friday: { morning: false, afternoon: false, evening: false },
    saturday: { morning: false, afternoon: false, evening: false },
    sunday: { morning: false, afternoon: false, evening: false },
  });
  
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  
  const specializations = [
    'Cardiology', 'Dermatology', 'Endocrinology', 'Gastroenterology', 'Neurology',
    'Obstetrics', 'Oncology', 'Ophthalmology', 'Orthopedics', 'Pediatrics',
    'Psychiatry', 'Radiology', 'Urology'
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleAvailabilityChange = (day, timeSlot) => {
    setAvailability({
      ...availability,
      [day]: {
        ...availability[day],
        [timeSlot]: !availability[day][timeSlot]
      }
    });
  };
  
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        profileImage: e.target.files[0]
      });
    }
  };
  
  const validateStep1 = () => {
    const newErrors = {};
    
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const validateStep2 = () => {
    const newErrors = {};
    
    if (!formData.specialization) newErrors.specialization = 'Specialization is required';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.bio) newErrors.bio = 'Bio is required';
    
    const hasAvailability = Object.values(availability).some(day => 
      Object.values(day).some(slot => slot === true)
    );
    
    if (!hasAvailability) newErrors.availability = 'At least one availability slot is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const nextStep = () => {
    if (step === 1) {
      if (validateStep1()) setStep(2);
    } else if (step === 2) {
      if (validateStep2()) setStep(3);
    }
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real app, you would send this data to your backend
    console.log('Form data submitted:', { ...formData, availability });
    
    // Mock successful registration
    navigate('/login', { state: { message: 'Registration successful! Please login with your credentials.', userType: 'doctor' } });
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Doctor Registration</h2>
            <p className="mt-2 text-gray-600">Join our network of healthcare professionals</p>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className={`flex-1 text-center py-2 ${step >= 1 ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
                1. Account Details
              </div>
              <div className={`flex-1 text-center py-2 ${step >= 2 ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
                2. Professional Details
              </div>
              <div className={`flex-1 text-center py-2 ${step >= 3 ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
                3. Review & Submit
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(step / 3) * 100}%` }}></div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="Dr. John Smith"
                    />
                  </div>
                  {errors.fullName && <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="doctor@example.com"
                    />
                  </div>
                  {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="••••••••"
                    />
                  </div>
                  {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="••••••••"
                    />
                  </div>
                  {errors.confirmPassword && <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>}
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">Specialization</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Book className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="specialization"
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-2 border ${errors.specialization ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                    >
                      <option value="">Select Specialization</option>
                      {specializations.map(spec => (
                        <option key={spec} value={spec}>{spec}</option>
                      ))}
                    </select>
                  </div>
                  {errors.specialization && <p className="mt-2 text-sm text-red-600">{errors.specialization}</p>}
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-2 border ${errors.location ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="New York, NY"
                    />
                  </div>
                  {errors.location && <p className="mt-2 text-sm text-red-600">{errors.location}</p>}
                </div>
                
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Professional Bio</label>
                  <div className="mt-1">
                    <textarea
                      id="bio"
                      name="bio"
                      rows="4"
                      value={formData.bio}
                      onChange={handleChange}
                      className={`block w-full px-3 py-2 border ${errors.bio ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="Tell potential patients about your experience, qualifications, and approach to care..."
                    ></textarea>
                  </div>
                  {errors.bio && <p className="mt-2 text-sm text-red-600">{errors.bio}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <div className="grid grid-cols-4 gap-4">
                      <div className="col-span-1"></div>
                      <div className="text-center text-sm font-medium text-gray-700">Morning</div>
                      <div className="text-center text-sm font-medium text-gray-700">Afternoon</div>
                      <div className="text-center text-sm font-medium text-gray-700">Evening</div>
                      
                      {Object.entries(availability).map(([day, slots]) => (
                        <React.Fragment key={day}>
                          <div className="text-sm font-medium text-gray-700 capitalize">{day}</div>
                          {Object.entries(slots).map(([timeSlot, isAvailable]) => (
                            <div key={`${day}-${timeSlot}`} className="flex justify-center">
                              <input
                                type="checkbox"
                                id={`${day}-${timeSlot}`}
                                checked={isAvailable}
                                onChange={() => handleAvailabilityChange(day, timeSlot)}
                                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                            </div>
                          ))}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  {errors.availability && <p className="mt-2 text-sm text-red-600">{errors.availability}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
                  <div className="mt-1 flex items-center">
                    <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                      {formData.profileImage ? (
                        <img
                          src={URL.createObjectURL(formData.profileImage)}
                          alt="Profile preview"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                    </span>
                    <label htmlFor="profile-image" className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer">
                      <Upload className="h-4 w-4 inline-block mr-1" />
                      Upload
                    </label>
                    <input
                      id="profile-image"
                      name="profileImage"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Review Your Information</h3>
                
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Personal Details</h4>
                      <p className="mt-1"><span className="font-medium">Name:</span> {formData.fullName}</p>
                      <p><span className="font-medium">Email:</span> {formData.email}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Professional Details</h4>
                      <p className="mt-1"><span className="font-medium">Specialization:</span> {formData.specialization}</p>
                      <p><span className="font-medium">Location:</span> {formData.location}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-500">Bio</h4>
                    <p className="mt-1 text-sm text-gray-600">{formData.bio}</p>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-500">Availability</h4>
                    <div className="mt-2 text-sm">
                      {Object.entries(availability).map(([day, slots]) => {
                        const availableSlots = Object.entries(slots)
                          .filter(([_, isAvailable]) => isAvailable)
                          .map(([slot]) => slot);
                        
                        if (availableSlots.length === 0) return null;
                        
                        return (
                          <p key={day} className="capitalize">
                            <span className="font-medium">{day}:</span> {availableSlots.join(', ')}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        By clicking "Complete Registration", you agree to our Terms of Service and Privacy Policy. Your information will be reviewed by our team before your profile is made public.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Back
                </button>
              )}
              
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto bg-blue-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto bg-blue-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Complete Registration
                </button>
              )}
            </div>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorSignup;
