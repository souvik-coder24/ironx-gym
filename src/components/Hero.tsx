import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroImage from '../assets/images/Hero-IronX.jpg';
import user1 from '../assets/user/user1.avif';
import user2 from '../assets/user/user2.avif';
import user3 from '../assets/user/user3.avif';

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen w-full overflow-hidden">
      <img
        decoding="async"
        sizes="100vw"
        srcSet={`${HeroImage}?scale-down-to=512 512w, 
                ${HeroImage}?scale-down-to=1024 1024w, 
                ${HeroImage}?scale-down-to=2048 2048w, 
                ${HeroImage}?scale-down-to=4096 4096w, 
                ${HeroImage} 5200w`}
        src={HeroImage}
        alt="IronX Fitness Background"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/85 to-black opacity-90"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-white mt-28 text-center flex flex-col items-center px-6 space-y-8">
        {/* Users Section */}
        <div
          className="flex items-center justify-between bg-black py-2 px-4 rounded-full w-72 shadow-lg"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <div className="flex items-center space-x-[-10px]">
            {[user1, user2, user3].map((user, id) => (
              <img
                key={id}
                src={user}
                alt={`User Avatar ${id + 1}`}
                className={`w-7 h-7 rounded-full object-cover border border-white ${id > 0 ? `z-${id * 20}` : ''}`}
              />
            ))}
          </div>
          <p className="text-sm font-semibold text-white">
            Trusted by 3+ million users
          </p>
        </div>

        {/* Main Caption */}
        <div className="space-y-4" data-aos="zoom-in" data-aos-delay="100">
          <h1 className="text-5xl lg:text-8xl max-w-6xl font-bold text-[#EB7210] font-orbitron leading-tight">
            Unleash Your Inner Strength
          </h1>
          <p className="text-md lg:text-lg font-medium max-w-[48rem] mx-auto text-[#96979C]">
            Unlock your full fitness potential with IronX. Effortlessly track your workouts, count reps, and monitor
            calories burned. Stay motivated and crush your fitness goals with personalized insights and progress
            tracking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;