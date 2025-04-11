import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bg from '../assets/images/personal.jpg';
import img1 from '../assets/images/4ruc9yu5.png';
import img2 from '../assets/images/jg9n8d9e.png';
import img3 from '../assets/images/xnuf09un.png';

const images = [img1, img2, img3];

const PersonalFitness: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getPosition = (index: number) => {
    const diff = index - current;
    if (diff === -2 || diff === 1) return 1;
    if (diff === 2 || diff === -1) return -1;
    if (diff === 0) return 0;
    return 2;
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex flex-col lg:flex-row px-6 lg:px-10 pt-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0" />

      {/* Header */}
      <h1 className="absolute top-6 left-6 lg:left-10 z-10 text-3xl sm:text-4xl lg:text-6xl font-bold text-[#EB7210] font-[Orbitron] w-[90%] sm:w-[80%] lg:w-[680px]">
        Your Personalized <span className="text-white">Fitness</span> Hub
      </h1>

      {/* Left Content */}
      <div className="relative z-10 w-full lg:w-[44%] flex flex-col justify-around text-white font-[Orbitron] pt-32 pb-10 lg:pb-16 pr-4 lg:pr-8">
        {/* Middle Text */}
        <div className="space-y-6 text-sm sm:text-base lg:text-lg max-w-lg">
          <p>
            Real time personalized workout routines tailored to your goals and preferences, delivered to your app.
          </p>
          <p>
            Track your fitness journey with detailed analytics, goal setting, and achievements.
          </p>
          <p>
            AI-powered diet plans tailored to your goals, helping you stay on track and reach your best self.
          </p>
        </div>

        {/* Button */}
        <Link
          to="/join"
          className="mt-10 lg:mt-0 w-fit relative overflow-hidden group text-white bg-[#EB7210] px-8 py-4 rounded-2xl text-base sm:text-lg md:text-xl font-semibold transition-all duration-300"
        >
          Get Started
          <span className="absolute top-0 -left-5 w-[10px] h-[100px] bg-white transform -skew-x-12 opacity-80 transition-all duration-500 group-hover:translate-x-[240px] group-hover:opacity-100" />
        </Link>
      </div>

      {/* Right Carousel */}
      <div className="relative z-10 w-full lg:w-[56%] flex items-center justify-center mt-10 lg:mt-0">
        <div className="relative h-[70vh] sm:h-[80vh] w-[90%] sm:w-[70%] overflow-hidden rounded-2xl shadow-2xl flex items-center justify-center">
          {images.map((img, index) => {
            const pos = getPosition(index);
            if (Math.abs(pos) > 1) return null;

            return (
              <motion.img
                key={index}
                src={img}
                className="absolute w-[80%] h-[60%] object-contain rounded-xl shadow-xl"
                animate={{
                  y: pos * 160,
                  scale: pos === 0 ? 1.05 : 0.9,
                  opacity: pos === 0 ? 1 : 0.3,
                  zIndex: pos === 0 ? 2 : 1,
                }}
                transition={{
                  duration: 1.1,
                  ease: [0.45, 0, 0.2, 1],
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PersonalFitness;