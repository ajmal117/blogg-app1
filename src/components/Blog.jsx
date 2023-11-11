// Blog.js

import React from 'react';
import Comment from './Comment';

const Blog = ({ blog, onAddComment }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md my-8 p-4">
      <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
      <p className="mb-4">{blog.text}</p>
      {blog.image && <img src={blog.image} alt="Blog" className="mb-4" />}
      {blog.video && (
        <div className="mb-4">
          <iframe
            title="Blog Video"
            width="100%"
            height="315"
            src={blog.video}
            frameBorder="0"
            allowFullScreen
            className="rounded-md"
          ></iframe>
        </div>
      )}
      <Comment comments={blog.comments} onAddComment={onAddComment} />
    </div>
  );
};

export default Blog;
