import React from 'react'
import { partners } from '../Constants'
const Partners = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center mt-4 p-4'>
        <h1 className="text-[2rem] sm:text-[50px] font-[volkhov] font-bold text-font1color pb-8">
        Our Partners
      </h1>
    <div className='w-full h-full grid grid-cols-2 pl-4 sm:flex gap-2 sm:flex-row justify-around items-center'>
       {partners.map((partner) =>
          <div className='hover:scale-105 transition-all duration-500 p-1 sm:p-2'><img src={partner.src} alt='partner-company-Image'/></div>
       )}
    </div>
    </div>
  )
}

export default Partners