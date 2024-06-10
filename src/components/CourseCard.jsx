import React, { useState } from 'react';
import '../assets/styles/courseCard.css';

const CourseCard = ({ course }) => {
  const [progress, setProgress] = useState(course.progress);
  const [showDetails, setShowDetails] = useState(false);

  const handleChange = (e) => {
    setProgress(e.target.value);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="course-card">
      <h2 className="course-title">{course.title}</h2>
      <p className="course-description">{course.description}</p>
      <div className="course-progress">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleChange}
          className="progress-bar"
        />
        <span className="progress-label">Progress: {progress}%</span>
      </div>
      <button onClick={toggleDetails} className="view-details-button">
        View Details
      </button>
      {showDetails && (
        <div className="details-dropdown">
          <h3>Course Details:</h3>
          <p><span style={{ fontWeight: 'bold' }}>Instruction: </span>{course.instruction}</p>
          <p><span style={{ fontWeight: 'bold' }}>Hint: </span>{course.hint}</p>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
