import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Search, Calendar, Star, ChevronDown, User, Shield } from 'lucide-react';

function Home() {
  const featuredDoctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Cardiologist",
      location: "New York",
      rating: 4.9,
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      available: true
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "Dermatologist",
      location: "Los Angeles",
      rating: 4.8,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      available: true
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialization: "Pediatrician",
      location: "Chicago",
      rating: 4.7,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      available: false
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      rating: 5,
      text: "The appointment booking process was seamless. I was able to find a specialist and book an appointment within minutes!",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      id: 2,
      name: "Maria Garcia",
      rating: 4,
      text: "I love how easy it is to manage my medical appointments. The reminders are especially helpful!",
      image: "https://randomuser.me/api/portraits/women/62.jpg"
    },
    {
      id: 3,
      name: "David Kim",
      rating: 5,
      text: "Found an excellent specialist through this platform. The doctor profiles with ratings helped me make an informed decision.",
      image: "https://randomuser.me/api/portraits/men/42.jpg"
    }
  ];

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment by searching for a doctor, selecting an available time slot, and confirming your booking. You'll need to create an account or sign in first."
    },
    {
      question: "Can I reschedule an appointment?",
      answer: "Yes, you can reschedule appointments through your patient dashboard. Just find the appointment and click the reschedule button to select a new time."
    },
    {
      question: "How do doctors verify their profiles?",
      answer: "Doctors go through a verification process where they submit their medical credentials and licenses, which are then verified by our administrative team."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we adhere to strict privacy standards and use encryption to protect all patient and doctor data. Your medical information is only accessible to you and your healthcare providers."
    }
  ];

  const toggleFaq = (id) => {
    document.getElementById(`faq-${id}`).classList.toggle('hidden');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find the Best Doctors for Your Health</h1>
          <p className="text-xl mb-8">Book an appointment with top-rated specialists in just a few clicks.</p>
          
          <div className="bg-white rounded-lg p-4 shadow-lg max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <select className="w-full p-3 border border-gray-300 rounded text-gray-700">
                  <option value="">Select Specialization</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="dermatology">Dermatology</option>
                  <option value="neurology">Neurology</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="orthopedics">Orthopedics</option>
                </select>
              </div>
              <div className="flex-1">
                <select className="w-full p-3 border border-gray-300 rounded text-gray-700">
                  <option value="">Select Location</option>
                  <option value="new-york">New York</option>
                  <option value="los-angeles">Los Angeles</option>
                  <option value="chicago">Chicago</option>
                  <option value="houston">Houston</option>
                  <option value="miami">Miami</option>
                </select>
              </div>
              <button className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
                Search Doctors
              </button>
            </div>
          </div>
          
          <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">
            <Link to="/doctor-list" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Find a Doctor
            </Link>
            <Link to="/login" className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition">
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-blue-600 mb-8 text-center">For Patients</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-blue-600 w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Search</h4>
                <p className="text-gray-600">Search for a doctor by specialization or location</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-blue-600 w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Book</h4>
                <p className="text-gray-600">Choose a doctor & book an available slot</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="text-blue-600 w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Consult</h4>
                <p className="text-gray-600">Attend consultation & get a prescription</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-blue-600 w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Review</h4>
                <p className="text-gray-600">Rate & review your experience</p>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-blue-600 mb-8 text-center">For Doctors</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="text-blue-600 w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Register</h4>
                <p className="text-gray-600">Register & set up your profile</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-blue-600 w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Manage</h4>
                <p className="text-gray-600">Manage appointments & patient interactions</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="text-blue-600 w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Consult</h4>
                <p className="text-gray-600">Conduct consultations online or in-person</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-blue-600 w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Grow</h4>
                <p className="text-gray-600">Receive feedback & grow your practice</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/patient-signup" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Doctors Section */}
      <section id="doctors" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Doctors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDoctors.map(doctor => (
              <div key={doctor.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-64 object-cover" />
                  {doctor.available ? (
                    <span className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Available</span>
                  ) : (
                    <span className="absolute top-4 right-4 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Unavailable</span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                  <p className="text-gray-600 mb-2">{doctor.specialization}</p>
                  <p className="text-gray-600 mb-4">{doctor.location}</p>
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(doctor.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill={i < Math.floor(doctor.rating) ? 'currentColor' : 'none'} />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">{doctor.rating}</span>
                  </div>
                  <Link to={`/doctor/${doctor.id}`} className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/doctors" className="text-blue-600 hover:text-blue-800 font-semibold">
              View All Doctors →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Patients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4" fill={i < testimonial.rating ? 'currentColor' : 'none'} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <button 
                  className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown className="w-5 h-5" />
                </button>
                <div id={`faq-${index}`} className="p-4 bg-white hidden">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">MediConnect Express</h3>
              <p className="text-gray-400">Connecting Patients with Healthcare Providers</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Doctors</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-400">© 2025, MediConnect Express. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
