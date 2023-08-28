import React from 'react'
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
  import img1 from '../imagemedico/5672794-ai.svg'
  import axios from 'axios';
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
function QuestionUser() {
    let [identifiant, setIdentifiant] = React.useState();
    let [doctor, setDoctor] = React.useState();
    let [token, setToken] = React.useState([]);
    
    const [Question,setQuestion]=React.useState([]);
    function getPatient(){
        axios.get('http://localhost:8080/api/v1/patient/getbyident/'+identifiant)
        
        .then(function (response) {
          console.log(response.data);
            setDoctor(response.data.id);
            
        })
          }
          function getPatient(){
            axios.get('http://localhost:8080/api/v1/question/all/1')
            
            .then(function (response) {
             setQuestion(response.data);
            }).catch((error) => {
                console.log(error);})
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
            
           
            
          }, [doctor,identifiant,Question]);

  return (
    <div>

    <section className="banner_part" style={{height:"50%"}}>
        <div className="container">
            <div className="row align-items-center">
            
                <div className="col-lg-7"  style={{marginTop:"150px"}}>
                    <div className="banner_img" >
                        <img src={img1} alt=""/>
                    </div>
              
            </div>
        
          <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        
            <h2 style={{color:"#329963"}} className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Your Questions</h2>
   
      <MDBContainer className="py-5" >
     {Question.map((question) => (
        <MDBRow style={{display:"flex",alignItems:"left",justifyContent:"left",width:"100%"}}>
          <MDBCol md="6" lg="6" xl="6" style={{marginTop:"50px"}}>
            <MDBCard >
              <MDBCardBody>
                <div className="d-flex flex-start align-items-center">
                
                  <div>
                    <h6 className="fw-bold mb-1" style={{color:"#329963"}}>{question.patient.firstname+" "+question.patient.lastname}</h6>
                    <p className="text-muted small mb-0">
                    {question.date}
                    </p>
                  </div>
                </div>

                <p className="mt-3 mb-4 pb-2">
               {question.question}
                </p>
                <h6 className="fw-bold mb-1" style={{color:"#329963"}}>Comments</h6>
              {question.comments.map((comment) => (
                <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="10" xl="8" style={{marginTop:"50px"}}>
            <MDBCard>
              <MDBCardBody>
                <div className="d-flex flex-start align-items-center">
                
                  <div>
                    <h6 className="fw-bold mb-1" style={{color:"#329963"}}></h6>
                    <p className="text-muted small mb-0">
                  {comment.date}
                    </p>
                  </div>
                </div>

                <p className="mt-3 mb-4 pb-2">
           {comment.comment}
                </p>

              
              </MDBCardBody>

              <MDBCardFooter
                className="py-3 border-0"
                style={{ backgroundColor: "#f8f9fa" }}
              >
              
               
                                </MDBCardFooter>
    
                         
                              </MDBCard>
                            </MDBCol>
                          </MDBRow>
              ))}
              </MDBCardBody>

              <MDBCardFooter
                className="py-3 border-0"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex flex-start w-100">
                
                  <MDBTextArea placeholder="Message"  id='textAreaExample' rows={4} style={{backgroundColor: '#fff'}} wrapperClass="w-100" />
                </div>
             
                </MDBCardFooter>
    
                         
                              </MDBCard>
                            </MDBCol>
                          </MDBRow>
  
    ))}
                        </MDBContainer>
                        </div>
</section>
    </div>
  </div> 


</section>

    </div>

     
  )
}

export default QuestionUser