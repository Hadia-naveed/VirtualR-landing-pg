import React from 'react';
import { CheckCircle } from 'lucide-react';
import { checklistItems } from '../constraints';
import codingImg from '../assets/code.jpg'; // ensure path is correct

const Workflow = () => {
  return (
    <div className='mt-10 sm:mt-16 px-4'>
      {/* Heading */}
      <h1 className='text-4xl text-center tracking-wide sm:text-7xl'>
        Accelerate Your{' '}
        <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
          Coding Workflow
        </span>
      </h1>

      {/* Flex container */}
      <div className='flex flex-col lg:flex-row items-center justify-center mt-12 gap-8'>
        {/* Image Section */}
        <div className='w-full lg:w-1/2'>
          <img
            src={codingImg}
            alt='Coding'
            className='w-full h-auto rounded-lg object-contain'
          />
        </div>

        {/* Checklist Section */}
        <div className='w-full lg:w-1/2'>
          {checklistItems.map((item, index) => (
            <div key={index} className='flex items-start mb-8'>
              <div className='text-green-600 w-10 h-10 bg-neutral-900 flex justify-center items-center rounded-full mr-4'>
                <CheckCircle size={20} />
              </div>
              <div>
                <h5 className='text-xl font-semibold'>{item.title}</h5>
                <p className='text-neutral-400'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-screen h-[2px] mt-16 bg-amber-600 shadow-lg shadow-red-500/40 "></div>
    </div>
  );
};

export default Workflow;
