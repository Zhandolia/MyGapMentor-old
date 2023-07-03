import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './About';
import Stories from './Stories';
import Plans from './Plans';
import Contact from './Contact';
import SignIn from './SignIn';
import Basics from './Basics';
import ComputerScience from './ComputerScience';
import { useState } from 'react';

function App() {
  const [categoryData, setCategoryData] = useState({});
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="about" element={<About />} />
      <Route path="stories" element={<Stories />} />
      <Route path="plans" element={<Plans />} />
      <Route path="contact" element={<Contact />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="basics" element={<Basics categoryData={categoryData} setCategoryData={setCategoryData}/>} />
      <Route path="computer-science-internships" element={<ComputerScience categoryData={categoryData} setCategoryData={setCategoryData}/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
