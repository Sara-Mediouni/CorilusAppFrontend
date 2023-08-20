import React from 'react'
import img from '../imagemedico/logo (1).png'
import '../css/style.css'
import { useState } from 'react';
import {BsPersonFill} from 'react-icons/bs'
function Navbar() {
   
        const[fix,setfix]=useState(false)
      function setfixed(){
      if(window.scrollY > 50){
        setfix(true);
      }else{
       setfix(false);
      }}
      window.addEventListener("scroll",setfixed)
  return (
    <header className={fix ? "main_menu home_menu menu_fixed animated fadeInDown":"main_menu home_menu"}>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-12">
    <nav className="navbar navbar-expand-lg  " style={{borderColor:"transparent"}} >
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
            <BsPersonFill size="30px"/>
            </li>
        </ul>
    </div>
   
</nav>
</div>
</div></div></header>
  )
}

export default Navbar