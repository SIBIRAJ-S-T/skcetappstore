import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './FrontPage.css';
import PreventInspect from './PreventInspect';

const Front = () => {

  const navigate = useNavigate();

  const GoLogin = () => {
    navigate('/Login')
  }

  const GoSignup = () => {
    navigate('/Signup')
  }


  return (
    <div className='fpmaincontainer'>
      <header className='fphead'>
        <h1>SKCET App Store</h1>
      </header>
      <nav className='fpnav'>
        <div className="fpnav1">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Terms and conditions</a>
          <a href="#">Contact</a>
        </div>
        <div className="fpnav2">
          <a onClick={GoLogin}>Login</a>
          <a onClick={GoSignup}>SignUp</a>
        </div>
      </nav>
      <div className="fpcontainer">
        <h1>Showcase Your App in <br/> SKCET App Store</h1>
        <button onClick={GoSignup}>Get Started</button>
      </div>
      {/*To prevent user to right click or use ctrl+shift+I or etc*/}
      <section>
          <h3></h3>
      </section>
    </div>
  );
}

export default Front;
