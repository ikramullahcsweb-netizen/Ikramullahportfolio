import React from 'react'
import Bg from '../../assets/profile picture.png'
import Complete from '../../assets/completed-task.png'
import Experiance from '../../assets/awareness.png'
import Support from '../../assets/headset.png'

const About = () => {
  return (
    <section id='About' className='mt-15 text-center  place-items-center justify-center'>
      <h1 className='text-center text-3xl font-bold'>About Me</h1>
      <p className='font-semibold'>My indrouction</p>

 
      
      <div className='flex flex-wrap md:flex-row flex-col  justify-center mt-10 md:gap-10   gap-18  items-center sm:mx-5  '>
        
         <img className='md:w-75 h-70 sm:w-[60%] w-[75%]  lg:pr-0 ml-2 items-center justify-center text-center  rounded-3xl  ' src={Bg} alt='Profile'/>
         <div className='flex-row justify-center items-center'>
          <div className='flex gap-4 md:w-90 justify-center items-center'> 
             <div className='bg-white h-29 w-28 ml-4  font-sans rounded-xl'>
               <img src={Experiance} alt=""  className='h-7 w-7 text-center items-center ml-9 mt-2'/>
              <p className='font-bold pt-'>Experiance </p> 1.5 year experiance</div>
        <div className='bg-white w-28 h-29 rounded-xl'>
          <img src={Complete} alt=""  className='h-7 w-7 text-center items-center ml-9 mt-2'/>
          <p className='font-bold font-sans'>Completed</p>
        <span>5+Projects</span> </div>
         <div className='bg-white h-29 w-26 rounded-xl  '>
           <img src={Support} alt=""  className='h-6 w-6 text-center items-center ml-9 mt-2'/>
           <p className='font-bold justify-items-normal'>Suport</p> <p>
         24/7 online </p></div>
          

         </div>
        
          <p className='mt-8 md:w-80 w-[90%] md:mx-10 mx-5 text-md font-medium items-start text-x md:text-start text-center text-gray-600 '>Frontend Developer dedicated to building fast, accessible web applications using React and Tailwind CSS to bridge the gap between clean design and functional code..</p>
         </div>
         
     
    </div>

     </section>
  )
}

export default About
