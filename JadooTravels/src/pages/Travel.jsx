import React from "react";
import book1 from "../assets/bookTravel/icon1.png";
import book2 from "../assets/bookTravel/icon2.png";
import book3 from "../assets/bookTravel/icon3.png";
import { TravelGuideCard } from "../components/ServiceCard";
const Travel = () => {
  return (
    <div className="sm:flex justify-around items-center  sm:w-[94%] mt-2">
      <div className="flex flex-col justify-center items-center sm:ms-20">
        <p className="text-[1rem] sm:text-[1.25rem] font-[poppins] text-left font-semibold text-font1color">
          Easy and Fast
        </p>
        <h1 className="text-[2.20rem] sm:text-[50px] font-[volkhov] text-center sm-text-left font-bold text-font1color pb-6">
          Book your next trip <br /> in 3 easy steps
        </h1>
        <div className="flex flex-col justify-center items-start gap-3">
          <div className="flex justify-between items-center gap-4">
            <div>
              <img className="pb-4" src={book1} alt="TravelGuide-Icon" />
            </div>
            <div>
              <p className="text-[1rem] sm:text-[1.25rem] font-[poppins] text-left font-semibold text-font1color">
                Choose Destination
              </p>
              <p className="text-[1rem] sm:text-[1.25rem] font-[poppins] text-left  text-font1color">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Urna, tortor tempus.
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <img className="pb-4" src={book2} alt="TravelGuide-Icon" />
              </div>
              <div>
                <p className="text-[1rem] sm:text-[1.25rem] font-[poppins] text-left font-semibold text-font1color">
                  Make Payment
                </p>
                <p className="text-[1rem] sm:text-[1.25rem] font-[poppins] text-left  text-font1color">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Urna, tortor tempus.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <img className="pb-4" src={book3} alt="TravelGuide-Icon" />
              </div>
              <div>
                <p className="text-[1rem] sm:text-[1.25rem] font-[poppins] text-left font-semibold text-font1color">
                  Reach Airport on Selected Date
                </p>
                <p className="text-[1rem] sm:text-[1.25rem] font-[poppins] text-left  text-font1color">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Urna, tortor tempus.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:items-start items-center mt-10 p-4">
        <div className="w-[22.125rem] h-[22.5rem] bg-[#59B1E6] opacity-4 rounded-full blur-3xl mt-2 absolute "></div>
        <div>
           <TravelGuideCard/>
        </div>
      </div>
    </div>
  );
};

export default Travel;
