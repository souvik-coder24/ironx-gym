import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUtensils,
  FaDumbbell,
  FaHeartbeat,
  FaBrain,
  FaAppleAlt,
  FaRunning,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/images/body.jpg";
import img2 from "../assets/images/nutrition.jpg";
import img3 from "../assets/images/health.jpg";
import img4 from "../assets/images/diet.jpg";

const benefits = [
  {
    icon: <FaUtensils size={30} className="text-[#EB7210]" />,
    title: "AI-Driven Personal Diet",
    description:
      "Customized meal plans to fuel your body with optimal nutrition.",
    extra:
      "Crafted to align with your goals and preferences using smart algorithms.",
  },
  {
    icon: <FaAppleAlt size={30} className="text-[#EB7210]" />,
    title: "Smart Nutrition Tracking",
    description:
      "Track macros and micronutrients with intelligent suggestions.",
    extra: "Get alerts, tips, and progress feedback in real-time.",
  },
  {
    icon: <FaBrain size={30} className="text-[#EB7210]" />,
    title: "Mind-Body Sync",
    description:
      "Sync your physical goals with mental clarity strategies.",
    extra: "Boost mental focus while improving physical performance.",
  },
  {
    icon: <FaDumbbell size={30} className="text-[#EB7210]" />,
    title: "AI-Driven Personal Training",
    description:
      "Workouts tailored to your fitness level, powered by AI.",
    extra:
      "Intelligent updates keep your routine challenging and safe.",
  },
  {
    icon: <FaRunning size={30} className="text-[#EB7210]" />,
    title: "Progressive Training Plans",
    description:
      "Programs that evolve with your performance and feedback.",
    extra: "Stay ahead with adaptive exercises and training goals.",
  },
  {
    icon: <FaHeartbeat size={30} className="text-[#EB7210]" />,
    title: "Holistic Health Approach",
    description:
      "Balance workouts, recovery, and diet for total wellness.",
    extra: "A well-rounded system promoting longevity and vitality.",
  },
];

const Benefits: React.FC = () => {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h2
          className="text-4xl md:text-5xl font-bold text-white font-orbitron uppercase"
          data-aos="fade-up"
        >
          Discover Benefits of <span className="text-[#EB7210]">IronX</span>
        </h2>
        <p
          className="mt-4 text-gray-300 max-w-2xl mx-auto text-base md:text-lg font-light"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Empower your fitness journey with AI-driven nutrition, custom workouts, and a smarter path to health.
        </p>
        <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
          <Link
            to="/join"
            className="inline-block text-white bg-[#EB7210] px-8 py-4 rounded-2xl text-xl font-orbitron font-semibold relative overflow-hidden group transition-all duration-300"
          >
            Get Started
            <span className="absolute top-0 -left-5 w-[10px] h-[100px] bg-white transform -skew-x-12 opacity-80 transition-all duration-500 group-hover:translate-x-[240px] group-hover:opacity-100" />
          </Link>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-center">
        {/* Left Column */}
        <div className="flex flex-col items-center space-y-8">
          {benefits.slice(0, 3).map((benefit, i) => (
            <div
              key={i}
              className="h-[300px] w-full max-w-[320px] rounded-2xl border border-white/30 bg-white/5 backdrop-blur-md p-6 text-white shadow-lg hover:scale-105 hover:shadow-[0_0_20px_#eb7210] transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={`${i * 100}`}
            >
              {benefit.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-300">{benefit.description}</p>
              <p className="text-xs text-gray-400 mt-2">{benefit.extra}</p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div
          className="hidden md:flex order-first md:order-none justify-center items-center h-[300px]"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className="relative w-[220px] md:w-[260px] lg:w-[380px] h-[650px] rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[currentIndex]}
                src={images[currentIndex]}
                alt="AI Fitness"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute w-full h-full object-cover rounded-2xl"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center space-y-8">
          {benefits.slice(3).map((benefit, i) => (
            <div
              key={i + 3}
              className="h-[300px] w-full max-w-[320px] rounded-2xl border border-white/30 bg-white/5 backdrop-blur-md p-6 text-white shadow-lg hover:scale-105 hover:shadow-[0_0_20px_#eb7210] transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={`${(i + 3) * 100}`}
            >
              {benefit.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-300">{benefit.description}</p>
              <p className="text-xs text-gray-400 mt-2">{benefit.extra}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;