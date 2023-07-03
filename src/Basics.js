// import React from 'react';
// import './App.css';

// function Basics(){
//     return(
//     <div id="grad1" className="App">
//       <div className="navbar">
//         <a href="/">Home</a>
//         <a href="about">About us</a>
//         <a href="stories">Success Stories</a>
//         <a href="plans">Plans</a>
//         <a href="contact">Contact us</a>
//         <a href="signin">Sign in</a>
//       </div>
    
//     <h2>Let's start with basics.</h2>

//         <html>
//         <head>
//         <title>Category Boxes</title>
//         </head>
//         <body>
//         <div class="box">
//             <label for="major">Major?</label>
//             <select id="major">
//             <option value="Computer Science">Computer Science</option>
//             <option value="Engineering">Engineering</option>
//             <option value="Biology">Biology</option>
//             </select>
//             <button onclick="addCategory('major')">Select</button>
//         </div>

//         <div class="box">
//             <label for="volunteering">Volunteering?</label>
//             <button onclick="addCategory('volunteering')">Add</button>
//         </div>

//         <div class="box">
//             <label for="internships">Internships?</label>
//             <button onclick="addCategory('internships')">Add</button>
//         </div>

//         <div class="box">
//             <label for="jobs">Jobs?</label>
//             <button onclick="addCategory('jobs')">Add</button>
//         </div>

//         <div class="box">
//             <label for="research">Research projects?</label>
//             <button onclick="addCategory('research')">Add</button>
//         </div>

//         <div class="box">
//             <label for="pet">Pet projects?</label>
//             <button onclick="addCategory('pet')">Add</button>
//         </div>

//         <div class="box">
//             <label for="robotics">Robotics?</label>
//             <button onclick="addCategory('robotics')">Add</button>
//         </div>

//         <div class="box">
//             <label for="hackathons">Hackathons?</label>
//             <button onclick="addCategory('hackathons')">Add</button>
//         </div>

//         <script src="script.js"></script>
//         </body>
//         </html>


//     </div>
//     )
// }

// export default Basics

import React, { useState } from 'react';
import './App.css';

function Basics() {
  const [categoryData, setCategoryData] = useState({ volunteering: { showForm: true, events: [{}] }, internships: {showForm: true, events: [{}]} });

  function addCategory(category) {
    setCategoryData((prevData) => ({
      ...prevData,
      [category]: {
        ...prevData[category],
        showForm: true, 
        events: [...prevData[category].events, {}]
      },
    }));
  }

  function handleInputChange(category, eventIndex, field, value) {
    setCategoryData((prevData) => ({
      ...prevData,
      [category]: {
        ...prevData[category],
        events: prevData[category].events.map((event, index) => {
          if (index === eventIndex) {
            return { ...event, [field]: value };
          }
          return event;
        }),
      },
    }));
  }

  function handleAddEvent(category) {
    setCategoryData((prevData) => ({
      ...prevData,
      [category]: {
        ...prevData[category],
        events: [...prevData[category].events, {}],
      },
    }));
  }

  function handleRemoveEvent(category, eventIndex) {
    setCategoryData((prevData) => ({
      ...prevData,
      [category]: {
        ...prevData[category],
        events: prevData[category].events.filter(
          (_, index) => index !== eventIndex
        ),
      },
    }));
  }

  return (
    <div id="grad1" className="App">
      <div className="navbar">
        <a href="/">Home</a>
        <a href="about">About us</a>
        <a href="stories">Success Stories</a>
        <a href="plans">Plans</a>
        <a href="contact">Contact us</a>
        <a href="signin">Sign in</a>
      </div>

      <h2>Let's start with basics.</h2>

        <div className="category-container">
        <div className="category-box">
            <h3>Major</h3>
            <select id="major">
            <option value="">Select a major</option>
            <option value="Biology">Biology</option>
            <option value="Business Administration">Business Administration</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Communications">Communications</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Economics">Economics</option>
            <option value="Education">Education</option>
            <option value="Engineering">Engineering</option>
            <option value="English">English</option>
            <option value="Environmental Science">Environmental Science</option>
            <option value="Fine Arts">Fine Arts</option>
            <option value="History">History</option>
            <option value="Journalism">Journalism</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Music">Music</option>
            <option value="Nursing">Nursing</option>
            <option value="Physics">Physics</option>
            <option value="Political Science">Political Science</option>
            <option value="Psychology">Psychology</option>
            <option value="Sociology">Sociology</option>
            {/* Add more options here */}
            </select>
        </div>
        </div>

      <div className="category-container">
        <div className="category-box" style={{ width: '550px' }}>
            <h3>Volunteering</h3>
            {categoryData.volunteering?.showForm ? (
            <div>
                {categoryData.volunteering.events.map((event, index) => (
                <div key={index}>
                    <label id='volunteering-label'>How did you contribute?</label>
                    <input
                    type="text"
                    value={event.description || ''}
                    onChange={(e) =>
                        handleInputChange('volunteering', index, 'description', e.target.value)
                    }
                    />
                    {index > 0 && (
                    <button onClick={() => handleRemoveEvent('volunteering', index)}>
                        Remove
                    </button>
                    )}
                </div>
                ))}
                <button onClick={() => handleAddEvent('volunteering')}>Add</button>
                <br />
            </div>
            ) : (
            <button onClick={() => addCategory('volunteering')}>
                {categoryData.volunteering?.events.length > 0 ? 'Add More' : 'Add'}
            </button>
            )}
        </div>
        </div>

        <div className="category-container">
        <div className="category-box" style={{ width: '550px' }}>
            <h3>Internships</h3>
            {categoryData.internships?.showForm ? (
            <div>
                {categoryData.internships.events.map((event, index) => (
                <div key={index}>
                    <label id='internships-label'>What did you do?</label>
                    <input
                    type="text"
                    value={event.description || ''}
                    onChange={(e) =>
                        handleInputChange('internships', index, 'description', e.target.value)
                    }
                    />
                    {index > 0 && (
                    <button onClick={() => handleRemoveEvent('internships', index)}>
                        Remove
                    </button>
                    )}
                </div>
                ))}
                <button onClick={() => handleAddEvent('internships')}>Add</button>
                <br />
            </div>
            ) : (
            <button onClick={() => addCategory('internships')}>
                {categoryData.internships?.events.length > 0 ? 'Add More' : 'Add'}
            </button>
            )}
        </div>
        </div>

        <button id="generate-activities">Generate Activities</button>

    </div>
  );
}

export default Basics;