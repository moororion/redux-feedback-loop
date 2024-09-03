import React from 'react';
import { Link } from 'react-router-dom';

function Support({ formData, handleInputChange }) {
  return (
    <div>
      <h2>How well are you being supported?</h2>
      <input
        type="text"
        name="support"
        value={formData.support}
        onChange={handleInputChange('support')}
        placeholder="Enter your support"
        required
      />
      <Link to="/comments">
        <button>Next</button>
      </Link>
    </div>
  );
}

export default Support;
