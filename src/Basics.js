import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Basics() {
  const navigate = useNavigate();
  const [selectedMajor, setSelectedMajor] = useState('');

  const [categoryData, setCategoryData] = useState({ 
    volunteering: { showForm: true, events: [{}] }, 
    internships: {showForm: true, events: [{}]},
    pet_projects: { showForm: true, events: [{}] }, 
    research_projects: {showForm: true, events: [{}]},
    jobs: { showForm: true, events: [{}] }, 
    hackathons: {showForm: true, events: [{}]},
    additional_information: {showForm: true, events: [{}]}
   });

   const handleClick = () => {
      switch (selectedMajor) {
          case 'Biology':
              navigate('/Biology');
              break;
          case 'Business Administration':
              navigate('/Business-Administration');
              break;
          case 'Chemistry':
              navigate('/Chemistry');
              break;
          case 'Communications':
              navigate('/Communications');
              break;
          case 'Computer Science':
              navigate('/Computer-Science');
              break;
          case 'Economics':
              navigate('/Economics');
              break;
          case 'Education':
              navigate('/Education');
              break;
          case 'Engineering':
              navigate('/Engineering');
              break;
          case 'English':
              navigate('/English');
              break;
          case 'Environmental Science':
              navigate('/Environmental-Science');
              break;
          case 'Fine Arts':
              navigate('/FineArts');
              break;
          case 'History':
              navigate('/History');
              break;
          case 'Journalism':
              navigate('/Journalism');
              break;
          case 'Mathematics':
              navigate('/Mathematics');
              break;
          case 'Music':
              navigate('/Music');
              break;
          case 'Nursing':
              navigate('/Nursing');
              break;
          case 'Physics':
              navigate('/Physics');
              break;
          case 'Political Science':
              navigate('/Political-Science');
              break;
          case 'Psychology':
              navigate('/Psychology');
              break;
          case 'Sociology':
              navigate('/Sociology');
              break;
          default:
              break;
      }
  }

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
        <a href="signin">Account</a>
      </div>

      <h2 id='basics-title'>Let's start with basics</h2>

        <div className="category-container">
        <div className="category-box">
            <h3>Major</h3>
            <select 
              value={selectedMajor}
              onChange={(e) => setSelectedMajor(e.target.value)}
            >
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

        <div className="category-container">
        <div className="category-box" style={{ width: '550px' }}>
            <h3>Pet projects</h3>
            {categoryData.pet_projects?.showForm ? (
            <div>
                {categoryData.pet_projects.events.map((event, index) => (
                <div key={index}>
                    <label id='pet_projects-label'>What did you do?</label>
                    <input
                    type="text"
                    value={event.description || ''}
                    onChange={(e) =>
                        handleInputChange('pet_projects', index, 'description', e.target.value)
                    }
                    />
                    {index > 0 && (
                    <button onClick={() => handleRemoveEvent('pet_projects', index)}>
                        Remove
                    </button>
                    )}
                </div>
                ))}
                <button onClick={() => handleAddEvent('pet_projects')}>Add</button>
                <br />
            </div>
            ) : (
            <button onClick={() => addCategory('pet_projects')}>
                {categoryData.pet_projects?.events.length > 0 ? 'Add More' : 'Add'}
            </button>
            )}
        </div>
        </div>

        <div className="category-container">
        <div className="category-box" style={{ width: '550px' }}>
            <h3>Research projects</h3>
            {categoryData.research_projects?.showForm ? (
            <div>
                {categoryData.research_projects.events.map((event, index) => (
                <div key={index}>
                    <label id='research_projects-label'>What did you do?</label>
                    <input
                    type="text"
                    value={event.description || ''}
                    onChange={(e) =>
                        handleInputChange('research_projects', index, 'description', e.target.value)
                    }
                    />
                    {index > 0 && (
                    <button onClick={() => handleRemoveEvent('research_projects', index)}>
                        Remove
                    </button>
                    )}
                </div>
                ))}
                <button onClick={() => handleAddEvent('research_projects')}>Add</button>
                <br />
            </div>
            ) : (
            <button onClick={() => addCategory('research_projects')}>
                {categoryData.research_projects?.events.length > 0 ? 'Add More' : 'Add'}
            </button>
            )}
        </div>
        </div>

        <div className="category-container">
        <div className="category-box" style={{ width: '550px' }}>
            <h3>Jobs</h3>
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

        <div className="category-container">
        <div className="category-box" style={{ width: '550px' }}>
            <h3>Hackathons</h3>
            {categoryData.hackathons?.showForm ? (
            <div>
                {categoryData.hackathons.events.map((event, index) => (
                <div key={index}>
                    <label id='hackathons-label'>What did you do?</label>
                    <input
                    type="text"
                    value={event.description || ''}
                    onChange={(e) =>
                        handleInputChange('hackathons', index, 'description', e.target.value)
                    }
                    />
                    {index > 0 && (
                    <button onClick={() => handleRemoveEvent('hackathons', index)}>
                        Remove
                    </button>
                    )}
                </div>
                ))}
                <button onClick={() => handleAddEvent('hackathons')}>Add</button>
                <br />
            </div>
            ) : (
            <button onClick={() => addCategory('hackathons')}>
                {categoryData.hackathons?.events.length > 0 ? 'Add More' : 'Add'}
            </button>
            )}
        </div>
        </div>

        <div className="category-container">
        <div className="category-box" style={{ width: '550px' }}>
            <h3>Additional information</h3>
            {categoryData.additional_information?.showForm ? (
            <div>
                {categoryData.additional_information.events.map((event, index) => (
                <div key={index}>
                    <label id='additional_information-label'>What did you do?</label>
                    <input
                    type="text"
                    value={event.description || ''}
                    onChange={(e) =>
                        handleInputChange('additional_information', index, 'description', e.target.value)
                    }
                    />
                    {index > 0 && (
                    <button onClick={() => handleRemoveEvent('additional_information', index)}>
                        Remove
                    </button>
                    )}
                </div>
                ))}
                <button onClick={() => handleAddEvent('additional_information')}>Add</button>
                <br />
            </div>
            ) : (
            <button onClick={() => addCategory('additional_information')}>
                {categoryData.additional_information?.events.length > 0 ? 'Add More' : 'Add'}
            </button>
            )}
        </div>
        </div>

      <button 
        onClick={handleClick}
        id="generate-activities"
      >
        Generate Activities
      </button>

    </div>
  );
}

export default Basics;