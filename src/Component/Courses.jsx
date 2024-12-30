import React from 'react';
import js from '../assets/Images/Jlogo.png';
import re from '../assets/Images/Rlogo.png';
import fi from '../assets/Images/flogo.png';
import no from '../assets/Images/Nlogo.jpg';
import ads from '../assets/Images/ads.png';
import seo from '../assets/Images/Slogo.png';
import dm from '../assets/Images/Dlogo.jpg';
import li from '../assets/Images/Lilogo.jpg';

const courseBundles = [
  { title: 'The Complete JavaScript Course 2024!', price: 'PKR7,600', logo: js },
  { title: 'The Complete Guide to React', price: 'PKR8,000', logo: re },
  { title: 'Sell Fiverr Gigs Like The Top', price: 'PKR4,500', logo: fi },
  { title: 'The Complete BootCamp 2024', price: 'PKR13,000', logo: no },
  { title: 'YouTube ads and Google ads', price: 'PKR5,000', logo: ads },
  { title: 'Search Engine Optimization(SEO)', price: 'PKR5,000', logo: seo },
  { title: 'Digital Marketing', price: 'PKR6,000', logo: dm },
  { title: 'Linkdin Oreintations', price: 'PKR6,500', logo: li },
];

const Courses = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-center pt-20 px-4 md:px-8">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
        Limited-Time Summer Course Bundles!
      </h1>
      <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-8">
        Note: All these bundles have recorded lectures
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        
        
        <div className="bg-white p-4 md:p-8 shadow-lg rounded-lg flex flex-col transition-transform duration-300 hover:scale-105 hover:translate-y-[-8px]">
          <div className="bg-blue-900 text-white p-4 md:p-8">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
              Web Development Course with Industrial Projects
            </h2>
            <div className="text-center text-lg md:text-xl mt-2 mb-4">
              4 Courses
            </div>
          </div>
          <div className="flex flex-col space-y-4 md:space-y-6">
            {courseBundles.slice(0, 4).map((course, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
                <div className="flex-shrink-0">
                  <img
                    src={course.logo}
                    alt="Course Logo"
                    className="w-10 h-10 md:w-12 md:h-12"
                  />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-base md:text-lg lg:text-xl text-zinc-800 mb-1">
                    {course.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg font-bold text-zinc-400 text-right">
                    {course.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        
        <div className="bg-white p-4 md:p-8 shadow-lg rounded-lg flex flex-col transition-transform duration-300 hover:scale-105 hover:translate-y-[-8px]">
          <div className="bg-blue-900 text-white p-4 md:p-8">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
              Digital Marketing Mastery Learn from the Best
            </h2>
            <div className="text-center text-lg md:text-xl mt-2 mb-4">
              4 Courses
            </div>
          </div>
          <div className="flex flex-col space-y-4 md:space-y-6">
            {courseBundles.slice(4, 8).map((course, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
                <div className="flex-shrink-0">
                  <img
                    src={course.logo}
                    alt="Course Logo"
                    className="w-10 h-10 md:w-12 md:h-12"
                  />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-base md:text-lg lg:text-xl text-zinc-800 mb-1">
                    {course.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg font-bold text-zinc-400 text-right">
                    {course.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Courses;
