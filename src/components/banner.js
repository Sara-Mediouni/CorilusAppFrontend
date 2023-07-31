import React from 'react'
import img1 from "../imagemedico/3568982-ai.svg"

import '../css/style.css'

function Banner() {
  return (
    <section class="banner_part" style={{marginBottom:"50px"}}>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-5 col-xl-5">
                <div class="banner_text">
                    <div class="banner_text_iner">
                        <h5>We are here for your care</h5>
                        <h1>Best Care &
                            Better Doctor</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.Risus cmodo viverra </p>
                        <a href="#" class="btn_2">Make an appointment</a>

                    </div>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="banner_img" >
                    <img src={img1} alt=""/>
                </div>
            
        </div>
      
    </div> 
  </div> 

</section>
  )
}

export default Banner