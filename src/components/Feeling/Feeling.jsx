import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFeeling } from '../../store';
import { Link } from 'react-router-dom';

function Feeling() {
  const dispatch = useDispatch();
  const feeling = useSelector((state) => state.feeling);

  const handleInputChange = (e) => {
    dispatch(updateFeeling(e.target.value));
  };

  return (
    <div>
      <h2>How are you feeling today?</h2>
      <input
        type="text"
        name="feeling"
        value={feeling}
        onChange={handleInputChange}
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
