import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const Herosection = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-15'>
      <h1 className='text-4xl text-center tracking-wide sm:text-7xl leading-tight'>Virtual Build Tools <br />
        <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text ' > For Developers</span>
      </h1>
      <p className='mt-4 text-center text-lg max-w-4xl'>Enpower Your Creativity And Bring Your VR Apps Ideas To life With our Intuitive Developmental Tools.
        <br />Started Today And Bring Your Imagination Into Immersive Reality.


      </p>

      <div className='flex flex-col  items-center sm:flex-row justify-center mt-14 gap-10 px-4 mx-10'>
        <video
          src={video1}
          autoPlay
          muted
          loop
          className='border rounded-lg border-amber-600 w-1/2 '
        ></video>
        <video
          src={video2}
          autoPlay
          muted
          loop
          className='border rounded-lg border-amber-600 w-1/2 '
        ></video>
      </div>
      <div className="w-screen h-[2px] mt-16 bg-amber-600 shadow-lg shadow-red-500/40 "></div>





    </div>
    
  )
}

export default Herosection
