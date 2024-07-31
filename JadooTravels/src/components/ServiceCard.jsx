import React from 'react'
import { RiFlightTakeoffFill } from "react-icons/ri";
import Button from './Button';
export const ServiceCard = (props) => {
  return (
    <div className="w-[205px] h-[229px] p-2 bg-white flex flex-col justify-evenly items-center gap-y-2 transition-all duration-450 hover:scale-110 hover:shadow-xl rounded-xl ">
          <img src={props.img}  alt="serviceImg" />
          <h2 className="text-[1rem] sm:text-[1.25rem] font-[poppins] font-semibold text-font1color">
            {props.title}
          </h2>
          <h3 className="text-[0.82rem] mt-2 sm:text-[0.95rem] sm:text-start font-[poppins] font-medium text-secondaryFont text-center">
            {props.desc}
          </h3>
        </div>
  )
}

export const DestinationCard = (props) => {
    return (
        <div className='w-[313px] h-[455px] rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl'>
          <div className='relative overflow-hidden hover:rounded-3xl'>
            <img src={props.img} className='hover:scale-105 transition-all duration-700 hover:rounded-3xl' alt='destinationImg'/>
          </div>
          <div className='relative bottom-28 bg-slate-50 rounded-br-lg rounded-bl-lg h-[112px] px-4 py-1'>
          <div className='space-y-2 flex justify-between items-center pt-2'>
            <div className='text-[0.95rem] mt-2 sm:text-[1.15rem] sm:text-start font-[poppins] font-medium text-secondaryFont'>{props.location}</div>
            <div className='text-[0.95rem] mt-2 sm:text-[1.15rem] sm:text-start font-[poppins] font-medium text-secondaryFont'>{props.price}</div>
          </div>
          <div className='flex justify-start items-center text-[0.9rem] mt-4 sm:text-[1.15rem] sm:text-start font-[poppins] font-medium text-secondaryFont'>
            <RiFlightTakeoffFill size={23} className='mb-1' color={'#181e4b'} />  <span className='ms-4'>{props.trip}</span>
          </div>
          </div>
        </div>
    )
}

export const TravelGuideCard = (props) =>{
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-2xl w-96">
    <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-3xl bg-blue-gray-500 shadow-blue-gray-500/40">
      <img
        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        alt="card-image"
      />
    </div>
    <div className="p-4">
      <h5 className="text-[1rem] sm:text-[1.25rem] font-[poppins] text-left font-semibold text-font1color">
        Barcelona, Spain 
      </h5>
      <p className="text-[0.6rem] sm:text-[1.25rem] font-[poppins] text-left  text-font1color py-2">
        The place is close to Barceloneta Beach and bus stop just 2 min by walk
        and near to "Naviglio" where you can enjoy the main night life in
        Barcelona.
      </p>
    </div>
    <div className="p-4 mb-4">
     <Button>Book Now</Button>
    </div>
  </div>
  )
}