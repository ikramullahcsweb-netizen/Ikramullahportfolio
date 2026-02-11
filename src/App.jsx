import React from 'react'

import Home from './Components/Home/Home'
import About from './Components/About/About'
import './index.css'


import Skill from './Components/Skill/Skill'
import Qualifaction from './Components/Qualification/Qualifaction'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Scrolldown from './Components/Scrolldown/Scrolldown'
import Project from './Components/Project/Project'
import Navbar from './Components/Navbar/Navbar'




const App = () => {
  return (
    <div className='bg-gray-50 w-full overflow-hidden text-gray-800 w-'>
    
      <Navbar/>
      <Home />
      <Scrolldown/>
      <About />
      <Skill />
       <Project/>
      <Qualifaction/>
      <Contact />
      
      <Footer/>
      

    
    </div>
  )
}

export default App
