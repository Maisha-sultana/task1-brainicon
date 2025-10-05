import React, { useState, useEffect } from 'react';
import Child from '../assets/image.png';
import TabletKids from '../assets/image copy.png';
import Swirl from '../assets/image copy 2.png';
import Doodle from '../assets/imgi_60_ico-11-100x100 (1).png';

const Hero = () => {

  const [currentWord, setCurrentWord] = useState('Start');
  const [time, setTime] = useState(0); 

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setCurrentWord(prevWord => (prevWord === 'Start' ? 'Learn' : 'Start'));
    }, 2000); 

    return () => clearInterval(wordTimer);
  }, []);

  useEffect(() => {
    const floatTimer = setInterval(() => {
      setTime(prevTime => prevTime + 0.05); 
    }, 30);

    return () => clearInterval(floatTimer);
  }, []);
  
  const blueBoxOffset = Math.sin(time) * 10; 
  
  const contactBoxOffset = Math.sin(time + 1.5) * 15; 
  

  const primaryOrange = 'bg-[#ff6931]';
  const yellowStatBox = 'bg-[#f3c837]';
  const contactRose = 'bg-[#ec7e74]';
  const skyBlueBox = 'bg-[#51c4e9]';

  return (
    <section className={`w-full ${primaryOrange} text-white flex flex-col lg:flex-row overflow-hidden font-funky relative`}>

      <div className="lg:w-[62.5%] w-full px-6 md:px-16 py-10 md:py-20 z-10 relative">
   
        <img
          src={Swirl}
          alt="Swirl Decoration"
          className="absolute top-5 left-10 w-24 h-24 z-20 opacity-10 hidden md:block" 
        />

        
        <div className="mb-4 pt-4 md:pt-10">
          <a href="#" className="inline-flex items-center gap-3 text-sm font-semibold p-2 rounded-full hover:bg-white/10 transition duration-300">
            <div className="bg-white rounded-full p-2">
              <svg className="w-4 h-4 text-[#ff6931]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 4l10 6-10 6V4z" />
              </svg>
            </div>
            <p className="text-white font-semibold">High Quality Standards</p>
          </a>
        </div>
        
        
        <h1 className="text-5xl sm:text-6xl md:text-[90px] font-extrabold leading-tight tracking-tight mb-8" style={{ fontFamily: 'var(--font-funky-bold)' }}>
          Play <span className="italic font-normal">&</span> 
          <span 
            key={currentWord} 
            className="inline-block transition-opacity duration-100 ease-in-out transform" 
            style={{ opacity: currentWord === 'Start' ? 1 : 0.6, transform: currentWord === 'Start' ? 'scale(1)' : 'scale(1.05)' }} 
          >
            {currentWord}
          </span>
          <br />
          Smart Start
        </h1>


        <div className="mt-8 md:mt-12 flex items-center gap-4 sm:gap-8 flex-wrap">
          
          <div className={`
                ${yellowStatBox} text-white px-5 py-6 rounded-2xl text-center w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]
                flex flex-col justify-center items-center shadow-lg relative 
                transition duration-300 hover:scale-[1.05]
                
          `}>
         
            <p className="text-4xl sm:text-5xl font-extrabold text-[#ff6931]">85 +</p>
            <p className="text-xs sm:text-sm mt-1 text-white font-semibold">Maintenance</p>
            <span className="absolute bottom-2 right-4 text-[#ff6931] text-xl font-bold">
                &gt; 
            </span>
          </div>

          
          <div className="text-white pt-2">
            <p className="text-3xl sm:text-4xl font-extrabold">5.7 k</p>
            <p className="text-xs sm:text-sm mt-1 font-normal text-white">Attention To Detail</p>
          </div>

    
          <div className="
            w-24 h-24 sm:w-[120px] sm:h-[120px] rounded-full overflow-hidden shadow-2xl z-20 
            lg:relative lg:right-0 lg:top-0 
          ">
            <img src={TabletKids} alt="Tablet Kids" className="object-cover w-full h-full" />
          </div>
        </div>
        
        
        <a 
            href="#" 
            className={`
                ${skyBlueBox} text-white px-3 py-2 rounded-xl z-30 text-xs text-center shadow-lg w-32 sm:w-40 font-semibold 
                // Repositioned for mobile/tablet to be more contained within the left column
                absolute top-4 right-4 sm:top-[20%] sm:right-10 
                transition-transform duration-100 
        `}
   
        style={{ transform: `translateY(${blueBoxOffset}px)` }}
        >
            <p className="text-sm">Support <br /> 5 Tips You <br />Should Know</p>
        </a>

        <img
          src={Doodle}
          alt="Doodle"
          className="absolute bottom-[-30px] right-4 w-32 sm:w-48 opacity-10 z-0 hidden sm:block"
        />
      </div>

      <div className="lg:w-[37.5%] w-full relative min-h-[350px] md:min-h-[500px] flex items-end">
        
 
        <img
          src={Child}
          alt="Smiling child"
          className="w-full h-full object-cover z-10 absolute top-0 left-0"
        />
        
        
        <a 
            href="tel:+1453593483" 
            className={`
                absolute bottom-10 left-1/2 -translate-x-1/2 ${contactRose} text-white px-6 py-4 rounded-xl z-20 shadow-xl text-center w-60 sm:w-[250px] font-semibold 
                transition-transform duration-200 
                // Adjusted positioning for mobile to keep it centered and visible
                lg:bottom-24 lg:left-10 lg:-translate-x-0
        `}
   
        style={{ transform: `translateX(${contactBoxOffset}px)` }}
        >
          <p className="font-bold text-base sm:text-lg">Contact Us</p>
          <p className="mt-1 text-lg sm:text-xl font-extrabold">+1 453 593 483</p>
        </a>
      </div>
    </section>
  );
};

export default Hero;