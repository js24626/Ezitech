import React from 'react';
import logo5 from '../assets/Images/logo5.png';
import logo7 from '../assets/Images/logo7.png';
import logo8 from '../assets/Images/logo8.png';

// Additional logos (Replace with actual imports of your logos)
import Ai from '../assets/Images/Ai.png';
import blockchain from '../assets/Images/blockchain.png';
import amazon from '../assets/Images/amazon.png';
import cyber from '../assets/Images/cyber.png';
import dev from '../assets/Images/dev.png';
import des from '../assets/Images/des.png';
import game from '../assets/Images/game.png';
import arch from '../assets/Images/arch.png';
import ios from '../assets/Images/ios.png';
import Mar from '../assets/Images/Mar.png';
import Ed from '../assets/Images/Ed.png';
import anim from '../assets/Images/anim.png';

const How = () => {
  return (
    <div className="relative w-full h-auto flex flex-col items-center justify-center py-16 bg-gray-50">
      {/* Section Title */}
      <h1 className="absolute top-14 text-center text-zinc-700 left-1/2 transform -translate-x-1/2 text-3xl md:text-4xl font-bold tracking-tight mb-16">
  How It Works?
</h1>


      {/* Flex container for the three logos at the top */}
      <div className="absolute top-36 flex items-center justify-between w-full px-6 lg:px-20 space-x-6">
  <img
    src={logo5}
    alt="Logo 5"
    className="h-36 w-auto lg:h-52 xl:h-64 object-contain "
  />
  <img
    src={logo7}
    alt="Logo 7"
    className="h-36 w-auto lg:h-52 xl:h-64 object-contain  "
  />
  <img
    src={logo8}
    alt="Logo 8"
    className="h-36 w-auto lg:h-52 xl:h-64 object-contain "
  />
</div>


      {/* Flex container for the 12 logos in two rows */}
      <div className="mt-80 lg:mt-96 grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-6 w-full px-6 lg:px-20">
        {/* Logos with hover effect, responsive sizes, and text labels */}
        {[
          { logo: Ai, label: "ML & AI" },
          { logo: blockchain, label: "Block Chain" },
          { logo: amazon, label: "Amazon " },
          { logo: cyber, label: "Cyber Security" },
          { logo: dev, label: "Development" },
          { logo: des, label: "Designing" },
          { logo: game, label: "Gaming" },
          { logo: arch, label: "Architecture" },
          { logo: ios, label: "iOS & AND" },
          { logo: Mar, label: "Marketing" },
          { logo: Ed, label: "3D" },
          { logo: anim, label: "Animation" }
        ].map((item, index) => (
          <div
            key={index}
            className="p-3 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center hover:scale-105 hover:-translate-y-3 transition-all duration-300"
          >
            <img
              src={item.logo}
              alt={`Logo ${index + 1}`}
              className="h-20 w-auto md:h-20  lg:h-24 object-contain"
            />
            <p className="mt-4 text-center font-bold text-sm md:text-base lg:text-sm  text-zinc-700">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default How;
