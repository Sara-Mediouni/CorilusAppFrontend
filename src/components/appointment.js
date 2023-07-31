import React from 'react'
import img1 from '../imagemedico/techny-online-doctors-consultation (3).gif'
import '../css/style.css'
function Appointment() {
  return (
    <section class="appointment-area" style={{marginBottom:"50px"}} >
    <div class="container">

        <div class="appointment-inner">
            <div class="row">
                <div class="col-sm-12 col-lg-5 offset-lg-1">
                  <img src={img1} alt=""/>
                </div>
                <div class="col-lg-5">
                    <div class="appointment-form">
                        <h3>Make an Appointment</h3>
                        <form action="#">
                            <div class="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="Your Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Name'" required/>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Your Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email'" required/> 
                            </div>
                            <div class="form-group">
                                <label>Doctor</label>
                                <input name="message" cols="20" rows="7"  placeholder="Doctor" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Message'" required/>
                            </div>
                            <a href="#" class="main_btn">Make an Appointment</a>
                        </form>
                    </div>
                </div>
            </div>

        </div>


    </div>
</section>
  )
}

export default Appointment