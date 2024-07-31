import React from 'react'
import design from '../assets/hero/HeroDesign.png'
import imgLine from '../assets/hero/Dash.png'
const Design = () => {
  return (
    <>
      <div className='hidden lg:block w-[full] h-[full] z-[-1] absolute top-0 right-0'>
        <img src={design} className='w-[850px]' alt='corner-design'/>
    </div>
    <div className='hidden lg:block w-[full] h-[full] z-[-1] absolute top-[335px] left-[520px]'>
        <img src={imgLine} className='w-[405px] h-[15px]' alt='Dash-design'/>
    </div>
    </>
    
  )
}

export default Design