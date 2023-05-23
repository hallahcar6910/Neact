import React from 'react'
import Typed from 'react-typed';

export const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='uppercase text-[#00df9a] font-bold p-2'>Growing with data analytics</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Growing with data</h1>
        <div className=' flex justify-center items-center'>
            <h1  className="md:text-5xl sm:text-4xl text-xl font-bold py-4" > Fast, flexible financing for</h1>
            <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2" 
                    strings={['BBB', 'BTC', 'SASS']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for  BTC BBB SASS on this platform</p>
    <button className='bg-[#00df9a] w-[200px] rounded-md my-6 py-3 text-black mx-auto' >Get Started</button></div>
    </div>
  )
}



