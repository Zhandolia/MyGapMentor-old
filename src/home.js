import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

function Home(){
    return(
    <div id="grad1" className="App">
      <div className="navbar">
        <a href="/">Home</a>
        <a href="about">About us</a>
        <a href="stories">Success Stories</a>
        <a href="plans">Plans</a>
        <a href="contact">Contact us</a>
        <a href="signin">Sign in</a>
      </div>

      <h2>Welcome to MyGapMentor.com</h2>
      <h3>Your Gateway to Maximizing Your Gap Year Potential!</h3>
      <div className='basicdiv'>
      <a href="/basics">      
      <button className="big-button">Ready to Start Planning Your Resume with us? Click Here!</button>
      </a>
      <a href="about" class="learn-about-button">Learn more About us &#8594;</a>
      <a href="plans" class="learn-plans-button">Get to know our Plans &#8594;</a>
      <h3 class="nFac">Powered by nFactorial 2023</h3>
      </div>

    </div>
    )
}

export default Home