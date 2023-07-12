import React from 'react';
import './App.css';

function Stories() {
  return (
      <div id="grad1" className="App">
          <div className="navbar">
              <a href="/">Home</a>
              <a href="about">About us</a>
              <a href="stories">Success Stories</a>
              <a href="plans">Plans</a>
              <a href="contact">Contact us</a>
              <a href="signin">Account</a>
          </div>
          <h2>Success Stories</h2>
          <div className="stories-container">
              <div className="story-card">
                  <img src="/barack_columbia.jpg" alt="barack_columbia"/>
                  <h3>Barack Obama</h3>
                  <p>Columbia University</p>
              </div>
              <div className="story-card">
                  <img src="/elon_upenn.jpg" alt="elon_upenn"/>
                  <h3>Elon Musk</h3>
                  <p>University of Pennsylvania</p>
              </div>
              <div className="story-card">
                  <img src="/zuck_harvard.jpg" alt="zuck_harvard"/>
                  <h3>Mark Zuckerberg</h3>
                  <p>Harvard University</p>
              </div>
          </div>
      </div>
  );
}

export default Stories;
