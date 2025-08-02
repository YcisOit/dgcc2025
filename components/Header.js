'use client';
import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center bg-white shadow-md">
      
      {/* Top Section with Logo and Text */}
      <div className="w-full flex justify-center items-center py-8 px-6">
        <div className="flex justify-between items-center w-full max-w-7xl gap-6">
          
          {/* Left Logo */}
          <img 
            src="/founder-left.png" 
            alt="Founder" 
            className="w-28 h-28 md:w-32 md:h-32 object-contain"
          />

          {/* College Text */}
          <div className="flex flex-col items-center text-center px-6">
            <p className="text-lg md:text-xl text-black font-semibold mb-1">
              Rayat Shikshan Sansthas
            </p>
            <h1 className="text-2xl md:text-3xl font-extrabold text-black leading-tight">
              Dhananjayrao Gadgil College of Commerce, Satara
            </h1>
            <h2 className="text-lg md:text-2xl font-semibold text-black mt-2">
              A Constituent College of Karmaveer Bhaurao Patil University, Satara
            </h2>
            <p className="text-base md:text-md font-semibold text-black mt-2">
              An Autonomous College with Potential of Excellence
            </p>
            <p className="text-base md:text-md font-semibold text-black">
              Reaccredited by NAAC with “A++” Grade
            </p>
          </div>

          {/* Right Logo */}
          <img 
            src="/founder-right.png" 
            alt="Spiritual Leader" 
            className="w-28 h-28 md:w-32 md:h-32 object-contain"
          />

        </div>
      </div>
      
    </header>
  );
};

export default Header;
