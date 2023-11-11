
import React, { useState } from 'react';

const AddBlog = ({ onAddBlog }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');

  const handleAddBlog = () => {
    const newBlog = {
      title,
      text,
      image,
      video,
      comments: [],
    };

    onAddBlog(newBlog);
    // Clear form fields
    setTitle('');
    setText('');
    setImage('');
    setVideo('');
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md my-8 p-4">
      <h2 className="text-xl font-semibold mb-4">Add a Blog</h2>
      <label className="block mb-2">Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      />
      <label className="block mb-2">Text:</label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      ></textarea>
      <label className="block mb-2">Image URL:</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      />
      <label className="block mb-2">Video URL:</label>
      <input
        type="text"
        value={video}
        onChange={(e) => setVideo(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      />
      <button
        onClick={handleAddBlog}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
      >
        Add Blog
      </button>
    </div>
  );
};

export default AddBlog;
