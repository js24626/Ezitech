import React, { useEffect, useState } from 'react';import Men from '../assets/Images/Men.jpg'; 
import logo1 from "../assets/Images/EZIBLOGS.png";
import logo2 from "../assets/Images/white-ezipos.png";
import logo3 from "../assets/Images/white-logo.png";
import Ezitech from '../assets/Images/Ezitech.png'; 
import { FaRegHeart, FaSearch, FaHeart } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai'; 

const Home = () => {
  const words = ['Programming', 'Web Design', 'Social Skills', 'Marketing'];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % words.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative">
    
      <img src={Men} alt="Men" className=" w-full h-screen object-cover blur-sm" />

    
      <nav className="absolute top-0 left-0 right-0 bg-transparent text-white px-4 py-3 md:px-6 md:py-4 border-b border-zinc-400">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
          <div className="flex items-center">
            <img src={Ezitech} alt="Logo" className="h-12 md:h-16 w-auto" />
          </div>

          
          <ul className="flex flex-wrap justify-center space-x-4 text-sm md:text-base">
            <li><a href="#" className="hover:text-gray-300 transition duration-200">Home</a></li>
            <li><a href="#" className="hover:text-gray-300 transition duration-200">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300 transition duration-200">Certifications</a></li>
            <li><a href="#" className="hover:text-gray-300 transition duration-200">Careers</a></li>
            <li><a href="#" className="hover:text-gray-300 transition duration-200">Seminar</a></li>
            <li><a href="#" className="hover:text-gray-300 transition duration-200">Tech Blogs</a></li>
            <li><a href="#" className="hover:text-gray-300 transition duration-200">iPortal Login</a></li>
          </ul>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <FaRegHeart className="text-lg hover:text-gray-300 transition duration-200 cursor-pointer" />
            <FaSearch className="text-lg hover:text-gray-300 transition duration-200 cursor-pointer" />
          </div>
        </div>
      </nav>

     
      <div className="absolute top-1/3 left-0 right-0 flex flex-col items-center justify-center text-center space-y-4 px-4 md:px-8">
        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold">
          Learn the fundamentals with Our
        </h2>
        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold flex items-center">
          <span>Expert in&nbsp;</span>
          <span className="transition-all duration-500 ease-in-out text-sky-500 animate-fade-in-out">
            {words[currentWord]}
          </span>
        </h2>
      </div>

     
      <div className="absolute bottom-0 left-0 right-0 bg-transparent text-white px-4 py-4 md:px-6 md:py-6">
        <div className="flex flex-col items-center space-y-4">
          <h4 className="text-lg md:text-2xl lg:text-3xl font-thin mb-4">
            Utilize Effective Learning to Reach Your Potential!
          </h4>

          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-3 px-4 rounded-lg bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <AiOutlineSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
          </div>

          <div className="flex items-center space-x-2 mt-4">
            <span className="text-white text-lg">Explore our more useful Products</span>
            <FaHeart className="text-lg text-white" />
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <img src={logo1} alt="logo 1" className="h-8 md:h-12 w-auto" />
            <img src={logo2} alt="logo 2" className="h-8 md:h-10 w-auto" />
            <img src={logo3} alt="logo 3" className="h-10 md:h-16 w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
