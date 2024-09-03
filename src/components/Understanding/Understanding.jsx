import React from 'react';
import { Link } from 'react-router-dom';

function Understanding({ formData, handleInputChange }) {
  return (
    <div>
      <h2>How well are you understanding the content?</h2>
      <input
        type="text"
        name="understanding"
        value={formData.understanding}
        onChange={handleInputChange('understanding')}
        placeholder="Enter your understanding"
        required
      />
      <Link to="/support">
        <button>Next</button>
      </Link>
    </div>
  );
}

export default Understanding;
