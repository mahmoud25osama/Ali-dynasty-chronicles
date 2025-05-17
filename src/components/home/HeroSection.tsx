import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../gallery/images/castle.png'

const HeroSection = () => {
  return (    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="pt-2 md:pt-5">
        <div className="hero relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mb-30">
          <div className="z-10 mt-8text-lg sm:text-lg md:text-xl py-20 lg:text-2xl xl:text-4xl text-royal-cream">
          <div className="mb-10 px-5 sm:px-10 ">
            
              <h1 className="son hero-title pt-5 font-naskh">
                أسرة
              <div className='py-5'>
                <span className='text-royal-blue '>محمد على باشا </span>
                </div>
              </h1>
              <p className="mt-4 font-naskh w-[85%] mx-auto text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
                اكتشف إرث العائلة التي شكلت مصر الحديثة
              </p>
            </div>
            <div className="flex flex-col md:pr-5 lg:pr-5 px-2 sm:flex-row gap-4">
              <Link 
                to="/family" 
                className="bg-royal-gold text-royal-blue font-bold py-4 px-10 text-lg md:text-xl rounded-lg hover:bg-royal-gold/90 transition text-center shadow-lg">
                شجرة العائلة
              </Link>
              <Link 
                to="/timeline" 
                className="hero-btn hero-btn-secondary py-4 px-10 text-lg md:text-xl rounded-lg shadow-lg">
                عرض الجدول الزمني
              </Link>
            </div>
          </div>
          <div className="hero-img pt-10 sm:pt-10 md:pt-24 lg:pt-20 xl:pt-10">
            <img 
              alt="أسرة محمد علي" 
              id="image" 
              src={img1} 
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default HeroSection;
