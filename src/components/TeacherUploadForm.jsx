// TeacherUploadForm.jsx

import React, { useState } from 'react';
import '../assets/styles/teacherUploadForm.css';

const TeacherUploadForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [instruction, setInstruction] = useState('');
  const [hint, setHint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      id: Date.now(),
      title,
      description,
      instruction,
      hint,
      progress: 0,
    };
    
    // Store the new course data in local storage
    const existingCourses = JSON.parse(localStorage.getItem('courses')) || [];
    localStorage.setItem('courses', JSON.stringify([...existingCourses, newCourse]));

    setTitle('');
    setDescription('');
    setInstruction('');
    setHint('');
  };

  return (
    <div className="teacher-upload-form"> {/* Add the className here */}
      <h2>Upload New Course</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Instruction"
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
        />
        <input
          type="text"
          placeholder="Hint"
          value={hint}
          onChange={(e) => setHint(e.target.value)}
        />
        
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default TeacherUploadForm;
