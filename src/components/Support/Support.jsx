import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSupport } from '../../store';
import { Link } from 'react-router-dom';

function Support() {
  const dispatch = useDispatch();
  const support = useSelector((state) => state.support);

  const handleInputChange = (e) => {
    dispatch(updateSupport(e.target.value));
  };

  return (
    <div>
      <h2>How well are you being supported?</h2>
      <input
        type="text"
        name="support"
        value={support}
        onChange={handleInputChange}
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
