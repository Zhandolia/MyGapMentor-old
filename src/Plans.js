import React from 'react';
import './App.css';

function Plans(){
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
      <h2>Plans</h2>
        <div class="plans-container">
    <div class="plan-box">
        <h3>Basic</h3>
        <li>Personalized gap year plan based on your major and interests, considering your current projects.</li>
        <li>Opportunity Recommendations:  list of opportunities that align with your field of study. However, detailed information and external links will not be included.</li>
        <button>Free</button>
    </div>
    <div class="plan-box">
        <h3>Premium</h3>
        <li>All features of Basic plan.</li>
        <li>Detailed Event and Competition Information: Gain access to detailed information and external links for each recommended event or competition. This will allow you to have a deeper understanding of each opportunity and take informed action.</li>
        <button>$4.99</button>
    </div>
    <div class="plan-box">
        <h3>VIP</h3>
        <li>All features of Premium plan.</li>
        <li>Exclusive Event Access: Gain priority access and early registration opportunities to exclusive events, workshops, and internships that are highly sought after in your field.</li>
        <li>Application Assistance: Receive personalized assistance with applications for select opportunities, such as internships or competitive programs, including feedback on your application materials.</li>
        <button>$7.99</button>
    </div>
    </div>

    </div>
    )
}

export default Plans