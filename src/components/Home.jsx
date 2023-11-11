// App.js

import React, { useState } from 'react';
import Blog from './Blog';
import AddBlog from './AddBlog';

function Home() {
  const [blogs, setBlogs] = useState([]);

  const handleAddBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  const handleAddComment = (index, comment) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index].comments.push(comment);
    setBlogs(updatedBlogs);
  };

  return (
    <div className="App bg-gray-200 min-h-screen p-8">
      <AddBlog onAddBlog={handleAddBlog} />
      {blogs.map((blog, index) => (
        <Blog key={index} blog={blog} onAddComment={(comment) => handleAddComment(index, comment)} />
      ))}
    </div>
  );
}

export default Home;
