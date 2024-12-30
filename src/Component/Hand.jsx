import React from 'react';
import hand from '../assets/Images/Hand.png'; 
import App from '../assets/Images/App.jpg';
import play from '../assets/Images/play.png';

const Hand = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly p-2 lg:p-5">
    
    <div className="flex justify-center lg:justify-evenly mb-6 lg:mb-0">
      <img
        src={hand}
        alt="hand"
        className="w-64 h-auto lg:w-96 lg:mr-5"
      />
    </div>
  

      
      <div className="text-center lg:text-left lg:text-5xl font-bold">
        <div className="text-black text-3xl lg:text-5xl">
          Learning <span className="text-blue-500 font-bold text-3xl lg:text-5xl">anytime</span>
        </div>
        <div className="text-black font-bold text-3xl lg:text-5xl mt-3 lg:mt-6">
          from anywhere
        </div>

        
        <div className="mt-4 lg:mt-6 text-sm lg:text-lg text-black font-thin text-left px-4 lg:px-0">
          <p>Increase the mobility level with Eziline Technologies LMS</p>
          <p>Take your courses in your pocket and access them</p>
          <p>whenever you want without any limits. Make your learning</p>
          <p>more engaging and productive using a modern LMS app.</p>
        </div>

        
        <div className="flex flex-col lg:flex-row justify-center items-center mt-4 space-y-4 lg:space-y-0 lg:space-x-4">
         
          <button onClick={() => console.log("Image 1 clicked")}>
            <img
              src={App}
              alt="Image 1"
              className="w-32 lg:w-40 h-12 rounded-lg object-cover"
            />
          </button>
          <button onClick={() => console.log("Image 2 clicked")}>
            <img
              src={play}
              alt="Image 2"
              className="w-30 h-40 object-cover"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hand;
