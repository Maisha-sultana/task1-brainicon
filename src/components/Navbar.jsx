import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className=" bg-[#fd773e] w-full ">
     
      <div className="flex flex-col md:flex-row justify-between items-center py-2 px-6">
      
       
        <div className="hidden md:flex space-x-10">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-white" />
            <span className="text-white">education@lms.com</span>
          </div>
    
          <div className="hidden lg:flex items-center space-x-2">
            <FaMapMarkerAlt className="text-white" />
            <span className="text-white">4 Liberty Street, NY, U.S.A.</span>
          </div>
         
          <div className="hidden lg:flex items-center space-x-2">
            <FaClock className="text-white" />
            <span className="text-white">Mon - Fri 09 - 18</span>
          </div>
        </div>

      
        <div className="hidden md:flex space-x-15 ml-70 md:ml-auto">
          <a href="#enrollment" className="text-white hover:text-black">Enrollment</a>
          <a href="#approach" className="text-white hover:text-black">Our Approach</a>
          <a href="#stay" className="text-white hover:text-black">Stay Involved</a>
        </div>

       
        <div className="flex space-x-4 w-full md:w-auto justify-center md:justify-start">
          <a href="#" className="bg-[#e0a831] w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-amber-700">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-[#f4b931] w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-amber-700">
            <FaTwitter />
          </a>
          <a href="#" className="bg-[#f4b931] w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-amber-700">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;