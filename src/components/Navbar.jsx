import React from 'react'
import {Menu,X} from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const [Togglebutton, setTogglebutton] = useState(false)
    const toggleNavbar = ()=>{
        setTogglebutton(!Togglebutton)
    }
  return (
    <nav className='relative sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
  <div className='container mx-auto px-4 flex items-center justify-between lg:justify-around'>
    <div className="logo flex items-center flex-shrink-0">
      <img className='h-8 w-8 lg:h-10 lg:w-10 lg:mr-2' src={logo} alt="" />
      <span className=' text-[10px] sm:text-base md:text-lg'>VirtualR</span>
    </div>

    <div className='lg:flex items-center hidden'>
      <ul className='lg:flex items-center justify-center gap-4'>
                <li className=' transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg'><NavLink to="/">Home</NavLink></li>

        <li className=' transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg'><NavLink to="/features">Features</NavLink></li>
        <li className=' transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg'><NavLink to="/workflow">Workflow</NavLink></li>
        <li className=' transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg'><NavLink to="/pricing">Pricing</NavLink></li>
        <li className=' transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg'><NavLink to="/testimonials">Testimonials</NavLink></li>
      </ul>
    </div>

    <div className='lg:flex gap-4 text-sm hidden'>
      <button className='border  border-white rounded-md px-3 py-1 text-sm transition duration-300 ease-in-out hover:scale-105 hover:shadow-white/30'>Sign in</button>
      <button className='bg-gradient-to-r from-orange-500 to-orange-800 rounded-md px-3 py-1 text-sm transition duration-300 ease-in-out hover:scale-105 hover:shadow-orange-500/50'>Create an Account</button>
    </div>

    {/* Toggle button for mobile */}
    <div className='lg:hidden'>
      <button onClick={toggleNavbar}>
        {Togglebutton ? <X /> : <Menu />}
      </button>
    </div>

    

  </div>
  

  
    {Togglebutton && (
  <div className={`absolute top-full left-0 w-full bg-[rgb(40, 39, 39)] backdrop-blur-md p-6 flex flex-col items-center transition-all duration-500 ease-in-out transform lg:hidden${
  Togglebutton ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
}`}>

    <ul className="flex flex-col gap-4 text-white text-lg">
      <li className=' transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg'><NavLink to="/">Home</NavLink></li>

      <li className='text-sm transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg'><NavLink to="/features">Features</NavLink></li>
      <li className='text-sm transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg'><NavLink to="/workflow">Workflow</NavLink></li>
      <li className='text-sm transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg'><NavLink to="/pricing">Pricing</NavLink></li>
      <li className='text-sm transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg'><NavLink to="/testimonials">Testimonials</NavLink></li>
    </ul>
    <div className="mt-6 flex flex-col gap-4">
      <button className="border border-white  rounded-md px-[8px] py-2 text-sm transition duration-300 ease-in-out hover:scale-105 hover:shadow-white/30">Sign in</button>
      <button className="bg-gradient-to-r from-orange-500 to-orange-800 text-white rounded-md px-3 py-2 text-sm transition duration-300 ease-in-out hover:scale-105 hover:shadow-orange-500/50">Create an Account</button>
    </div>
  </div>
)}

</nav>

        
      
    
  )
}

export default Navbar

