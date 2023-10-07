import React, { useEffect } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBadge, MDBTable, MDBTableHead, MDBTableBody 
} from 'mdb-react-ui-kit';
import {
  
    Select,
    
  } from "@chakra-ui/react";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate, useParams } from 'react-router-dom';

export default function ProfileEdit() {
  const [identifiant, setIdentifiant] = React.useState();
  let [doctor, setDoctor] = React.useState({});
  let [token, setToken] = React.useState([]);
  const [Firstname, setFirstname] = React.useState(null);
  const [Lastname, setLastname] = React.useState(null);
  const [Address, setAdress] = React.useState(null);
  const [Email, setEmail] = React.useState(null);
  const [Tel, setTel] = React.useState(null);
  const [Genre, setGender] = React.useState(null);
  const [Password,setPassword]=React.useState(null);
  const [ConfirmPassword,setConfirmPassword]=React.useState(null);
  const {Id} =useParams();
  let navigate=useNavigate();
  const [selectedOption, setSelectedOption] = React.useState(null);
function getPatient(){
  axios.get('http://localhost:8080/api/v1/patient/getbyident/'+identifiant)
  
  .then(function (response) {
    console.log(response.data);
      setDoctor(response.data);
  
      
  }).catch((error) => {
   
    console.log(error);
  });
    }
    function Edit(e){
      e.preventDefault();
      const headers = {
        'Content-Type': 'application/json',
        // You can add other headers here if needed
      };
        axios.put('http://localhost:8080/api/v1/patient/update/'+Id, {
          
            firstname:Firstname,    
            lastname:Lastname,
            address:Address,
            tel:Tel,
            gender:selectedOption,
            identifiant:Email,
            password:Password
        }, {
          headers: headers,
        }
        )
        
        .then(function (response) {
          console.log(response);
          navigate('../profile', { replace: true });
           
      
            
        }).catch((error) => {
          alert(error)
          console.log(error);
        });
          }
useEffect(() => 
{ const token = localStorage.getItem('jwtToken');
if (token) {
 setToken(token);
}
console.log(token);
const decoded = jwt_decode(token);

setIdentifiant(decoded.sub);
getPatient();
  console.log(doctor);

  

  
},[identifiant,token,doctor]);




  return (
    <section style={{ backgroundColor: '#eee' ,marginTop:"100px"}}>
      <MDBContainer className="py-5">
       

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
              
                  src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '100px',marginLeft:"140px" }}
                  fluid />
            
                <p className="text-muted mb-4">{doctor.firstname+" "+doctor.lastname}</p>
                
              </MDBCardBody>
            </MDBCard>

            
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
              <form onSubmit={(e) => {
      e.preventDefault();
      if (Password === ConfirmPassword) {
        Edit(e);
      } else {
        alert("Passwords don't match");
      }
    }}>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>First Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                   <input placeholder={doctor.lastname} onChange={(e)=>{setFirstname(e.target.value);console.log(Firstname)}}/> 
                  </MDBCol>
                  </MDBRow>
                  <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Last Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                   <input placeholder={doctor.firstname} onChange={(e)=>{setLastname(e.target.value)}}/> 
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <input placeholder={doctor.identifiant} onChange={(e)=>{setEmail(e.target.value)}}/> 
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <input placeholder={doctor.tel} onChange={(e)=>{setTel(e.target.value)}}/> 
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Password</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/> 
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Confirm password</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <input type="password" onChange={(e)=>{setConfirmPassword(e.target.value)}}/> 
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Gender</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <Select placeholder='Select gender' value={selectedOption}
                    onChange={e => setSelectedOption(e.target.value)}>
                 <option value='Female'>Female</option>
                 <option value='Male'>Male</option>
 
                </Select>
                  </MDBCol>
              </MDBRow> 
              <button type="submit" className="btn" style={{marginLeft:"300px",backgroundColor:"#329963",color:"#fff",marginTop:"20px",width:"200px"}}>Edit</button>
              
              </form> 
              </MDBCardBody>
            </MDBCard>

         
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}