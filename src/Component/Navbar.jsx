import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaUser } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaBehance, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-3">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
          
          <div className="flex items-center space-x-2 text-xs md:text-sm">
            <FaPhoneAlt />
            <span>+92 3455555396</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
            <div className="flex items-center space-x-2 text-xs md:text-sm">
              <FaMapMarkerAlt />
              <span>Westridge 1, Office #304-G Peshawar Road, Rawalpindi, Pakistan</span>
            </div>
            <div className="flex items-center space-x-2 text-xs md:text-sm">
              <FaClock />
              <span>Mon - Fri 8.00 - 20.00</span>
            </div>
          </div>
        </div>

       
        <div className="flex items-center space-x-2 my-2 md:my-0 text-xs md:text-sm">
          <a href="#" className="hover:text-gray-300 transition duration-200">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-300 transition duration-200">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-300 transition duration-200">
            <FaBehance />
          </a>
          <a href="#" className="hover:text-gray-300 transition duration-200">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-gray-300 transition duration-200">
            <FaYoutube />
          </a>
        </div>

        
        <div className="flex items-center space-x-2 mt-2 md:mt-0 text-xs md:text-sm">
          <button className="flex items-center space-x-1 hover:text-gray-300 transition duration-200">
            <FaUser />
            <span>Login</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-gray-300 transition duration-200">
            <FaUser />
            <span>Register</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
