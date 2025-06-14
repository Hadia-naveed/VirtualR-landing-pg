import React from 'react'
import { features } from '../constraints'


const Featuresection = () => {
  return (

    <div >
    <div className='relative flex items-center mt-15 '>
        <div className='text-center w-full'>
        <span className=' font-bold text-amber-600  text-3xl sm:text-5xl'>Features</span>
        <h1 className='mt-6 text-2xl sm:text-5xl font-medium '>Easily Build <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text '>Your Code</span></h1></div>
        
      
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full mt-10'>
        {features.map((feature, index) => (
          <div key={index} className='bg-zinc-900 p-6 rounded-lg shadow-md text-white hover:scale-105 transition-transform duration-300'>
            <div className='text-orange-500 mb-4'>{feature.icon}</div>
            <h5 className='text-lg font-semibold mb-2'>{feature.text}</h5>
            <p className='text-sm text-gray-300'>{feature.description}</p>
          </div>
        ))}
      </div><div className="w-screen h-[2px] mt-16 bg-amber-600 shadow-lg shadow-red-500/40 "></div>
      
      </div>
  )
}

export default Featuresection 

