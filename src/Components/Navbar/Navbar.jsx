import React, { useState } from 'react'
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { FiX } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { VscProject } from "react-icons/vsc";
import { IoBagCheck } from "react-icons/io5";
import { GiInnerSelf } from "react-icons/gi";

const Navbar = () => {
  const [menu,openMenu]=useState(false);
  const [showMenu,setShowMenu]=useState(true)
  return (
   <nav id='Navbar' className=' md:top-1  w-full h-10  fixed bottom-2 left-0  z-10 flex flex-wrap justify-between   lg:px-20  px-4 lg:pl-34  md:pl-10  md:px-5  lg:pr-40 mt-2 gap-2 md:border-none '>
      <span className=' lg:text-2xl font-bold tracking-wide    hover:text-gray-400  transition duration-300  md:text-xl md:static  fixed bottom-2 text-lg  '>Ikramullah </span>
       <ul className ={` ${menu ? "block" : "hidden"} 
             py-2 font-semibold   px-2 rounded-xl  md:bg-opacity-30  text-center md:bg-transparent md:flex grid grid-cols-3 -right-39 md:w-auto w-[93%] md:gap-9 gap-3   md:border-none md:static fixed  md:mx-0 mx-45    md:mt-0    top-3  gap-x-20 border-1 border-gray-300  bg-white   `}>
        <a href='#Home'>
        <li className='text-md transition-all duration-300 p-4  md:p-0 md:mt-0 hover:text-gray-400 '><FaHome size={25} className='md:hidden ml-8' /> Home</li>
        </a>
       
        <a href='#About'>
        <li className='text-md transition-all duration-300 p-4  md:p-0  md:mt-0 hover:text-gray-400 '><GiInnerSelf  size={25} className='md:hidden ml-8'/>About</li>
        </a>

        <a href='#Skill'> 
        <li className='text-md transition-all duration-300 p-4 md:p-0 mr-0 hover:text-gray-400'><GiSkills size={25} className='md:hidden ml-8'/> Skills</li>
       </a>
        <a href='#Projects'>
        <li className='text-md transition-all duration-300 p-4 md:p-0 hover:text-gray-400 '><VscProject size={25} className='md:hidden ml-8'/>Projects</li>
        </a>
         <a href='#Portfolio'>
        <li className='text-md transition-all duration-300 p-3 md:p-0 hover:text-gray-400 '><IoBagCheck size={25} className='md:hidden ml-8'/>Portfolio</li>
        </a>

        <a href='#Contact'>
        <li className='text-md transition-all duration-300 p-3 md:p-0
        hover:text-gray-400'><FaRegPaperPlane size={30} className='md:hidden ml-8' /> Contact</li></a>
       </ul>

        {showMenu ? (
        <TfiLayoutGrid2 size={30} className='md:hidden absolute right-6 bottom-2 transition-all duration-300'
       onClick={()=> {
        openMenu(!menu); setShowMenu(!showMenu);


       }} />

     ) : ( 
      <FiX
      size={30}
      className='md:hidden absolute right-10 bottom-2  transition-all duration-700 items-center ' 
       onClick={()=> {
        openMenu(!menu); setShowMenu(!showMenu);


       }}

      />
     ) }

</nav>
  )
}

export default Navbar
