import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Bg from '../../assets/profile picture.png'
import TextChange from './TextChange';
import { FaRegPaperPlane } from "react-icons/fa";
import { PiMinus } from "react-icons/pi";


const Home = () => {
  return (

    <section id="home" className='container grid lg:pl-35 px-10  md:grid-cols-[auto_1fr_1fr] grid-cols-3 md:gap-x-10 gap-8 lg:gap-x-25  [70vh] md:mt-45 mb-15'>
    <ul className='inline-grid h-1/3 my-auto md:flex-col-center gap-y-4 text-[1.5rem]      text-title mb-15'>
     <li>
      <a className='' href="https://wa.me/qr/HBHXS5AFLMV4J1">
               <FaWhatsapp  size={25} />    </a>
      </li>
      <li>
        <a className='' href="https://github.com/ikramullahcsweb-netizen">
             <FaGithub  size={25} /> </a></li>
       <li>
       <a className='' href="https://www.linkedin.com/in/ikram-ullah-272171392?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn size={25} /> </a> </li>
    </ul>
   
    <div className='flex-col-center md:items-start  justify-center items-center md:text-start  gap-y-6   md:mt-0 order-3 md:order-2  mt-10  md:w-90 md:mx-3  mr-10  w-screen text-wrap '><h2 className='text-3xl font-bold text-gray-950 w-90 '><TextChange/></h2>
    <div className='flex-row-center gap-4 font-semibold text-xl '><h6 className='inline-flex pt-5 '> <PiMinus size={30}  /> <span>Frontend Developer </span></h6></div>
    <p className='md:w-auto w-full pr-10'>I am a skill Web Designer with experiance of creating visually appealing and user friendly websites</p>
 
      <a href="#Contact" className='mt-5'> <button className='inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 my-3 text-white rounded-lg hover:bg-gray-950 transition'>
       <span>Say Hello</span>  <FaRegPaperPlane size={30} /> 
      
    </button></a>
      </div>
    <div className='order-2 md:order-3 col-span-5 md:col-span-1 h-full flex-col-center  justify-center'><img className='shadow-[0_35px_35px_rgba(0,0,0,0.4)]  w-70 h-70 items-center text-center justify-center rounded-full'alt="profile-img" src={Bg}/></div>
    </section>
      
     
  )
}

export default Home
