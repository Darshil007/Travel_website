import React from "react";
import { useState } from "react";
import Button from "./Button";
import logo from '../assets/hero/travelLogo.png'
import { FiAlignRight } from "react-icons/fi";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="mt-4 flex px-6 justify-between sm:justify-around items-center">
        <img src={logo} className="w-[128px] sm:w-[150px]" alt="brand-logo"/>
        <div className="mx-2 hidden md:flex justify-between items-center w-[30%]">
            <a className="block mt-5 me-3 p-1.5 text-[18px] text-[poppins] text-navLabels font-medium hover:border-b-2 hover:border-secondaryFont transition-all duration-800 hover:scale-110 hover:text-primary">Destination</a>
            <a className="block mt-5 me-3 p-1.5 text-[18px] text-[poppins] text-navLabels font-medium hover:border-b-2 hover:border-secondaryFont transition-all duration-800 hover:scale-110 hover:text-primary">Flights</a>
            <a className="block mt-5 me-3 p-1.5 text-[18px] text-[poppins] text-navLabels font-medium hover:border-b-2 hover:border-secondaryFont transition-all duration-800 hover:scale-110 hover:text-primary">Booking</a>
            <a className="block mt-5 me-3 p-1.5 text-[18px] text-[poppins] text-navLabels font-medium hover:border-b-2 hover:border-secondaryFont transition-all duration-800 hover:scale-110 hover:text-primary">Hotels</a>
        </div>
        <div className="mx-2 mt-2 hidden md:flex">
            <Button>Login</Button>
        </div>
        <div className={`md:hidden`} onClick={() => setToggle((prev) => (!prev))}>
            <FiAlignRight size={45}/>
        </div>
        <div className={`${toggle ? 'flex' : 'hidden'} z-10 flex flex-col justify-center items-center absolute w-[91%] h-[full] bg-secondaryFont top-20 toggleTransition p-2 rounded-xl`}>
            <a className="block mt-4 p-4 text-[20px] text-[poppins] text-navLabels font-bold hover:border-b-2 hover:border-secondary">Destination</a>
            <a className="block mt-4 p-4 text-[20px] text-[poppins] text-navLabels font-bold hover:border-b-2 hover:border-secondary">Flights</a>
            <a className="block mt-4 p-4 text-[20px] text-[poppins] text-navLabels font-bold hover:border-b-2 hover:border-secondary">Bookings</a>
            <a className="block mt-4 p-4 text-[20px] text-[poppins] text-navLabels font-bold hover:border-b-2 hover:border-secondary">Hotels</a>
            <a className="block mt-4 p-4 text-[20px] text-[poppins] text-navLabels font-bold hover:border-b-2 hover:border-secondary">Login</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
