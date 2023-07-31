import React from 'react'
import img1 from "../imagemedico/3626223-ai.svg"
import img2 from "../imagemedico/icon/banner_1.svg"
import img3 from "../imagemedico/icon/banner_2.svg"
import img4 from "../imagemedico/icon/banner_3.svg"
function About() {
  return (
    <div>


<section class="about_us single_about_padding" style={{marginBottom:"50px"}}>
    <div class="container">
        <div class="row justify-content-between align-items-center">
            <div class="col-md-6 col-lg-6">
                <div class="about_us_img">
                    <img src={img1} alt=""/>
                </div>
            </div>
            <div class="col-md-6 col-lg-5">
                <div class="about_us_text">
                    <h2>About us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        Quis ipsum suspendisse ultrices gravida. Risus cmodo viverra
                        maecenas accumsan lacus vel</p>
                    <a class="btn_2 " href="#">learn more</a>
                    <div class="banner_item">
                        <div class="single_item">
                            <img src={img2} alt=""/>
                            <h5>Emergency</h5>
                        </div>
                        <div class="single_item">
                            <img src={img3} alt=""/>
                            <h5>Appointment</h5>
                        </div>
                        <div class="single_item">
                            <img src={img4} alt=""/>
                            <h5>Qualfied</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
  )
}

export default About