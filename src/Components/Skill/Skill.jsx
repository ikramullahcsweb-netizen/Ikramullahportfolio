import React from 'react'
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbTablePlus } from "react-icons/tb";
import { SiPrisma } from "react-icons/si";
import { SiPostman } from "react-icons/si"; 
import { BiLogoTypescript } from "react-icons/bi";
import { DiResponsive } from "react-icons/di";
import { VscTools } from "react-icons/vsc";



const Skill = () => {
  return (
   <section id='Skill' className='my-25  place-items-center justify-center'>

    <div className='flex flex-col justify-center  my-36'>
         <h1 className=' text-3xl font-bold text-center'>Skill</h1>
         <p className='font-semibold text-center'>My Technical Arsenal</p>
   
        
        <div className='flex flex-col justify-center text-gray-950 flex-wrap mx-5  '>
         <div className='flex flex-wrap   justify-center mt-10 gap-4'>
           <section className='md:w-91 h-40 w-full  bg-white rounded-xl pt-4 '>
            <div className='flex p-3 mx-3 '><FaReact  size={30} /> <span className='pl-3 font-semibold text-2'>Core stack </span> </div>
            <div className='flex gap-2 px-2 text-sm font-normal'>
        
            <button className="inline-flex  justify-start gap-1 px-2 py-1 bg-gray-50 border-1 border-gray-700  rounded-3xl  transition">
             <BiLogoTypescript size={25} />  <span>Typescript</span></button>
             <button className="inline-flex  justify-start gap-1 px-3 py-1 bg-gray-50 border-1 border-gray-700  rounded-3xl  transition">
             <IoLogoJavascript size={20} />  <span>Javascript</span></button>
             </div>
           </section>

           <section className='md:w-91 h-40 w-full  bg-white rounded-xl pt-4 '>
            <div className='flex p-3 mx-4 font-light'> <FaDatabase size={30} /> <span className='pl-3 font-semibold text-2'>Backend & Database </span> </div>
            <div className='flex gap-2 px-2 text-sm font-normal'>
             <button className="inline-flex  justify-start gap-1 px-3 py-1 bg-gray-50 border-1 border-gray-700  rounded-3xl  transition">
                    <FaNodeJs size={20} />  <span>Node.js</span></button>
                      <button className="inline-flex  justify-start gap-1 px-2 py-1 bg-gray-50 border-1 border-gray-700  rounded-3xl  transition">
                    <FaDatabase  size={20} />  <span>MySQL/MongoDB</span></button>
                     
                    </div>
           </section>

            </div>
             
         <div className='flex flex-wrap   justify-center mt-4 gap-4     '>
           
              <section className='md:w-91  h-37 w-full  bg-white rounded-xl '>
            <div className='flex p-3 mx-3 '><FaReact  size={30} /> <span className='pl-3 font-semibold text-2'>Frontend </span> </div>
            <div className='flex gap-2 px-2 flex-wrap text-sm font-normal'>
        
            <button className='inline-flex  justify-start gap-1 px-2 py-1  bg-gray-50 border-1 border-gray-700  rounded-3xl  transition'>
             <FaReact size={20} />  <span>React</span></button>
             <button className='inline-flex  justify-start gap-1 px-2 py-1  bg-gray-50 border-1 border-gray-700  rounded-3xl  transition'>
             <SiTailwindcss size={20} />  <span>Tailwind Css</span></button>
             <button className='inline-flex  justify-start gap-1 px-4 py-1  bg-gray-50 border-1 border-gray-700  rounded-3xl  transition'>
             <FaHtml5 size={20} />  <span>   Html</span></button>
             <button className='inline-flex  justify-start gap-1 px-2 py-1  bg-gray-50 border-1 border-gray-700  rounded-3xl  transition'>
             <DiResponsive size={25} />  <span>Responsive Design</span></button>
             </div>
           </section>
              <section className='md:w-91 h-37 w-full  bg-white rounded-xl'>
            <div className='flex p-3 mx-3  '><VscTools   size={27} /> <span className='pl-2 font-semibold text-2'>Tools </span> </div>
            <div className='flex gap-2 px-2 flex-wrap text-sm font-normal'>
            
            <button className='inline-flex justify-start gap-1 px-2 py-1 bg-gray-50 border-1 border-gray-700  rounded-3xl  transition '>
             <FaGithub size={20} />  <span>Git/GitHub</span></button>
             <button className='inline-flex  justify-start gap-1 px-2 py-1 bg-gray-50 border-1 border-gray-700  rounded-3xl  transition'>
             <VscVscode size={20} />  <span>Vs Code</span></button>
             <button className='inline-flex  justify-start gap-1 px-2 py-1 bg-gray-50 border-gray-700 border-1  rounded-3xl  transition'>
             <SiPostman size={20} />  <span>Postman</span></button>
             <button className='inline-flex  justify-start gap-1 px-2 py-1 bg-gray-50 border-1 border-gray-700  rounded-3xl transition'>
             <TbTablePlus  size={20} />  <span>TablePLus</span></button>
             <button className='inline-flex  justify-start gap-1 px-2 py-1 bg-gray-50 border-1 border-gray-700  rounded-3xl  transition'>
             <SiPrisma size={20} />  <span>Prisma Studio</span></button>
             </div>
           </section>
            
           
           </div>
      
      
       </div>




      </div>
       </section>
  )
}

export default Skill
