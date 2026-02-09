import React from 'react'
import { FaWhatsapp,FaUser } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

import { TbMessageCircleFilled } from "react-icons/tb";

const Contact = () => {
  return (
   <section id='Contact' className='m-9  my-20' >
    <h1 className='text-2xl font-bold text-center items-center'>Get in touch</h1>
    <p className='text-center items-center  mb-12'>Contact me</p>
    <div className='flex  container md:flex-row justify-center gap-7 flex-col'>
      <div className='md:w-50 h-80 w-full flex md:flex-col flex-row-center justify-center gap-2 text-center items-center'>
        <div className='bg-white w-45  h-35 border-2 rounded-2xl border-gray-300  ' >
           <ul className='inline-grid h-1/3 my-auto md:flex-col-center   gap-y-1.5 pt-4 text-center  text-title mb-15'>
               <li className='text-center items-center ml-11'>
                <a className='' href="https://wa.me/qr/HBHXS5AFLMV4J1">
                         <FaWhatsapp size={30} />  </a>
                </li>
                <li>
                  <h2 className='font-semibold text-xl'>WhatsApp</h2></li>
                 <li>
                  <p> 
                  +923447515345</p>
                  </li>
              </ul>
             
           
         
           </div>
        <div className='bg-white w-45 h-35 rounded-2xl border-2 border-gray-300' >
           <ul className='inline-grid h-1/3 my-auto md:flex-col-center gap-y-1 pt-4 text-center  text-title mb-15'>
               <li className='text-center items-center ml-12'>
                <a className='' href="https://wa.me/qr/HBHXS5AFLMV4J1">
                         <AiOutlineMail size={30} /></a>
                </li>
                <li>
                  <h2 className='font-semibold text-xl'>Email</h2></li>
                 <li>
                  <p> 
                  ikramullahbscs@...</p>
                  </li>
              </ul>
        </div>

      </div>
      {/* second box form */}
       <div className=' h-80 flex flex-col items-center '>
         <h1 className='text-xl font-bold mb-3'>Let's Collab...</h1>
      <div className='  h-auto flex  px-2 '>
       
        <form action="" method='Post'  className= 'space-y-6   '>
          <div className='flex flex-col relative w-80 item-center '>
          <label htmlFor="name" className='absolute -top-3 ml-3 bg-gray-50 flex gap-2 ' ><FaUser size={20} /> Name</label>
          <input type='text' name='name' id='input' className='rounded-xl border-2 border-gray-300 w-80 md:w-80 sm:w-115 h-10 p-5 '/>
        </div>
          <div className='flex flex-col relative '>
          <label htmlFor="name"  className='absolute -top-3 ml-3 bg-gray-50 flex gap-2 '> <FaPhone  size={20} />Phone</label>
          <input type='text' name='name'  className='rounded-xl border-2 border-gray-300 w-80 md:w-80 sm:w-115 h-13 p-5 '/>
          </div>
          <div className='flex flex-col relative '>
          <label htmlFor="name" className='absolute -top-3 ml-3 bg-gray-50 flex gap-1 text-small '> <TbMessageCircleFilled size={20} />Message </label>
          <textarea name="" id="" className='rounded-xl border-2 border-gray-300 h-30 w-80 md:w-80 sm:w-115 p-5'></textarea>
          </div>
        </form>
      </div>
        <a href="#input" className='mt-5 ' id=''> <button className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-800 my-3 text-white rounded-2xl hover:bg-gray-950 transition duration-300 font-semibold ml-3 ">
             <span>Send Message</span>  <FaRegPaperPlane size={30} /> 
            
          </button></a>
      </div>
     
      </div>
 
    

   </section>
  )
}

export default Contact
