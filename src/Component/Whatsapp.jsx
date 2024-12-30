
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsApp = () => {
  return (
    <div className="fixed bottom-5 left-5 z-50 flex items-center space-x-3">
     
      <div
        className="bg-blue-900 p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-900"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-white text-3xl" />
      </div>

     
      <div className="bg-white text-zinc-500  py-1 px-4 rounded-md shadow-md border">
        Need Help?<span className='font-bold'> Chat with us</span> 
      </div>
    </div>
  );
};

export default WhatsApp;
