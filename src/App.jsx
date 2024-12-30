import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import How from './Component/How'
import Courses from './Component/Courses'
import Intern from './Component/Intern'
import Hand from './Component/hand'
import About from './Component/About'
import WhatsApp from './Component/Whatsapp'



const App = () => {
  return (
    <div > 
      <Navbar/>
      <Home/>
      <How/>
      <Courses/>
       <Intern/>
      <Hand/>
      <About/>
      <WhatsApp/>

      
      
    </div>
  )
}

export default App