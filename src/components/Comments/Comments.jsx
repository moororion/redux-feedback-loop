import React from 'react';
import { useDispatch } from 'react-redux';
import { updateComments } from '../../store';
import { useNavigate } from 'react-router-dom';

function Comments() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [commentValue, setCommentValue] = React.useState('');

  const handleInputChange = (e) => {
    setCommentValue(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(updateComments(commentValue));
    navigate('/review'); 
  };

  return (
    <div>
      <h2>Any comments you want to leave?</h2>
      <textarea
        name="comments"
        value={commentValue}
        onChange={handleInputChange}
        placeholder="Enter your comments"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Comments;
