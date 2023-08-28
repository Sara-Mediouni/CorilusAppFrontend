import React from 'react'
import axios from 'axios';
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import img1 from '../imagemedico/techny-signed-insurance-policy (2).gif'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";
function Question() {
    let [identifiant, setIdentifiant] = React.useState();
    let [doctor, setDoctor] = React.useState();
    let [token, setToken] = React.useState([]);
    const [Email,setEmail]=React.useState('');
    const [FirstName,setFirstname]=React.useState('');
    const [LastName,setLastName]=React.useState('');
    const [Question,setQuestion]=React.useState('');
    function getPatient(){
        axios.get('http://localhost:8080/api/v1/patient/getbyident/'+identifiant)
        
        .then(function (response) {
          console.log(response.data);
            setDoctor(response.data.id);
            setEmail(response.data.identifiant);
            setFirstname(response.data.firstname);
            setLastName(response.data.lastname)
        })
          }
          const AddQuestion = (e) => {
            e.preventDefault();
            
            axios.post("http://localhost:8080/api/v1/patient/add/"+doctor, {
             
              question: Question
            })
            .then((response) => {
             alert("Question added");
            
            }).catch((error) => {
              alert("Error adding question ",error);
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
  
 
  
}, [doctor,identifiant]);
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
                        <h3>Ask a question</h3>
                        <form onSubmit={AddQuestion}>
                            <div class="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder={FirstName+" "+LastName} onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Name'"/>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" placeholder={Email} onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email'" /> 
                            </div>
                            <div class="form-group">
                                <label>Question</label>
                                <textarea name="message" cols="20" rows="7"  placeholder="Question" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Message'" required
                                ></textarea>
                            </div>
                            <button type='submit' class="main_btn">Post Question</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
     

    </div>
</section>
  )
}

export default Question