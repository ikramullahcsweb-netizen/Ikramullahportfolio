
import imgproject from '../../assets/project image.webp'
import { BsArrowRightShort } from "react-icons/bs";
import { RxTextAlignCenter } from "react-icons/rx";


const ProjectCard = ( {title , main,button1,button2,button3,date,more})  => {
 
     
  return (
    <div className='  md:w-95  md:m-1 h-55  p-2 flex flex-col  mr-1    rounded-xl hover:opacity-60 hover:bg-gray-50 duration-800 hover:scale-103  bg-white border-gray-300 border-1 font-sans '>
      
      <h3 className='px-4 text-xl font-semibold  text-gray-800 py-4 leading-normal'>
        {title}
          </h3>
        <p className=' tracking-normal font-[var(---font-poppins)]  md:text-normal text-gray-700  leading-tight  px-2 '>{main}</p>
        <div className='flex gap-2 md:gap-4 mt-2 p-2 md:p-4'>
       <div className='items-center justify-center text-center flex gap-3'>
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
      <div className='flex gap-16 py-2'>
        <div >{date}</div> 
        <div className='flex  '> {more }<BsArrowRightShort size={20} className='mt-1'/> <RxTextAlignCenter size={15} className='mt-1'/> </div>
        
        
      
      </div>
      
    </div>
  )
}

export default ProjectCard
