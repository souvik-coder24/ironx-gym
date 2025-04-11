import React from "react";
import { Link } from "react-router-dom";
import bodybuildingImg from "../assets/images/BodyBuilding.jpg";
import martialArtsImg from "../assets/images/martial.jpg";
import danceImg from "../assets/images/dancing.jpg";
import yogaImg from "../assets/images/yoga.jpeg";

const services = [
  { name: "Bodybuilding", image: bodybuildingImg, route: "/bodybuilding" },
  { name: "Martial Arts", image: martialArtsImg, route: "/martial-arts" },
  { name: "Dance", image: danceImg, route: "/dance" },
  { name: "Yoga", image: yogaImg, route: "/yoga" },
];

const OurService: React.FC = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-16">
      {/* Title & Subtitle */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-[#EB7210] font-orbitron uppercase">
          Our Services
        </h2>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto text-base md:text-lg font-light">
          Explore our diverse offerings, from intense strength training to serene yoga — there's something for every body and goal.
        </p>
      </div>

      {/* Service Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <div
            key={i}
            className={`relative group h-[600px] w-full overflow-hidden bg-center bg-cover ${i === 1 || i === 3 ? "lg:mt-10" : ""}`}
          >
            {/* Zooming Background */}
            <div
              className="absolute inset-0 transition-transform duration-500 scale-100 group-hover:scale-110 bg-center bg-cover"
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>

            {/* Button */}
            <Link
              to={service.route}
              className="absolute inset-0 flex items-center justify-center z-20"
            >
              <span className="text-white border border-white w-[220px] text-center py-3 text-lg font-semibold bg-white/10 backdrop-blur-sm skew-x-[-20deg] relative overflow-hidden group/button transition duration-300">
                <span className="block skew-x-[20deg] relative z-10">
                  {service.name}
                </span>
                <span className="absolute top-0 left-[-100%] h-full w-full bg-white opacity-40 -skew-x-[1deg] group-hover/button:translate-x-full transition-transform duration-700"></span>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;