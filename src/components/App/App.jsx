import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
  });

  // Function to update form data
  const handleInputChange = (input) => (e) => {
    setFormData({
      ...formData,
      [input]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log('Form Data Submitted:', formData);
    // Handle form submission, e.g., sending data to a server
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <div className="form-container">
          <Routes>
            <Route
              path="/"
              element={<Feeling formData={formData} handleInputChange={handleInputChange} />}
            />
            <Route
              path="/understanding"
              element={<Understanding formData={formData} handleInputChange={handleInputChange} />}
            />
            <Route
              path="/support"
              element={<Support formData={formData} handleInputChange={handleInputChange} />}
            />
            <Route
              path="/comments"
              element={<Comments formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
