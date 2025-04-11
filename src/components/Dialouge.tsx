import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Dialouge: React.FC = () => {
  const [counters, setCounters] = useState({ count1: 0, count2: 0, count3: 0 });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const targets = { count1: 463, count2: 163, count3: 13 };
    const duration = 7000;
    const interval = 10;

    let progress = { count1: 0, count2: 0, count3: 0 };
    const increment = {
      count1: targets.count1 / (duration / interval),
      count2: targets.count2 / (duration / interval),
      count3: targets.count3 / (duration / interval),
    };

    const counter = setInterval(() => {
      progress.count1 += increment.count1;
      progress.count2 += increment.count2;
      progress.count3 += increment.count3;

      setCounters({
        count1: Math.floor(progress.count1),
        count2: Math.floor(progress.count2),
        count3: Math.floor(progress.count3),
      });

      if (
        progress.count1 >= targets.count1 &&
        progress.count2 >= targets.count2 &&
        progress.count3 >= targets.count3
      ) {
        setCounters(targets);
        clearInterval(counter);
      }
    }, interval);

    return () => clearInterval(counter);
  }, []);

  return (
    <div className="mt-[5rem]">
      <div
        className="flex flex-col items-center justify-center mt-6 sm:mt-0 min-h-[400px] space-y-6"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="space-y-4 text-center">
          <h1 className="text-4xl lg:text-7xl max-w-3xl font-bold text-[#EB7210] font-orbitron leading-tight">
            YOUR FITNESS. OUR MISSION.
          </h1>
          <p className="text-md lg:text-lg font-medium max-w-[48rem] mx-auto text-[#96979C]">
          IronX helps you reach your fitness goals with smart tools and personalized support. Transform your journey, one workout at a time!
          </p>
        </div>
      </div>

      {/* Counter Boxes */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
        {/* Box 1 */}
        <div
          className="text-center p-6 sm:p-10 shadow-lg w-50vw lg:w-[500px] border-b-[1px] border-[#96979C] lg:border-b-0 lg:border-r-[3px]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white font-orbitron">
            {counters.count1.toLocaleString()}K+
          </h2>
          <p className="text-md sm:w-full w-64 sm:text-lg text-[#96979C] mt-4">
            Workouts logged and progress tracked every month
          </p>
        </div>

        {/* Box 2 */}
        <div
          className="text-center p-6 sm:p-10 shadow-lg w-50vw lg:w-[500px] border-b-[1px] border-[#96979C] lg:border-b-0 lg:border-r-[3px]"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white font-orbitron">
            {counters.count2.toLocaleString()}K+
          </h2>
          <p className="text-md sm:w-full w-64 sm:text-lg text-[#96979C] mt-4">
            Fitness enthusiasts connected through our platform
          </p>
        </div>

        {/* Box 3 */}
        <div
          className="text-center p-6 sm:p-10 rounded-lg shadow-lg w-full lg:w-[500px] flex flex-col justify-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white font-orbitron">
            {counters.count3.toLocaleString()}+
          </h2>
          <p className="text-md sm:w-full w-64 sm:text-lg text-[#96979C] mt-4 mx-auto">
            Countries where IronX is making an impact with its professionalism
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dialouge;