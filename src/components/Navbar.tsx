import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import logo from '../assets/images/IronX-logo.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Our Service', to: '#' },
    { name: 'Benefits', to: '/benefits' },
    { name: 'Blogs', to: '/blogs' },
    { name: 'Contact', to: '/contact' },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`fixed justify-between top-0 left-1/2 transform -translate-x-1/2 flex items-center px-4 lg:px-8 py-4 bg-[#111311] border-2 border-[#232323] rounded-full font-orbitron z-30 transition-all ease-in-out duration-300 w-[80vw] lg:w-[80vw] mt-10 ${isScrolled ? 'bg-opacity-80 backdrop-blur-md' : ''}`}>
      {/* Logo */}
      <div className="flex items-center gap-16 pl-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-[70px] lg:w-[125px]" />
        </Link>
      </div>

      {/* Desktop Navbar Links */}
      <div className="hidden lg:flex gap-8">
        {navLinks.map((link, index) =>
          link.name === 'Our Service' ? (
            <div key={index} className="relative">
              <Link to="#" className="flex items-center gap-1 text-[#96979C] text-xl font-medium transition-all hover:text-[#EB7210]" onClick={handleDropdownToggle}>
                {link.name}
                <RiArrowDropDownLine className="text-xl transition-all hover:text-yellow-500" />
              </Link>
              <div className={`absolute top-full right-0 bg-[#141414] shadow-lg rounded-md w-[218px] mt-1 p-2 flex flex-col gap-2 ${isDropdownOpen ? 'block' : 'hidden' }`}>
                <Link to="/workout-plan" className="text-[#96979C] text-xl hover:text-white py-2 px-4 rounded-md">
                  Workout Plan
                </Link>
                <Link to="/diet-plan" className="text-[#96979C] text-xl hover:text-white py-2 px-4 rounded-md">
                  Diet Plan
                </Link>
              </div>
            </div>
          ) : (
            <Link to={link.to} className="text-[#96979C] text-xl font-medium transition-all hover:text-[#EB7210]" key={index}>
              {link.name}
            </Link>
          )
        )}
      </div>

      {/* Hamburger Menu */}
      <div className="lg:hidden flex justify-center items-center cursor-pointer rounded-full p-2 bg-[#1b1a1a]"
      onClick={handleMenuToggle}>
        <img src="https://framerusercontent.com/images/tIEQjQ5QDx1TzUHLSEdkAOUig.svg" alt="Hamburger Menu" className="w-8 h-8 object-contain"/>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[5.4rem] right-0 bg-[#111311] w-[50%] rounded-lg shadow-lg py-4 z-50 flex flex-col gap-2 lg:hidden">
          {navLinks.map((link, index) => (
            <Link to={link.to} className="text-[#96979C] text-sm font-medium transition-all hover:text-white py-2 px-4" key={index}>
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {/* Join button */}
      <Link to="/join" className="hidden lg:block text-white bg-[#EB7210] px-8 py-4 rounded-full text-xl font-semibold relative overflow-hidden group transition-all duration-300">
        Join Us Now
        <span className="absolute top-0 -left-4 w-[10px] h-[100px] bg-white transform -skew-x-12 opacity-80 transition-all duration-500 group-hover:translate-x-[240px] group-hover:opacity-100"/>
      </Link>
    </div>
  );
};

export default Navbar;