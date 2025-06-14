import React from 'react'
import { resourcesLinks,communityLinks,platformLinks } from '../constraints'

const Footer = () => {
  return (
<footer className='mt-20 border-t py-10 border-neutral-500'>
    <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
        <div>
            <h3 className='font-semibold text-md mb-4 text-neutral-300 text-2xl'>Resources</h3>
            <ul className='space-y-2'>
                {resourcesLinks.map((link,index)=>(

                    <li key={index}>
                        <a className="hover:text-white" href={link.href}>{link.text}</a>

                    </li>
                ))}

            </ul>
        </div>
        <div>
            <h3 className='font-semibold text-md mb-4 text-neutral-300 text-2xl'>Community</h3>
            <ul className='space-y-2'>
                {communityLinks.map((link,index)=>(

                    <li key={index}>
                        <a className="hover:text-white" href={link.href}>{link.text}</a>

                    </li>
                ))}

            </ul>
        </div>
        <div>
            <h3 className='font-semibold text-md mb-4 text-neutral-300 text-2xl'>Platform</h3>
            <ul className='space-y-2'>
                {platformLinks.map((link,index)=>(

                    <li key={index}>
                        <a className="hover:text-white" href={link.href}>{link.text}</a>

                    </li>
                ))}

            </ul>
        </div>
    </div>

</footer>
  )
}

export default Footer
