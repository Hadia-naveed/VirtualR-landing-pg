import React from 'react'
import { testimonials } from '../constraints'

const Testimonials = () => {
  return (
    <div className='tracking-wide mt-20'>
  <div className="text-3xl text-center sm:text-4xl my-10 lg:my-20 lg:text-6xl">
    What People Are Saying
  </div>

  <div className='flex flex-wrap justify-center items-stretch'>
    {testimonials.map((testi, index) => (
      <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
        <div className='h-full flex flex-col justify-between rounded-md p-6 text-md border border-neutral-600 font-thin'>
          <p className='mb-6'>{testi.text}</p>

          <div className='flex mt-8 items-center'>
            <img
              src={testi.image}
              alt="user"
              className='w-12 h-12 mr-4 rounded-full border border-neutral-300'
            />
            <div>
              <p className='text-lg font-semibold'>{testi.user}</p>
              <p className='text-sm text-gray-400'>{testi.company}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


  )
}

export default Testimonials
