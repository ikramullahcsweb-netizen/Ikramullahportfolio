
import { useState } from 'react';
import imgproject from '../../assets/project image.webp'
import { BsArrowRightShort } from "react-icons/bs";
import { RxTextAlignCenter } from "react-icons/rx";
import { FiX } from "react-icons/fi";
import { TiTick } from "react-icons/ti";


const ProjectCard = ( {title , main,button1,button2,button3,date,more,li,paragraph,li1,li2,li3,li4,li5,button4,button5})  => {
    const[showModel ,setShowModel]=useState(false);
   
  return (
    <div>
    <div className='  md:w-95  md:m-1 h-55  p-2 flex flex-col      rounded-xl hover:opacity-60  duration-800   bg-white border-gray-300 border-1 font-sans hover:scale-103 transition' onClick={()=>setShowModel(true)} >

       
      
      
      <h3 className='px-4 text-xl font-semibold  text-gray-800 py-4 leading-normal'>
        {title}
          </h3>
        <p className=' tracking-normal font-[var(---font-poppins)]  md:text-normal text-gray-700  leading-tight  px-2 '>{main}</p>
        <div className='flex gap-2 md:gap-4 mt-2 p-2 md:p-4'>
       <div className='items-center justify-center text-center flex sm:gap-3 gap-1'>
       <button className ="inline-flex items-center justify-center gap-2 px-3
        py- bg-gray-100 text-black rounded-4xl transition">
       {button1} </button>
         <button className='inline-flex items-center justify-center gap-2 px-3 py- text-gray-950 bg-gray-100 rounded-4xl   hover:opacity-85 duration-300 hover:scale-105'>
         {button2}</button>
         <button className='inline-flex items-center justify-center gap-2 px-4 py- text-gray-950 bg-gray-100 rounded-4xl   hover:opacity-85 duration-300 hover:scale-105'>
         {button3}</button>
         
         </div>
         
      </div>   
      <div className='font-light text-gray-400'><hr className='border-dashed mx-3 '/></div>
      <div className='flex md:gap-x-16 sm:gap-x-[50%] gap-x-[10%] py-2'>
        <div >{date}</div> 
        <div  className='flex  '> {more }<BsArrowRightShort size={20} className='mt-1'/> <RxTextAlignCenter size={15} className='mt-1'/> </div>
          
         
      
      </div>
       
    </div>
    {showModel && (

         <div className='fixed bg-black/30 h-screen z-10 w-screen flex justify-center items-center top-0 right-0  '>
          <div className='bg-white p-4 md:w-160 sm:h-85 max-h-115  md:top-[20%] lg:right-[50%] md:right-340 md:bottom-[130%] lg:left-[30%] md:left-22 left-3 right-3 top-60 bottom-3 hover:none justify-center fixed rounded-2xl'>
            <div className='flex md:gap-2 md:flex-row flex-col gap-y-25'>
            <div className='flex flex-col gap-4 '>
              <h2 className='text-xl font-bold'>{title}</h2>
              <p className='text-md font-semibold'>{paragraph} </p>
              <ul>
                <li>{li}</li>
                <li>{li1}</li>
                  <li>{li2}</li>
                    <li>{li3}</li>
                      <li>{li4}</li>
                        <li>{li5}</li>
              </ul>
              
            </div>
            <div className='items-center -top-40 text-center flex gap-3 '>
              <div className='flex flex-col gap-5 '>
              <h1 className='-mt-20 text-xl font-semibold text-start'>Tecnologies</h1>
              <div className='flex flex-wrap gap-5'>
             <button className ="inline-flex items-center justify-center gap-2 px-3
              py- bg-gray-100 text-black rounded-4xl ">
             {button1} </button>
              <button className='inline-flex items-center justify-center gap-2 px-3 py- text-gray-950 bg-gray-100 rounded-4xl   '>
              {button2}</button>
               <button className='inline-flex items-center justify-center gap-2 px-4 py- text-gray-950 bg-gray-100 rounded-4xl   '>
              {button3}</button>
              
              <button className='inline-flex items-center justify-center gap-2 px-4 py- text-gray-950 bg-gray-100 rounded-4xl   '>
              {button5}</button>

              </div>
              </div>
              </div>
            </div>
            <div className='absolute top-2 right-2 cursor-pointer'>
              < FiX  size={19} onClick={()=>setShowModel(false)}/>
            </div>
          </div>

         </div>
      )
      }
      
    </div>
  ) 
}

export default ProjectCard
