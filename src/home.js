// import React from 'react';
// import './App.css';
// import {Link} from "react-router-dom";
// import logo from './favicon.ico';

// function Home(){
//     return(
//     <div id="grad1" className="App">
//       <div className="navbar">
//         <div className="navbar-left">
//           <div className="home-logo-group">
//             <a href="/">
//               <img src={logo} alt="Logo" className="navbar-logo" />
//             </a>
//             <a href="/">MyGapMentor</a>
//           </div>
//         </div>
//         <div className="navbar-center">
//           <a href="about">About us</a>
//           <a href="stories">Success Stories</a>
//           <a href="plans">Plans</a>
//           <a href="contact">Contact us</a>
//         </div>

//         <div className="navbar-right">
//           <a href="account">Account</a>
//         </div>
//       </div>

//       <h2>Welcome to MyGapMentor.com</h2>
//       <h3 id='gateaway'>Your Gateway to Maximizing Your Gap Year Potential!</h3>

//       <div className='basicdiv'>
//         <a href="/basics" className="big-button-link">
//           <button className="big-button">Ready to Start Planning Your Resume with us? Click Here!</button>
//         </a>
//         <Link to="about" class="learn-about-button">Learn more About us &#8594;</Link>
//         <Link to="plans" class="learn-plans-button">Get to know our Plans &#8594;</Link>
//         <h3 class="nFac">Powered by nFactorial 2023</h3>
//       </div>

//     </div>
//     )
// }

// export default Home

// import React, { useState, useEffect } from 'react';
// import './App.css';
// import {Link} from "react-router-dom";
// import logo from './favicon.ico';

// function Home(){
//     const [lastScrollPosition, setLastScrollPosition] = useState(0);
//     const [isVisible, setIsVisible] = useState(true);

//     useEffect(() => {
//         function handleScroll() {
//             const currentScrollPosition = window.pageYOffset;
//             setIsVisible((lastScrollPosition > currentScrollPosition) || currentScrollPosition < 10);
//             setLastScrollPosition(currentScrollPosition);
//         }

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [lastScrollPosition]);

//     const navbarClasses = `navbar ${isVisible ? 'visible' : 'hidden'}`;

//     return(
//     <div id="grad1" className="App">
//       <div className={navbarClasses}>
//         <div className="navbar-left">
//           <div className="home-logo-group">
//             <a href="/">
//               <img src={logo} alt="Logo" className="navbar-logo" />
//             </a>
//             <a href="/">MyGapMentor</a>
//           </div>
//         </div>
//         <div className="navbar-center">
//           <a href="about">About us</a>
//           <a href="stories">Success Stories</a>
//           <a href="plans">Plans</a>
//           <a href="contact">Contact us</a>
//         </div>

//         <div className="navbar-right">
//           <a href="account">Account</a>
//         </div>
//       </div>

//       <h2>Welcome to MyGapMentor.com</h2>
//       <h3 id='gateaway'>Your Gateway to Maximizing Your Gap Year Potential!</h3>

//       <div className='basicdiv'>
//         <a href="/basics" className="big-button-link">
//           <button className="big-button">Ready to Start Planning Your Resume with us? Click Here!</button>
//         </a>
//         <Link to="about" class="learn-about-button">Learn more About us &#8594;</Link>
//         <Link to="plans" class="learn-plans-button">Get to know our Plans &#8594;</Link>
//         <h3 class="nFac">Powered by nFactorial 2023</h3>
//       </div>

//     </div>
//     )
// }

// export default Home

import React, { useEffect } from 'react';
import './App.css';
import {Link} from "react-router-dom";
import logo from './favicon.ico';

function Home() {
    return (
        <div id="grad1" className="App">
            <div id="navbar" className="navbar">
                <div className="navbar-left">
                    <div className="home-logo-group">
                        <a href="/">
                            <img src={logo} alt="Logo" className="navbar-logo" />
                        </a>
                        <a href="/">MyGapMentor</a>
                    </div>
                </div>
                <div className="navbar-center">
                    <a href="about">About us</a>
                    <a href="stories">Success Stories</a>
                    <a href="plans">Plans</a>
                    <a href="contact">Contact us</a>
                </div>

                <div className="navbar-right">
                    <a href="account">Account</a>
                </div>
            </div>

            <h2>Welcome to MyGapMentor.com</h2>
            <h3 id='gateway'>Your Gateway to Maximizing Your Gap Year Potential!</h3>

            <div className='basicdiv'>
                <a href="/basics" className="big-button-link">
                    <button className="big-button">Ready to Start Planning Your Resume with us? Click Here!</button>
                </a>
                <Link to="about" className="learn-about-button">Learn more About us &#8594;</Link>
                <Link to="plans" className="learn-plans-button">Get to know our Plans &#8594;</Link>
                <h3 className="nFac">Powered by nFactorial 2023</h3>
            </div>
        </div>
    )
}

export default Home;
