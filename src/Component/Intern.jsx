import React from 'react';
import { FaMapMarkerAlt, FaBriefcase, FaUser } from 'react-icons/fa'; 

const SectionContainer = ({ title, employment, location, jobType }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl">
      <div className="bg-blue-900 text-white p-6 md:p-10 rounded-t-lg">
        <h2 className="text-xl md:text-2xl font-bold text-left">{title}</h2>

        
        <hr className="my-4 border-gray-300" />

        <h2 className="text-lg md:text-xl font-thin text-left">Ezitech Institute</h2>
      </div>

      <div className="p-4 md:p-6 text-left">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <FaUser className="text-blue-900" />
            <span>Employment -</span>
            <span className="bg-gray-200 px-2 py-1 rounded-md">{employment}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-blue-900" />
            <span>Location -</span>
            <span className="bg-gray-200 px-2 py-1 rounded-md">{location}</span>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <FaBriefcase className="text-blue-900" />
              <span>Job Type -</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {jobType.map((type, idx) => (
                <span key={idx} className="bg-gray-200 px-2 py-1 rounded-md">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="bg-blue-900 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-sky-500">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

const Intern = () => {
  return (
    <div className="bg-white py-10">
      <div className="text-center mb-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-8">
          Perfect Internship's For You
        </h1>
      </div>
      <div className="container mx-auto px-4 sm:px-4 lg:px-2 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <SectionContainer
            title="HTML/CSS JAVASCRIPT"
            employment="Hybrid"
            location="Rawalpindi"
            jobType={['Full Time', 'Part Time']}
          />
         
          <SectionContainer
            title="GRAPHIC DESIGNING"
            employment="Hybrid"
            location="Rawalpindi"
            jobType={['Full Time', 'Part Time']}
          />
         
          <SectionContainer
            title="DIGITAL MARKETING"
            employment="Hybrid"
            location="Rawalpindi"
            jobType={['Full Time', 'Part Time']}
          />
         
          <SectionContainer
            title="FLUTTER DEVELOPMENT"
            employment="Hybrid"
            location="Rawalpindi"
            jobType={['Full Time', 'Part Time']}
          />
          
          <SectionContainer
            title="Machine Learning"
            employment="Hybrid"
            location="Rawalpindi"
            jobType={['Part Time', 'Part Time']}
          />
         
          <SectionContainer
            title="MERN DEVELOPMENT"
            employment="Hybrid"
            location="Rawalpindi"
            jobType={['Full Time', 'Part Time']}
          />
        </div>
        
        <div className="flex justify-center mt-8">
          <button className="bg-blue-900 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-sky-500">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intern;
