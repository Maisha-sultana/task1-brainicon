import React, { useState } from 'react';
import { FaChevronDown, FaBars, FaPhoneAlt, FaArrowRight } from 'react-icons/fa'; // Added FaBars for mobile icon
import Logo from '../assets/f7273ab4-f4d3-4ab3-b16c-ccf7761bb684.png'; 
import Pic from '../assets/imgi_60_ico-11-100x100 (1).png'


const Header = () => {
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 


  const STICKY_POSITION_CLASS = "top-0"; 

  return (
    <header className={`bg-white text-black w-full sticky ${STICKY_POSITION_CLASS} z-40 shadow-lg`}>
    
      <div className="flex justify-between items-center px-4"> 
      
        <div className="flex items-center px-1 py-2">
          <img src={Logo} alt="Baby Kids Logo" className="h-8 sm:h-10 lg:h-12 w-auto" /> 
        </div>
       
        <nav className="relative hidden lg:block ml-0 lg:ml-60"> 
          <ul className="flex space-x-4 lg:space-x-8"> 
         
            <li className="relative">
              <button
                className="flex items-center transition-colors duration-300 hover:text-[#ff6931] font-semibold py-4"
                onClick={() => setIsHomeOpen(!isHomeOpen)}
              >
                Home 
                <FaChevronDown className={`ml-1 transition-transform duration-300 ${isHomeOpen ? "rotate-180" : ""}`} />
              </button>
              <ul className={`
                absolute left-0 mt-2 bg-white text-black shadow-lg rounded-lg w-40 z-50
                transform transition-all duration-300 ease-in-out
                ${isHomeOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}
              `}>
                <li><a href="#home1" className="block px-4 py-2 hover:bg-gray-100">Home 1</a></li>
                <li><a href="#home2" className="block px-4 py-2 hover:bg-gray-100">Home 2</a></li>
                <li><a href="#home3" className="block px-4 py-2 hover:bg-gray-100">Home 3</a></li>
              </ul>
            </li>

            <li className="relative">
              <button
                className="flex items-center transition-colors duration-300 hover:text-[#ff6931] font-semibold py-4"
                onClick={() => setIsAboutOpen(!isAboutOpen)}
              >
                About 
                <FaChevronDown className={`ml-1 transition-transform duration-300 ${isAboutOpen ? "rotate-180" : ""}`} />
              </button>
              <ul className={`
                absolute left-0 mt-2 bg-white text-black shadow-lg rounded-lg w-40 z-50
                transform transition-all duration-300 ease-in-out
                ${isAboutOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}
              `}>
                <li><a href="#about1" className="block px-4 py-2 hover:bg-gray-100">About 1</a></li>
                <li><a href="#about2" className="block px-4 py-2 hover:bg-gray-100">About 2</a></li>
                <li><a href="#about3" className="block px-4 py-2 hover:bg-gray-100">About 3</a></li>
              </ul>
            </li>
            
            <li className="relative">
              <button
                className="flex items-center transition-colors duration-300 hover:text-[#ff6931] font-semibold py-4"
                onClick={() => setIsPagesOpen(!isPagesOpen)}
              >
                Pages 
                <FaChevronDown className={`ml-1 transition-transform duration-300 ${isPagesOpen ? "rotate-180" : ""}`} />
              </button>
              <ul className={`
                absolute left-0 mt-2 bg-white text-black shadow-lg rounded-lg w-40 z-50
                transform transition-all duration-300 ease-in-out
                ${isPagesOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}
              `}>
                <li><a href="#page1" className="block px-4 py-2 hover:bg-gray-100">Page 1</a></li>
                <li><a href="#page2" className="block px-4 py-2 hover:bg-gray-100">Page 2</a></li>
                <li><a href="#page3" className="block px-4 py-2 hover:bg-gray-100">Page 3</a></li>
              </ul>
            </li>
            
            <li className="relative">
              <button
                className="flex items-center transition-colors duration-300 hover:text-[#ff6931] font-semibold py-4"
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
              >
                Courses 
                <FaChevronDown className={`ml-1 transition-transform duration-300 ${isCoursesOpen ? "rotate-180" : ""}`} />
              </button>
              <ul className={`
                absolute left-0 mt-2 bg-white text-black shadow-lg rounded-lg w-40 z-50
                transform transition-all duration-300 ease-in-out
                ${isCoursesOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}
              `}>
                <li><a href="#course1" className="block px-4 py-2 hover:bg-gray-100">Course 1</a></li>
                <li><a href="#course2" className="block px-4 py-2 hover:bg-gray-100">Course 2</a></li>
                <li><a href="#course3" className="block px-4 py-2 hover:bg-gray-100">Course 3</a></li>
              </ul>
            </li>

            <li className="relative">
              <button
                className="flex items-center transition-colors duration-300 hover:text-[#ff6931] font-semibold py-4"
                onClick={() => setIsBlogOpen(!isBlogOpen)}
              >
                Blog 
                <FaChevronDown className={`ml-1 transition-transform duration-300 ${isBlogOpen ? "rotate-180" : ""}`} />
              </button>
              <ul className={`
                absolute left-0 mt-2 bg-white text-black shadow-lg rounded-lg w-40 z-50
                transform transition-all duration-300 ease-in-out
                ${isBlogOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}
              `}>
                <li><a href="#blog1" className="block px-4 py-2 hover:bg-gray-100">Blog 1</a></li>
                <li><a href="#blog2" className="block px-4 py-2 hover:bg-gray-100">Blog 2</a></li>
                <li><a href="#blog3" className="block px-4 py-2 hover:bg-gray-100">Blog 3</a></li>
              </ul>
            </li>

            <li className="relative">
              <button
                className="flex items-center transition-colors duration-300 hover:text-[#ff6931] font-semibold py-4"
                onClick={() => setIsContactOpen(!isContactOpen)}
              >
                Contact 
                <FaChevronDown className={`ml-1 transition-transform duration-300 ${isContactOpen ? "rotate-180" : ""}`} />
              </button>
              <ul className={`
                absolute left-0 mt-2 bg-white text-black shadow-lg rounded-lg w-40 z-50
                transform transition-all duration-300 ease-in-out
                ${isContactOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}
              `}>
                <li><a href="#contact1" className="block px-4 py-2 hover:bg-gray-100">Contact 1</a></li>
                <li><a href="#contact2" className="block px-4 py-2 hover:bg-gray-100">Contact 2</a></li>
                <li><a href="#contact3" className="block px-4 py-2 hover:bg-gray-100">Contact 3</a></li>
              </ul>
            </li>
          </ul>
        </nav>

  
      <div className="bg-[#f4b931] w-120 h-20 items-center justify-center hidden lg:flex">
        <div className="flex items-center space-x-3">
          <button className="bg-[#ff6931] hover:bg-[#c94a1c] text-white flex items-center px-4 py-2 w-40 justify-center rounded-3xl font-bold transition duration-200">
            <FaArrowRight className="mr-2" /> Courses
          </button>
          <img src={Pic} alt="Pic" className="h-10 w-auto" />
        </div>

        <div className="flex flex-col items-start justify-center text-white ml-5">
          <h2 className="font-bold text-sm md:text-base">Call Us</h2>
          <p className="text-sm md:text-base">+1 234 5678</p>
        </div>
      </div>
      
      
      <button 
        className="text-gray-800 p-2 lg:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <FaBars className="w-6 h-6" />
      </button>

      </div>
    </header>
  );
};

export default Header;