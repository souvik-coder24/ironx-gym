import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import svg from "../assets/images/trainer-removebg-preview.svg";

const servicesData = [
  {
    title: "TRAINING",
    description:
      "Get customized workout plans tailored to your fitness level and goals.",
    link: "/train",
  },
  {
    title: "DIETING",
    description:
      "Receive expert nutrition advice and meal plans designed for optimal results.",
    link: "/diet",
  },
];

const Services: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Memoized random dot positions with useMemo
  const floatingDots = useMemo(
    () =>
      [...Array(50)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: `${1 + Math.random() * 2}s`,
      })),
    []
  );

  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen space-y-6 px-4 lg:px-12"
      data-aos="fade-up"
    >
      {/* Header Section */}
      <div className="text-center max-w-4xl">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#EB7210] font-orbitron leading-tight mt-4 uppercase tracking-wide">
          Future <span className="text-white">Fitness</span> with AI-Driven
          Training & Nutrition
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-300 font-light">
          Unlock the next level of personalized fitness with revolutionary AI
          coaching, intelligent workout planning, and advanced nutrition
          strategies designed to optimize your performance and well-being.
        </p>
      </div>

      {/* Train & Diet Section */}
      <div className="relative w-full flex flex-col md:flex-row justify-center gap-6 py-10 md:py-16">
        {/* Floating Dots in Background */}
        <div className="absolute inset-0 overflow-hidden">
          {floatingDots.map((dot, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-gray-400 rounded-full opacity-50 ${
                i % 2 === 0 ? "animate-floatUp" : "animate-floatDown"
              }`}
              style={{
                top: dot.top,
                left: dot.left,
                animationDuration: dot.duration,
              }}
            />
          ))}
        </div>

        {/* Service Boxes */}
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="relative flex-1 p-6 md:p-8 rounded-3xl shadow-lg text-center w-full md:w-[300px] lg:w-[350px] min-h-[400px] flex flex-col items-center justify-center mx-auto overflow-hidden bg-transparent border border-gray-700"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Icon Box */}
            <div className="relative flex w-20 h-20 md:w-24 md:h-24 items-center justify-center bg-[#EB7210] rounded-full mb-4 md:mb-6 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <img
                src={svg}
                alt="Service Icon"
                className="w-16 h-16 md:w-20 md:h-20"
                loading="lazy"
              />
            </div>

            {/* Title & Description */}
            <h2 className="text-xl md:text-2xl font-semibold text-[#EB7210] mt-2">
              {service.title}
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-400">
              {service.description}
            </p>

            {/* "Start" Button */}
            <Link
              to={service.link}
              className="mt-4 text-white bg-[#EB7210] px-13 py-2 rounded-2xl text-xl font-orbitron relative overflow-hidden group transition-all duration-300"
            >
              Start
              <span className="absolute top-0 -left-5 w-[8px] h-[80px] bg-white transform -skew-x-16 opacity-80 transition-all duration-500 group-hover:translate-x-[180px] group-hover:opacity-100" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;