import React from 'react'
import HeroImg from "../assets/phone.webp";

const Hero = () => {
  return (
    <div className="bg-[url(./bg.webp)] h-screen font-[Garet-normal] p-10 ">
        <div className='max-w-7xl mx-auto flex h-screen items-center justify-between'>
        <div className='left flex flex-col'>
          <h1 className='text-8xl leading-28 font-semibold w-2xl'>Fastest way to make payment anywhere.</h1>
          <div className='flex items-center mt-6'>
            <div className='font-semibold px-8 py-4 border-2 flex items-center rounded-lg'>
              <span>©️</span>
              <h1>Play Store</h1>
              
            </div>
            <div>
              ******
            </div>
          </div>
        </div>
        <div className='right'>
          <img className='w-[380px] mt-20' src={HeroImg} alt="heroimg" />
        </div>
        </div>
    </div>
  )
}

export default Hero