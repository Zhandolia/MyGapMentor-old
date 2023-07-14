import React from 'react';
import './App.css';

function Contact() {
  return (
      <div id="grad1" className="App">
          <div className="navbar">
              <a href="/">Home</a>
              <a href="about">About us</a>
              <a href="stories">Success Stories</a>
              <a href="plans">Plans</a>
              <a href="contact">Contact us</a>
              <a href="account">Account</a>
          </div>
          <h2>Contact</h2>
          <div className="contact-container">
              <h4>Feel free to email us at:</h4>
              <p>mygapmentor@gmail.com</p>
              <h4>Or, you can leave a message below:</h4>
              <form className="contact-form">
                  <input type="text" name="name" placeholder="Your name" required />
                  <input type="email" name="email" placeholder="Your email" required />
                  <textarea name="message" placeholder="Your message" required></textarea>
                  <button type="submit">Send Message</button>
              </form>
          </div>
      </div>
  );
}

export default Contact;
