import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUnderstanding } from '../../store';
import { Link } from 'react-router-dom';

function Understanding() {
  const dispatch = useDispatch();
  const understanding = useSelector((state) => state.understanding);

  const handleInputChange = (e) => {
    dispatch(updateUnderstanding(e.target.value));
  };

  return (
    <div>
      <h2>How well are you understanding the content?</h2>
      <input
        type="text"
        name="understanding"
        value={understanding}
        onChange={handleInputChange}
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
