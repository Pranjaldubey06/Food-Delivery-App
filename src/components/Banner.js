import React from 'react'

const Banner = () => {
  return (
    
       <div className='max-w-[ 2160px] mx-auto bg-slate-100'>
      <div className='max-h-[500px] relative'>

        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center '>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold'>The<span className='text-orange-500'>Best</span></h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold'>Foods<span className=' text-orange-500'>Delivered</span></h1>
        </div>
        
    <img className='w-full max-h-[500px]' src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" alt=''/>
      </div>
    </div>
  )
}

export default Banner;


