import React from 'react'
import Navbar from './Navbar'
import '../css/style.css'
import Banner from './banner'
import About from './about'
import Footer from './footer'
import Services from './services'
import Appointment from './appointment';
import img2 from "../imagemedico/Teal Illustration Digital Business Blog Banner.svg"
import Question from './Question'
function Home() {
  return (
    <div >


    <Banner/>
     <Services/>
   <About/>
   
    
  
    
    </div>
  )
}

export default Home