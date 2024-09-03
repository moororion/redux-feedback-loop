import React from 'react';
import { Link } from 'react-router-dom';

function Feeling({ formData, handleInputChange }) {
  return (
    <div>
      <h2>How are you feeling today?</h2>
      <input
        type="text"
        name="feeling"
        value={formData.feeling}
        onChange={handleInputChange('feeling')}
        placeholder="Enter your feeling"
        required
      />
      <Link to="/understanding">
        <button>Next</button>
      </Link>
    </div>
  );
}

export default Feeling;
