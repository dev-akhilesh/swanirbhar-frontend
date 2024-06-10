// HomePage.jsx

import React, { useEffect, useState } from 'react';
import CourseList from '../components/CourseList';
import { useNavigate } from 'react-router-dom';
import "../assets/styles/homepage.css";


const HomePage = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      // If the user is not logged in, redirect to the login page
      navigate('/login');
    } else {
      // Retrieve existing courses data from local storage
      const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];

      if (storedCourses.length === 0) {
        // Set default courses if no courses are stored in local storage
        const defaultCourses = [
          {
            id: 1,
            title: "React Fundamentals",
            description:
              "Learn the fundamentals of React.js and build dynamic web applications. This course covers essential concepts like components, state, and props, along with an introduction to hooks and context. Perfect for beginners looking to start their journey with React.",
            progress: 45,
            instruction:
              "This course provides a step-by-step guide to understanding the basics of React, including how to create and manage components, handle state, and use props effectively.",
            hint: "Start with the basics: components, state, and props."
          },
          {
            id: 2,
            title: "Advanced React Techniques",
            description:
              "Deep dive into advanced React techniques and enhance your web development skills. This course covers complex topics like custom hooks, context API, performance optimization, and server-side rendering. Ideal for developers looking to master React.",
            progress: 30,
            instruction:
              "Explore advanced React concepts, including custom hooks, context API, and optimization strategies, to build high-performance applications.",
            hint: "Focus on mastering advanced hooks and context API."
          },
          {
            id: 3,
            title: "React with Redux",
            description:
              "Integrate Redux with React to manage complex state in your applications. This course covers Redux fundamentals, actions, reducers, and middleware, along with practical examples to implement Redux in real-world projects.",
            progress: 60,
            instruction:
              "Learn how to integrate Redux with React for state management, including setting up actions, reducers, and using middleware.",
            hint: "Understand the flow of actions and reducers in Redux."
          },
          {
            id: 4,
            title: "React Native Development",
            description:
              "Build mobile applications using React Native. This course introduces you to React Native fundamentals, navigation, and native modules, enabling you to create cross-platform mobile apps with ease.",
            progress: 20,
            instruction:
              "Get started with React Native and learn to build mobile apps for iOS and Android, including navigation and using native modules.",
            hint: "Focus on the basics of React Native and navigation."
          },
          {
            id: 5,
            title: "React Testing and Debugging",
            description:
              "Ensure your React applications are bug-free and maintainable by learning testing and debugging techniques. This course covers unit testing with Jest, integration testing with React Testing Library, and effective debugging strategies.",
            progress: 10,
            instruction:
              "Master testing and debugging in React applications using Jest and React Testing Library to ensure code quality and reliability.",
            hint: "Start with unit testing using Jest."
          }
        ];

        localStorage.setItem('courses', JSON.stringify(defaultCourses));
        setCourses(defaultCourses);
      } else {
        // Set the courses state with the retrieved data from local storage
        setCourses(storedCourses);
      }
    }
  }, [navigate]);

  return (
    <div>
      <div className="container">
        <CourseList courses={courses} />
      </div>
    </div>
  );
};

export default HomePage;
