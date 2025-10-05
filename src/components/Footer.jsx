import React from 'react';
import { FaPhoneAlt, FaAngleRight, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'; 


import BlueCharacter from '../assets/image copy 3.png'; 
import PinkPopsicle from '../assets/image copy 7.png'; 
import BlueFlower from '../assets/image copy 4.png';
import RecentNews1 from '../assets/image copy 5.png'; 
import RecentNews2 from '../assets/image copy 6.png';
import BabyKidsLogo from '../assets/f7273ab4-f4d3-4ab3-b16c-ccf7761bb684.png'; 

const Footer = () => {
  return (

    <section className="bg-[#fcf8f0] py-10 sm:py-16 px-4 md:px-8 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
       
        <div className="flex flex-col lg:flex-row items-start justify-between mb-10 sm:mb-16 relative">
          

          <div 
            className="absolute top-0 left-0 w-[200px] h-[100px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-300 to-transparent bg-repeat opacity-20 hidden md:block" // Hidden on mobile
            style={{ 
                backgroundImage: `radial-gradient(circle at 50% 50%, #d1d5db 1px, transparent 1px)`, 
                backgroundSize: '10px 10px',
                width: '300px', 
                height: '150px',
                top: '60px',
                left: '-20px',
                zIndex: 0
            }}
          ></div>

          <div className="w-full lg:w-3/5 relative z-10 pr-0 lg:pr-4"> 
      
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#ff6931] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Learning in Action
            </h1>
            
            <p className="text-base sm:text-lg text-gray-700 mb-8">
              Together, we can nurture growth and build confidence
            </p>
          </div>

        
          <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-end relative mt-6 lg:mt-0 z-10">
    
             <img 
              src={BlueCharacter} 
              alt="Blue Cartoon Character" 
              className="w-32 h-auto absolute left-[-60px] top-[-20px] mt-5 lg:left-[-120px] lg:top-[-80px] z-20 hidden md:block" 
            />

            <div className="flex items-center space-x-2 w-full max-w-sm mx-auto lg:ml-auto mt-0 lg:mt-0"> 
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 sm:px-6 sm:py-4 border-2 border-gray-300 rounded-lg flex-grow focus:outline-none focus:border-[#ff6931]"
              />
              <button
                className="bg-[#87c4d8] hover:bg-[#68a4b8] text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg transition duration-300 shadow-md text-sm"
              >
                SEND
              </button>
            </div>

            <img 
              src={PinkPopsicle} 
              alt="Pink Popsicle" 
              className="absolute top-[-60px] right-[-90px] w-20 h-auto z-30 hidden md:block" 
            />
            
        
            <div 
                className="absolute w-40 h-20 top-[-20px] right-[100px] opacity-20 hidden md:block" 
            ></div>
            
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
          
    
          <div className="relative">
             
            <img
                src={BlueFlower}
                alt="Blue Flower"
                className="absolute bottom-[-70px] left-[180px] w-16 z-10 hidden sm:block" 
            />
            <h2 className="text-xl font-bold mb-4 text-black">School :</h2>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              We provide immediate and long-term support to foster your child's 
              development and well-being, offering personalized learning, care routines.
            </p>
            <div className="flex items-center mt-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e8f7e9] border border-[#a4d7a8]"> 
                <FaPhoneAlt className="text-[#62ab55] text-lg" /> 
              </div>
              <div className="ml-3">
                <span className="block text-gray-700 text-sm">Call Us</span>
                <span className="block text-black font-semibold text-base">+1 233 587 36</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-black">Info :</h2>
            <ul className="space-y-3">
              {[
                "Learning Activities", "Motor Skills Development", 
                "Creative Expression", "Social & Group Play", 
                "Family Support Programs"
              ].map((item) => (
                <li key={item} className="text-gray-600 hover:text-[#ff6931] transition text-sm flex items-center">
                  <FaAngleRight className="mr-2 text-[#ff6931] text-xs" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h2 className="text-xl font-bold mb-4 text-black">Contacts :</h2>
            <ul className="space-y-3">
              {[
                "General Inquiries", "info@babykids.org", 
                "Enrollment & Visits", "edu@babykids.com",
                "Educational Coordinator"
              ].map((item) => (
                <li key={item} className="text-gray-600 hover:text-[#ff6931] transition text-sm flex items-center">
                  <FaAngleRight className="mr-2 text-[#ff6931] text-xs" />
                  <a href={item.includes('@') ? `mailto:${item}` : '#'} className="hover:text-[#ff6931]">
                      {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-black">Recent News :</h2>
            <ul className="space-y-6">
              
              
              <li className="flex items-start gap-3">
                <img 
                  src={RecentNews1} 
                  alt="News Image 1" 
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0" 
                />
                <div>
                  <p className="text-black font-semibold text-base">Shine Bright</p>
                  <p className="text-gray-600 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
              </li>
              
     
              <li className="flex items-start gap-3">
                <img 
                  src={RecentNews2} 
                  alt="News Image 2" 
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0" 
                />
                <div>
                  <p className="text-black font-semibold text-base">Little Smiles</p>
                  <p className="text-gray-600 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

     
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 mt-8 sm:pt-10 sm:mt-10 border-t border-gray-200 text-sm">
            
         
            <div className="flex items-center gap-2 mb-4 md:mb-0 mx-auto md:mx-0">
                <img src={BabyKidsLogo} alt="Baby Kids Logo" className="h-6" /> 
            </div>
        
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-gray-600 flex-grow px-0 md:px-8"> 
                <a href="#" className="hover:text-[#ff6931] transition">Partnerships</a>
                <span className="text-[#ff6931] font-bold">&bull;</span>
                <a href="#" className="hover:text-[#ff6931] transition">Customer Support</a>
                <span className="text-[#ff6931] font-bold">&bull;</span>
                <a href="#" className="hover:text-[#ff6931] transition">Privacy Policy</a>
            </div>

            <div className="flex items-center gap-4 mt-4 md:mt-0 mx-auto md:ml-auto">
                
                
                <div className="flex gap-2">
                    <a href="#" className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-200 hover:bg-[#a975bf] transition text-gray-600 hover:text-white">
                        <FaFacebookF className="text-xs" />
                    </a>
                    <a href="#" className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-200 hover:bg-[#a975bf] transition text-gray-600 hover:text-white">
                        <FaTwitter className="text-xs" />
                    </a>
                    <a href="#" className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-200 hover:bg-[#a975bf] transition text-gray-600 hover:text-white">
                        <FaYoutube className="text-xs" />
                    </a>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;