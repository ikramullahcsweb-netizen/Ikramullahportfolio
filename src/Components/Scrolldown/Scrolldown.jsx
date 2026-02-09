import React from 'react'
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { ImArrowDown } from "react-icons/im";

const Scrolldown = () => {
  return (
<section className='flex flex-col justify-center items-center gap-5  mb-16'>
     <div className='font-semibold text-xl'>Scroll Down</div>
    <span className='text-xl text-center animate-bounce duration-1000'>
      <ImArrowDown  size={30}/>
    </span>
    
</section>

  )
}

export default Scrolldown
