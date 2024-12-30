import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCode, FaPalette, FaFacebook, FaBehance, FaLinkedin } from 'react-icons/fa'; 
import Tab from '../assets/Images/Tab.png';

const About = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-blue-900 p-6 pt-12">
     
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-1xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-white text-center">
          It’s time to <span className='text-blue-500'>start </span>  investing in
        </h1>
        <h2 className="text-1xl md:text-3xl lg:text-5xl xl:text-5xl font-bold text-white text-center mt-2">
          yourself
        </h2>
      </div>

      
      <div className="mt-8 flex items-center justify-center h-screen">
  <img
    src={Tab} 
    alt="Replaceable"
    className="w-full max-w-screen-xlg h-auto rounded-lg"
  />
</div>


      
      <div className="flex flex-col lg:flex-row lg:space-x-6 mt-6 max-w-8xl mx-auto px-4 mb-20">
       
        <div className="flex-1 text-left mb-8 lg:mb-0">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">About</h3>
          <p className="text-white text-sm md:text-base leading-relaxed">
            Ezitech Institute provides a platform for newcomers to launch their IT and careers. Our emphasis on practical information technology courses that are career-oriented makes us the top computer institute in Rawalpindi, Islamabad, Pakistan.
          </p>
        </div>

        
        <div className="flex-1 text-left mb-8 lg:mb-0">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Popular Courses</h3>
          <div className="flex flex-col space-y-2">
           
            <div className="flex items-center">
              <FaCode className="text-blue-500 mr-2" /> 
              <p className="text-white font-semibold">Web Development</p>
            </div>

            
            <div className="flex items-center">
              <FaPalette className="text-blue-500 mr-2" /> 
              <p className="text-white font-semibold">Graphic Design</p>
            </div>
          </div>
        </div>

        
        <div className="flex-1 text-left mb-8 lg:mb-0">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Pages</h3>
          <ul className="list-disc list-inside text-white text-sm md:text-base space-y-1">
            <li>BLOG</li>
            <li>EZICODING</li>
            <li>INTERNSHIP</li>
            <li>SERVICES</li>
          </ul>
        </div>

        
        <div className="flex-1 text-left">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Contact</h3>
          <div className="space-y-4 text-sm md:text-base text-white">
          
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>Location: 123 Main St, City, Country</span> 
            </div>

           
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-blue-500" />
              <span>Phone: (123) 456-7890</span> 
            </div>

            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-blue-500" />
              <span>Email: contact@ezitech.com</span> 
            </div>
          </div>
        </div>
      </div>

      
      <footer className="absolute bottom-0 left-0 w-full py-4 border-t border-blue-700 text-white flex flex-col items-center">
        <div className="text-center mb-4">
          <p className="text-sm md:text-base">Copyright © 2024 Ezitech Institute | Design & Develop by Eziline Software House</p>
        </div>
        <div className="absolute bottom-4 right-4 flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white text-lg md:text-xl" />
          </a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
            <FaBehance className="text-white text-lg md:text-xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-lg md:text-xl" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default About;
