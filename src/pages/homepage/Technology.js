import React from 'react'
import { DiAndroid, DiCss3Full, DiJava, DiJavascript, DiPython, DiReact } from "react-icons/di";

const Technology = () => {
  return (
    <div>
      <h1 className='text-center font-extrabold text-2xl mb-7'>Technologies I Use</h1>
      <div className='grid grid-cols-4 place-items-center'>

        <DiAndroid
          className='hover:scale-125 hover:text-pink-800 duration-150' size={150} />
        <DiJava size={150} />
        <DiJavascript size={150} />
        <DiReact className='animate-bounce' size={150} />
        <DiCss3Full size={150} />
        <DiPython size={150} />

      </div>


    </div>

  )
}

export default Technology
