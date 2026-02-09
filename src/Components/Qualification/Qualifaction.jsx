import React from 'react' 

import { HiComputerDesktop } from "react-icons/hi2";
import { FaUniversity,FaBriefcase } from "react-icons/fa";
import { PiGraduationCapFill } from "react-icons/pi";


const qualifications = [
  {
    title: "Frontent Intern",
    company: "Frelancing",
    date: "jan 2026 – Present",
    icon:<FaBriefcase size={22} />,
  },
  {
    title: "Frontent start",
    company: "From youtube",
    date: "Sep 2024 – Dec 2025",
    icon:<HiComputerDesktop size={25} />,
  },
  {
    title: "Bachelors",
    company: "University of Peshawar",
    date: "Sep 2022 – Present",
    icon:<FaUniversity size={25} />,
  },
  {
    title: "Intermediate",
    company: "GPGJC Swat",
    date: "Sep 2019 – Jun 2021",
    icon:<PiGraduationCapFill size={25} />,
  },
];


const Qualifaction = () => {
  return (
       <section id='Portfolio' className=''>
      <div className="max-w-2xl mx-auto px-4 ">
        
      
        <h2 className='text-3xl font-bold text-center'>Qualifications</h2>
        <p className='text-center text-gray-900 mt-2'>
          My Personal Journey
        </p>

        <div className='relative mt-10'>
          
  
          <div className='absolute bg-gray-600 left-1/2 transform -translate-x-1/2 w-0.5 h-full font-light'></div>

          {qualifications.map((item, index) => (
            <div
              key={index}
              className={`flex items-center text-end mb-1  ${
                index % 2 === 0 ? "flex-row-reverse text-start" : ""
              }`}
            >
           
             <div className='w-1/2 md:px-3 sm:px-8 px-2 '>
                <div className=' p-3  '>
                  <h3 className='font-semibold sm:text-xl text-sm'>{item.title}</h3>
                  <p className='text-gray-800'>{item.company}</p>
                  <span className="text-sm text-gray-800">{item.date}</span>
                </div>
              </div>
                
                  <div className='relative z-10 rounded-3xl border-2 justify-center flex items-center font-light'>
                <div className='w-8 h-8 rounded-4xl  flex items-center bg-gray-50 justify-center text-center md:pl-0.5 md:pt-1  '>
                 <span className='w-7 h-7 object-contain rounded-3xl items-center justify-center  text-center p-0' > {item.icon}
                  </span> 
                </div>
              </div>
              <div className='w-1/2'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



export default Qualifaction
