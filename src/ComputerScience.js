import React from 'react';
import './App.css';

function ComputerScience({categoryData, setCategoryData}){
    console.log(categoryData)
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
      <h2>Computer Science</h2>
    </div>
    )
}

export default ComputerScience