import React,{useEffect} from 'react'
import img from '../imagemedico/logo (1).png'
import '../css/style.css'
import { BellIcon, SearchIcon } from "@chakra-ui/icons";
import { useState } from 'react';
import {BsPersonFill} from 'react-icons/bs'
import {BiSolidLogOut} from 'react-icons/bi'
import { ItemContent } from "../components/ItemContent";
import axios from 'axios';
import {
    
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Button
  } from "@chakra-ui/react";
  import jwt_decode from "jwt-decode";

function Navbar() {
    let [notif, setNotif] = React.useState([]);
    let [nmb, setNmb] = React.useState(0);
    let [identifiant, setIdentifiant] = React.useState();
    let [patient, setPatient] = React.useState();
    let [token, setToken] = React.useState([]);
    const isAuthenticated = localStorage.getItem('jwtToken'); // Check if token exists
    function Logout(){
        localStorage.removeItem('jwtToken');
        window.location.href = "/login";
      }
      function getPatient(){
        axios.get('http://localhost:8080/api/v1/patient/getbyident/'+identifiant)
        
        .then(function (response) {
          console.log(response.data);
            setPatient(response.data.id);
            
        }).catch((error) => {
        
          console.log(error);
        });
          }
      function getNotif(){
        axios.get('http://localhost:8080/api/v1/notification/findbypatient/'+patient)
        
        .then(function (response) {
          console.log(response.data);
          setNotif(response.data);
          const newNmb = response.data.length;
          setNmb(newNmb);
          localStorage.setItem('notificationCount', newNmb);
        }).catch((error) => {
        
          console.log(error);
        });
          }
        const[fix,setfix]=useState(false)
      function setfixed(){
      if(window.scrollY > 50){
        setfix(true);
      }else{
       setfix(false);
      }}
      window.addEventListener("scroll",setfixed)
function remiseazero(){
    setNmb(0); // Reset nmb state
    localStorage.setItem('notificationCount', 0); // Reset localStorage
}
function markNotificationAsRead(notificationId) {
    // ... Logic to mark the notification as read ...
  
    // After marking as read, update nmb state and localStorage
    setNmb(previousNmb => Math.max(previousNmb - 1, 0));
    localStorage.setItem('notificationCount', nmb - 1); // Update localStorage
  }
      useEffect(() => 
{ const token = localStorage.getItem('jwtToken');
if (token) {
 setToken(token);
}
console.log(token);
const decoded = jwt_decode(token);

setIdentifiant(decoded.sub);
console.log(decoded.sub);
getPatient();
  console.log(patient);
  
getNotif();
const savedNmb = localStorage.getItem('notificationCount');
  if (savedNmb !== null) {
    setNmb(parseInt(savedNmb, 10));}
  
}, identifiant);
  return (
    <header className={fix ? "main_menu home_menu menu_fixed animated fadeInDown":"main_menu home_menu"}>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-12">
    <nav className="navbar navbar-expand-lg"  style={{boxShadow:"none"}}>
    <a className="navbar-brand" href="/home"> 
    <img src={img} alt="logo"/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="navbar-collapse main-menu-item justify-content-center"
        id="navbarSupportedContent">
        <ul className="text-black navbar-nav align-items-center">
            <li className="nav-item text-black active">
                <a className="nav-link" href="/">Home</a>
            </li>
          
            <li className="nav-item">
                <a className="nav-link" href="/Doctors">Doctors</a>
            </li>

            <li className="nav-item">
                <a className="nav-link " href="/faq">FAQ</a>
            </li>
            <li className="nav-item" style={{marginLeft:"100px"}}>
            <a href="/profile" style={{color:"#000"}}><BsPersonFill size="27px"/></a>
            </li>
            {isAuthenticated ? (
            <li className="nav-item" style={{marginLeft:"100px"}}>
            <a style={{color:"#000"}}><BiSolidLogOut  onClick={() => {Logout()}} size="25px"/></a>
            </li>):''}
            {isAuthenticated ? (  <li className="nav-item" style={{marginLeft:"100px"}}>  <Menu >
        <MenuButton  class="notification" onClick={() => remiseazero()}>
          <BellIcon   w="22px" h="22px" />
          <span class={nmb>0 ? "icon-button__badge":"icon-button__badge--hidden"}>{nmb}</span>
        </MenuButton>
        <MenuList p="16px 8px" style={{backgroundColor:"#fff"}}>
        <Flex flexDirection="column">
    {notif.map((notif) => (
      <MenuItem borderRadius="8px" mb="10px" key={notif.id}>
        <ItemContent
          time={notif.date}
          boldInfo={notif.message}
          // Add a button to mark the notification as read
         />
      </MenuItem>
    ))}
  </Flex>
        </MenuList>
      </Menu></li>):''}
        </ul>
    </div>
   
</nav>
</div>
</div></div></header>
  )
}

export default Navbar