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
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate, useParams } from 'react-router-dom';

export default function ProfilePage() {
  let [identifiant, setIdentifiant] = React.useState();
  let [doctor, setDoctor] = React.useState({});
  let [token, setToken] = React.useState([]);
  let [id, setId] = React.useState("");
  let [appointment, setAppointment] = React.useState([]);
  let navigate=useNavigate()
function getPatient(){
  axios.get('http://localhost:8080/api/v1/patient/getbyident/'+identifiant)
  
  .then(function (response) {
    console.log(response.data);
      setDoctor(response.data);
      setId(response.data.id)
      
  }).catch((error) => {
   
    console.log(error);
  });
    }
    function navigateee(){
      navigate('../editprofile/'+id, { replace: true })
    }
    function getAppointment(){
      axios.get('http://localhost:8080/api/v1/appointment/patient/'+id)
      
      .then(function (response) {
        console.log(response.data);
         setAppointment(response.data);
          
      }).catch((error) => {
     
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
  getAppointment();
  

  
},[identifiant,doctor,token]);

function deleteAppointment(id){
  axios.delete('http://localhost:8080/api/v1/appointment/delete/'+id)
      
  .then(function (response) {
    console.log(response);
     
      
  }).catch(function (error) {
    alert("error",error);
  });
    }


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
      
             <button onClick={navigateee} style={{width:"200px",height:"50px",borderRadius:"5px",color:"#fff",marginLeft:"100px",backgroundColor:"#329963"}}>Edit Profile
            </button>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{doctor.firstname+" "+doctor.lastname}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{doctor.identifiant}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{doctor.tel}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                
                
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Gender</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{doctor.gender}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
             
<MDBCard>
              <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Date</th>
          <th scope='col'>Nom médecin</th>
          <th scope='col'>Tel médecin</th>
          <th scope='col'>Adresse médecin</th>
          <th scope='col'>Status</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {appointment.map((appointment) => (
        <tr>
          <td>
            
                <p className='text-muted mb-0'>{appointment.dateApp}</p>
             
          </td>
      
          <td>
            <p className='fw-normal mb-1'>{appointment.doctor.lastname}</p>
          
          </td>
          <td>
            <p className='fw-normal mb-1'>+32 25486266</p>
           
          </td>
          <td>
            <p className='fw-normal mb-1'>Belgium</p>
           
          </td>
          
          <td>
  {appointment.status === "Accepted" && <MDBBadge color='success' pill>{appointment.status}</MDBBadge>}
  {appointment.status === "Pending" && <MDBBadge color='warning' pill>{appointment.status}</MDBBadge>}
  {appointment.status === "Refused" && <MDBBadge color='danger' pill>{appointment.status}</MDBBadge>}
</td>
        
          <td>
            <MDBBtn onClick={()=>deleteAppointment(appointment.id)} color='danger' rounded size='sm'>
              Delete
            </MDBBtn>
          </td>
        </tr>
      ))}
      </MDBTableBody>
    </MDBTable></MDBCard>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}