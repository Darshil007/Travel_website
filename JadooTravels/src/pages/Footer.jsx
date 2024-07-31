import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 p-4 mt-4'>
        <div className='w-[80%] h-full flex flex-col sm:flex-row justify-around items-center'>
           <div className='p-4'>
                <h1 className="text-[2.20rem] sm:text-[50px] font-[volkhov] text-center sm-text-left font-semibold text-font1color">Jadoo.</h1>
                <p className='text-[1rem] sm:text-[1.1rem] font-[poppins] text-center  text-font1color pb-4'>Book your trip in minute, get full <br/>Control for much longer.</p>
            </div>
           <div className='w-full flex flex-row justify-around items-center'>
              <div className='flex flex-col justify-center items-center gap-2'>
               <h2 className="text-[1.25rem] sm:text-[1.50rem] font-[poppins] font-semibold text-secondaryFont">Company</h2>
               <p className='text-[1rem] sm:text-[1.25rem] font-[poppins] text-left  text-font1color py-2'>About</p> 
               <p className='text-[1rem] sm:text-[1.25rem] font-[poppins] text-left  text-font1color py-2'>Careers</p> 
               <p className='text-[1rem] sm:text-[1.25rem] font-[poppins] text-left  text-font1color py-2'>Mobile</p> 
               </div>
               <div className='flex flex-col justify-center items-center gap-2'>
               <h2 className="text-[1.25rem] sm:text-[1.50rem] font-[poppins] font-semibold text-secondaryFont">Contact</h2>
               <p className='text-[1rem] sm:text-[1.25rem] font-[poppins] text-left  text-font1color py-2'>Help/FAQ</p> 
               <p className='text-[1rem] sm:text-[1.25rem] font-[poppins] text-left  text-font1color py-2'>Press</p> 
               <p className='text-[1rem] sm:text-[1.25rem] font-[poppins] text-left  text-font1color py-2'>Affilates</p> 
               </div>
           </div>
           <div className='flex flex-row py-4 sm:flex-col justify-around items-center gap-4 '>
              <div className='flex flex-row justify-center items-center font-[poppins] text-left text-[1rem] sm:text-[1.25rem] text-font1color'><FaInstagram className='mx-2' size={35}/><FaArrowRight className='mx-2' size={25}/>Instagram </div>
              <div className='flex flex-row justify-center items-center font-[poppins] text-left text-[1rem] sm:text-[1.25rem] text-font1color'><FaSquareXTwitter className='mx-1' size={35}/><FaArrowRight className='mx-2' size={25}/>Twitter</div>
           </div>
        </div>
        <div className='text-[1.25rem] sm:text-[1.30rem] font-[poppins] text-secondaryFont'>All rights reserved@jadoo.co</div>
    </div>
  )
}

export default Footer