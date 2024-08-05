import React from 'react'
import { GiCook } from "react-icons/gi";

const Information = () => {
  return (
    <div className='p-4 py-4'>
        <div>
            <div className="text-center">
      <h3 className='text-lg font-bold text-black'>{new Date().toUTCString().slice(0,16)}</h3>
     <h1 className='font-semibold text-4xl underline '>  RESTRO-<span className="font-bold">FOOD</span> <span className='text-orange-500 '>WELCOMES</span> YOU:</h1>
     <div className="flex justify-center">
            <GiCook size={52} className='text-orange-500' />
          </div>
      </div>
      </div>
    </div>
   
  )
}

export default Information


