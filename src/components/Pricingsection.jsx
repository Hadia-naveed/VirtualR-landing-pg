import React from 'react'
import { pricingOptions } from '../constraints'
import { CheckCircle2 } from 'lucide-react'

const Pricingsection = () => {
  return (
    <div className='mt-10 text-center sm:mt-12 '>
        <h2 className='text-3xl sm:text-4xl font-bold'>Pricing</h2>
        <div className='flex flex-wrap '>
{ pricingOptions.map((option,index)=>(
    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2 '>
        <div className='p-10 border border-neutral-600 rounded-xl mt-8 hover:scale-105 transition-transform duration-300'>
            <p className='text-4xl mb-8' >{option.title}
                {option.title==="Pro"&&(
                    <span className='text-xl mb-4 ml-2 text-amber-600'>(Most popular)</span>
                )}
            </p>

            <p className='mb-8'>
                <span className='text-4xl mt-6 mr-1'>{option.price}</span>
                <span className='text-neutral-400 tracking-tight'>/Month</span>

            </p>
            <ul>
                {option.features.map((feature,index)=>(
                    <li key={index} className='mt-8 flex items-center'><CheckCircle2/><span className='ml-2'>{feature}</span></li>
                    
                )

                )}

            </ul>
            <button className='inline-flex justify-center items-center text-center w-full h-12 mt-12 text-xl tracking-tight text-neutral-400 border rounded-lg hover:bg-amber-600 transition duration-300 '> Subscribe</button>
            
        </div>


    </div>

))}



        </div>
      
    </div>
  )
}

export default Pricingsection
