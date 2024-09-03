import React from 'react';

function Comments({ formData, handleInputChange, handleSubmit }) {
  return (
    <div>
      <h2>Any comments you want to leave?</h2>
      <textarea
        name="comments"
        value={formData.comments}
        onChange={handleInputChange('comments')}
        placeholder="Enter your comments"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Comments;
