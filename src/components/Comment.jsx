// Comment.js

import React, { useState } from 'react';

const Comment = ({ comments, onAddComment }) => {
  const [commentText, setCommentText] = useState('');

  const handleAddComment = () => {
    onAddComment(commentText);
    setCommentText('');
  };

  return (
    <div className="bg-gray-100 p-2 mb-2 rounded-md">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>
      {comments.map((comment, index) => (
        <div key={index} className="mb-2">
          <p>{comment}</p>
        </div>
      ))}
      <div className="flex">
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment..."
          className="flex-grow p-2 border rounded-l-md"
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-700"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Comment;
