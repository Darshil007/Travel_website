import React from 'react'

const Button = ({children},props) => {
  return (
    <>
      <div className='w-[8rem] h-[3rem] bg-brightOrange text-white font-[poppins] text-[16px] flex justify-center items-center rounded-md shadow-Orange'>
         {children}
      </div>
    </>
  )
}

export default Button