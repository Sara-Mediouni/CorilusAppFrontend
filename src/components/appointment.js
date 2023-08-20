import React from 'react'
import img1 from '../imagemedico/techny-online-doctors-consultation (3).gif'
import '../css/style.css'
import axios from 'axios';
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import './Doctors.css'
function Appointment() {
    const [startDate, setStartDate] = React.useState(new Date());
    const ExampleCustomTimeInput = ({ date, value, onChange }) => (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ border: "solid 1px pink" }}
        />
      );
    let [identifiant, setIdentifiant] = React.useState();
        let [doctor, setDoctor] = React.useState();
        let [token, setToken] = React.useState([]);
        const [Email,setEmail]=React.useState('');
        const [FirstName,setFirstname]=React.useState('');
        const [LastName,setLastName]=React.useState('');
        const [FirstNamedoc,setFirstnamedoc]=React.useState('');
        const [LastNamedoc,setLastNamedoc]=React.useState('');
        const [Question,setQuestion]=React.useState('');
        const { doctorId } = useParams();
    function getPatient(){
        
        axios.get('http://localhost:8080/api/v1/patient/getbyident/'+identifiant)
        
        .then(function (response) {
          console.log(response.data);
            setDoctor(response.data.id);
            setEmail(response.data.identifiant);
            setFirstname(response.data.firstname);
            setLastName(response.data.lastname);

        })
          }
          function getDoctor(){
        
            axios.get('http://localhost:8080/api/v1/doctor/getbyid/'+doctorId)
            
            .then(function (response) {
              console.log(response.data);
                
                setFirstnamedoc(response.data.firstname);
                setLastNamedoc(response.data.lastname);
    
            })
              }  
function addAppointment(e){
    e.preventDefault();
    
    axios.post("http://localhost:8080/api/v1/patient/appointment/"+doctor+'/'+doctorId, {
      dateApp: startDate,
      
    })
    .then((response) => {
      console.log(response.data.token);
      
    
    }).catch((error) => {
      console.log(error);
    });
}
          useEffect(() => 
          { const token = localStorage.getItem('jwtToken');
          if (token) {
           setToken(token);console.log(token);
          const decoded = jwt_decode(token);
          
          setIdentifiant(decoded.sub);
          }
          
          
          getPatient();
            console.log(doctor);
            getDoctor();
           
            
          }, doctor,identifiant,doctorId);

    
  return (
    <div class="doc">
    <section class="appointment-area" style={{marginBottom:"50px",marginTop:"100px"}} >
    <div class="container">

        <div class="appointment-inner">
            <div class="row">
                <div class="col-sm-12 col-lg-5 offset-lg-1">
                  <img src={img1} alt=""/>
                </div>
                <div class="col-lg-5">
                    <div class="appointment-form">
                        <h3>Make an Appointment</h3>
                        <form onSubmit={(e)=>addAppointment(e)}>
                            <div class="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder={FirstName+" "+LastName} />
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" placeholder={Email}  /> 
                            </div>
                            <DatePicker selected={startDate}  showTimeInput
                                customTimeInput={<ExampleCustomTimeInput />} onChange={(date) => setStartDate(date)} />
                            <div class="form-group">
                                <label>Doctor</label>
                                <input name="message" cols="20" rows="7"  placeholder={FirstNamedoc+" "+LastNamedoc} />
                            </div>
                            <button type='submit' class="main_btn">Make an Appointment</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>


    </div>
</section></div>
  )
}

export default Appointment