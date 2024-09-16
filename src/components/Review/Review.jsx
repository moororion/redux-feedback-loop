import React from 'react';
import { useSelector } from 'react-redux';

function Review() {
  
  const formData = useSelector((state) => state.formData);


  const feeling = formData?.feeling || 'Not provided';
  const understanding = formData?.understanding || 'Not provided';
  const support = formData?.support || 'Not provided';
  const comments = formData?.comments || 'Not provided';

  return (
    <div>
      <h2>Review Your Feedback</h2>
      <p>Feeling: {feeling}</p>
      <p>Understanding: {understanding}</p>
      <p>Support: {support}</p>
      <p>Comments: {comments}</p>
      <button onClick={() => console.log('Submit clicked')}>Submit</button>
    </div>
  );
}

export default Review;
