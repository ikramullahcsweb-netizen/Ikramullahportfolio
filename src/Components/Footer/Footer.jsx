import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='bg-gray-200 h-50 w-full mt-40'>
      <div className='flex justify-between items-center text-center flex-col gap-6'>
        <ul className='flex flex-row gap-8 font-normal  mt-8'>
          <a href='#About'>
        <li className='text-md transition-all duration-300  md:p-0  md:mt-0 hover:text-gray-400 '>About</li>
        </a>
        
        <a href='#Projects'>
        <li className='text-md transition-all duration-300  md:p-0 hover:text-gray-400 '>Projects</li></a>
        <a href='#Skill'> 
        <li className='text-md transition-all duration-300  md:p-0 mr-0 hover:text-gray-400'>Skills</li>
       </a>
      
        </ul>
         <div className='flex flex-row gap-5 font-semibold'>
             
               <button className='bg-gray-900 w-11 h-11 p-2.5 rounded-xl text-center text-white duration-400 hover:scale-110'><a className='' href="https://wa.me/qr/HBHXS5AFLMV4J1">
                       <FaWhatsapp size={25} />    </a></button>
              
            
               
               <button className='bg-gray-900 w-11 h-11 p-2.5 rounded-xl text-center text-white duration-300 hover:scale-110'><a className='' href="https://github.com/ikramullahcsweb-netizen">
                     <FaGithub  size={22} /> </a></button> 
               
              <button className='bg-gray-900 w-11 h-11 p-2.5 rounded-xl text-center text-white  duration-300 hover:scale-110'> <a className='' href="https://www.linkedin.com/in/ikram-ullah-272171392?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn size={22} /> </a></button> 
            </div>
            <span className='text-sm'>© 2026 Ikramullah. All rights reserved.</span>
      </div>
    </section>
  )
}

export default Footer
