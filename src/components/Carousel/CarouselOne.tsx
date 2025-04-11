import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { RxSlash } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";

const CarouselOne: React.FC = () => {
  const words: string[] = [
    "Workout",
    "Strength",
    "Endurance",
    "Flexibility",
    "Mobility",
    "Fitness",
    "Exercise",
    "CrossFit",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-black">
      {/* First Slider */}
      <div data-aos="zoom-in">
        <Marquee speed={80} gradient={false}>
          {words.map((word, index) => (
            <React.Fragment key={`rtl-${index}`}>
              <span className="inline-block mx-4 text-5xl lg:text-7xl font-orbitron text-white">
                {word}
              </span>
              <RxSlash className="inline-block text-7xl text-white relative -top-4" />
            </React.Fragment>
          ))}
        </Marquee>

        {/* Second Slider */}
        <Marquee speed={80} gradient={false} direction="right" className="-mt-2">
          {words.map((word, index) => (
            <React.Fragment key={`ltr-${index}`}>
              <span className="inline-block mx-4 text-5xl lg:text-7xl font-orbitron text-[#EB7210]">
                {word}
              </span>
              <RxSlash className="inline-block text-7xl text-[#EB7210] relative -top-4" />
            </React.Fragment>
          ))}
        </Marquee>
      </div>  
    </div>
  );
};

export default CarouselOne;