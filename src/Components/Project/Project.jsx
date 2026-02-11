import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import { TiTick } from "react-icons/ti";
import { FaRegClock } from "react-icons/fa";

const Project = () => {

  return (
     <section id='Projects' className='my-12 md:mx-3   place-items-center justify-center'>
      
    
        <div className='flex flex-col justify-center '>
             <h1 className=' text-3xl font-bold text-center'>Projects</h1>
             <p className='font-semibold text-center mb-10'>My prime projects</p>
       
            
            <div className='flex md:flex-row sm:flex-col justify-center  font-sans text-gray-800  md:mx-1 flex-wrap mx-5 '>
             <div className='flex flex-wrap   justify-center md:mt-10 lg:gap-10 gap-8 '>
              
              {/* ist box */}
               
               <div className=' h-auto rounded-xl relative md:w-89  w-full  ' >
                 <button className=' absolute -top-1 ml-[68%] sm:ml-[73%] bg-gray-200 text-sm rounded-4xl px-2 -py-8 inline-flex '><span><TiTick size={15} /> </span>Completed</button> 
                 
                
                <ProjectCard
                title="Sharma Gi Travel"
                main="A travel website to online book our ticket and check seats status" 
                 button1="o Html"
                 button2="o Tailwind Css"
                   button3="o React.js"
                   button5="o QR code"
                   date="10/12/2024 -  31/12/2024"
                   more="read more"
                   paragraph="key feather"
                   li="o User profiles and travel carts"
                   li1="o Real-time notifications for admins and users"
                   li3="o Order tracking and returns management"
                   li4="o Printable invoices and report"
                   li5="o Online ticket booking"
                />
             
               </div>
               {/* second box */}
               <div className='  rounded-xl relative md:w-89  w-full  '>
                <button className=' absolute -top-1 sm:ml-[73%] ml-[68%] bg-gray-200 text-sm rounded-4xl px-2 -py-2 inline-flex'><span><TiTick size={17} /> </span> Completed</button>
                 <ProjectCard
                 title="My Portfolio"
                  main="React and Tailwind specialist crafting high-performance, responsive interfaces.

"
                   button1="o Html"
                 button2="o Tailwind Css"
                   button3="o React.js"
                   button5= "o Node.js"
                   date="10/12/2024 -  31/12/2024"
                   more="read more"
                    paragraph="key feather"
                   li="o Show my experiance"
                   li1="o I engineered a high-performance frontend featuring real-time"
                   li3="o Creat Responsive design of any project"
                   li4="o I build high-performance, responsive React applications"
                   li5="o custom animations and seamless API integration."
                    
                   />
                   </div> 
                   </div>  

                   <div className='flex flex-wrap   justify-center md:my-3 mt-7 lg:gap-10 md:mr-1  gap-8 '>
                   {/* 3rd box */}
                   <div className=' h-auto rounded-xl relative  md:w-89  w-full '>
             
                <button className=' absolute -top-1 ml-[68%] sm:ml-[73%] bg-gray-200 text-sm rounded-4xl px-2 -py-8 inline-flex gap-1'><span><FaRegClock size={15} /> </span>Inprogress</button>
                <ProjectCard
                  title="Bacha shoes collection"
                   main="A modern e-commerce project showcasing traditional Pakistani footwear."
                       button1="o Html"
                 button2="o Tailwind Css"
                 button3="o React.js" 
                  button4="o DataBase" 
                  button5="o QR code"
                  date="10/12/2024 -  31/12/2024"
                   more="read more"
                   paragraph="key feather"
                   li="o User profiles and shopping carts"
                   li1="o Real-time notifications for admins and users"
                   li3="o Order tracking and returns management"
                   li4="o Printable invoices and report"
                   li5="0 Staff activation/deactivation by admins"
                   
                   />
                  
               </div>

               {/* 4th box */}
                  <div className=' bg-gray-50 rounded-xl md:mt-0 relative md:w-89  w-full '>
                   <button className=' absolute -top-1 sm:ml-[73%] ml-[68%] bg-gray-200 rounded-4xl px-2 -py-2 text-sm inline-flex '><span><TiTick size={17} /> </span>Completed</button>
                 <ProjectCard
                   title="Tic Toe Game"
                   main="A logic-driven digital classic featuring real-time win detection and responsive design."
                   button1="o Html"
                   button2="o TailwindCss"
                   button3="o React.js"
                   button5="Lucide React"
                   date="10/12/2024 - 31/12/2024"
                   more="read more"
                     paragraph="key feather"
                   li="o responsive layout built with TailwindCSS."
                   li1="o CSS animations for moves and winning strikes."
                   li3="o Real-time win/draw detection via React Hooks."
                   li4="o Responsive 3x3 board using reusable components."
                   li5="o Minimax algorithm for perfect, loss-proof gameplay."
                     
                      />
               </div>
                </div> 
                 
          
           </div>
          
           </div>
    
          
           </section>
  )
}

export default Project
