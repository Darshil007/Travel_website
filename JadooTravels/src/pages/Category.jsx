import React from "react";
import  { ServiceCard } from "../components/ServiceCard";
import { services } from "../Constants";
const Category = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6 md:p-2 mt-6">
      <h2 className="text-[1.25rem] sm:text-[1.50rem] font-[poppins] font-semibold text-secondaryFont">
        Category
      </h2>
      <h1 className="text-[2rem] sm:text-[50px] font-[volkhov] font-bold text-font1color pb-8">
        We Offer Best Services
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 gap-y-16 sm:gap-52">
        {
            services.map((service) =>(<ServiceCard img={service.src} title={service.title} desc ={service.description}/>))
        }
      </div>
    </div>
  );
};

export default Category;
