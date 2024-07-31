import React from 'react'
import destination1 from '../assets/destinations/destination1.png'
import { destinations } from '../Constants'
import { DestinationCard } from '../components/ServiceCard'
const Destination = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6 md:p-2 p-5 mt-10">
    <h2 className="text-[1.25rem] sm:text-[1.50rem] font-[poppins] font-semibold text-secondaryFont">
       Top Selling
    </h2>
    <h1 className="text-[2rem] sm:text-[50px] font-[volkhov] font-bold text-font1color pb-8">
      Top Destinations
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 gap-y-16 sm:gap-52">
      {
          destinations.map((destination) =>(<DestinationCard img={destination.src} location={destination.location} price ={destination.price} trip={destination.length}/>))
      }
    </div>
     
  </div>
  )
}

export default Destination