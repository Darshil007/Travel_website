import React from 'react'
import Button from './Button'
import heroImage from '../assets/hero/Character.png'
import { FaPlay } from "react-icons/fa";
const HeroContent = () => {
  return (
    <div className='flex justify-evenly items-center w-[full] h-[full]  pt-20 pb-15 sm:py-8 px-8'>
        <div className='flex flex-col justify-center items-center sm:items-start sm:ps-14'>
            <h2 className='text-[1rem] sm:text-[24px] md:text-[28px]  font-[poppins] font-bold text-primary py-2' >BEST DESTINATION AROUND THE WORLD</h2>
            <h1 className='p-0 text-[5.5vh] text-center sm:text-start md:text-[5.5vh] lg:text-[10vh] font-[volkhov] font-bold text-font1color'>Travel, enjoy <br/> and live a new <br/> and full life</h1>
            <p className='text-[0.922rem] mt-2 sm:text-[20px] text-center sm:text-start font-[poppins] font-medium text-secondaryFont'>Built Wicket longer admire do barton vanity itself do in it. <br/> Preferred to sportsmen it engrossed listening. Park gate <br/> sell they west hard for the.</p>
            <div className='mt-4 flex flex-row justify-between items-center sm:justify-start w-[86%] p-4 sm:px-0'>
                <Button>Find out more</Button>
                <div className='ms-4 flex justify-center w-[170px] h-[full] items-center'>
                  <button className='flex justify-center items-center w-[50px] h-[50px] rounded-full bg-primary pl-1 shadow-brown'><FaPlay color='white' size={'15px'}/></button>
                  <div className='pl-2 text-[16px] font-medium font-[poppins] text-secondaryFont'>Play Demo</div>
                </div>
            </div>
        </div>
        <div className='hidden md:block'>
            <img src={heroImage} width={'860px'} alt='character-image'/>
        </div>
    </div>
  )
}

export default HeroContent