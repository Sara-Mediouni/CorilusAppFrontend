import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'
import './Doctors.css'
function Doctors() {
  return (
    <div className='doc'>
    <Navbar/>
    <div class="container" style={{marginTop:"100px"}}>
    <div class="row text-center" >

   
        <div class="col-xl-3 col-sm-6 mb-5"style={{marginTop:"100px"}}>
            
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
      
     
       
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Speciality</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800" style={{textDecoration:'none'}}>Appointment</a>

        </div>
    </div>
</div>

        </div>

    
      
   </div>
 
</div>
    <Footer/>
      </div>
  )
}

export default Doctors