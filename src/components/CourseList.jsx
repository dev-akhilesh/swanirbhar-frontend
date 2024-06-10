import React from 'react';
import CourseCard from '../components/CourseCard'

const CourseList = ({ courses }) => {
  return (
    <div className="course-list">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
