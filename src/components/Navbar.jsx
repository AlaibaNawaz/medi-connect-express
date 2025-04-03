
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '../contexts/AuthContext';
import { Home, User, Calendar, LogOut, LogIn, UserPlus, Users, Settings, ChevronDown, Shield } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const isHomePage = location.pathname === '/';

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className={`bg-white shadow-sm border-b ${isHomePage ? 'sticky top-0 z-50' : ''}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and main site name */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-blue-600 text-xl font-bold">MediConnect</span>
          </Link>

          {/* Main Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className={`flex items-center gap-1 px-3 py-2 rounded-md ${isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            
            {isHomePage && (
              <>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2">About Us</a>
                <a href="#doctors" className="text-gray-700 hover:text-blue-600 px-3 py-2">Doctors</a>
                <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 px-3 py-2">How It Works</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2">Contact</a>
              </>
            )}
            
            {user ? (
              <>
                {user.type === 'patient' && (
                  <>
                    <Link to="/doctor-list" className={`flex items-center gap-1 px-3 py-2 rounded-md ${isActive('/doctor-list') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                      <Users className="h-4 w-4" />
                      <span>Find Doctors</span>
                    </Link>
                    <Link to="/appointments" className={`flex items-center gap-1 px-3 py-2 rounded-md ${isActive('/appointments') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                      <Calendar className="h-4 w-4" />
                      <span>Appointments</span>
                    </Link>
                    <Link to="/patient-profile" className={`flex items-center gap-1 px-3 py-2 rounded-md ${isActive('/patient-profile') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </>
                )}
                
                {user.type === 'doctor' && (
                  <>
                    <Link to="/appointments" className={`flex items-center gap-1 px-3 py-2 rounded-md ${isActive('/appointments') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                      <Calendar className="h-4 w-4" />
                      <span>Appointments</span>
                    </Link>
                    <Link to="/prescriptions" className={`flex items-center gap-1 px-3 py-2 rounded-md ${isActive('/prescriptions') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                      <Settings className="h-4 w-4" />
                      <span>Prescriptions</span>
                    </Link>
                  </>
                )}
              </>
            ) : (
              <>
                {!isHomePage && (
                  <Link to="/doctor-list" className={`flex items-center gap-1 px-3 py-2 rounded-md ${isActive('/doctor-list') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                    <Users className="h-4 w-4" />
                    <span>Browse Doctors</span>
                  </Link>
                )}
              </>
            )}
          </div>

          {/* Auth Actions */}
          <div className="flex items-center gap-2">
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 hidden md:inline-block">
                  Hello, {user.name}
                </span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleLogout}
                  className="flex items-center gap-1"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden md:inline-block">Logout</span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => navigate('/login')}
                  className="flex items-center gap-1"
                >
                  <LogIn className="h-4 w-4" />
                  <span className="hidden md:inline-block">Login</span>
                </Button>
                {isHomePage ? (
                  <div className="relative group">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <UserPlus className="h-4 w-4" />
                      <span className="hidden md:inline-block">Sign Up</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                      <Link to="/patient-signup" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">
                        <User className="inline-block mr-2 h-4 w-4" />
                        Sign Up as Patient
                      </Link>
                      <Link to="/doctor-signup" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">
                        <Shield className="inline-block mr-2 h-4 w-4" />
                        Sign Up as Doctor
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => navigate('/patient-signup')}
                    className="flex items-center gap-1"
                  >
                    <UserPlus className="h-4 w-4" />
                    <span className="hidden md:inline-block">Sign Up</span>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
