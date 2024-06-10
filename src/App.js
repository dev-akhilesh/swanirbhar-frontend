// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import TeacherUploadForm from './components/TeacherUploadForm';
// import NavBar from './components/NavBar';
// import Login from './components/Login';
// import Signup from './components/Signup';

// function App() {
//   const [auth, setAuth] = useState(false);

//   useEffect(() => {
//     const isAuthenticated = localStorage.getItem('auth') === 'true';
//     setAuth(isAuthenticated);
//   }, []);

//   const [courses, setCourses] = useState([]);

//   const addCourse = (newCourse) => {
//     setCourses([...courses, newCourse]);
//   };

//   return (
//     <Router>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/upload" element={<TeacherUploadForm />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </Router>
    
//   );
// }

// export default App;


// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TeacherUploadForm from "./components/TeacherUploadForm";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/upload" element={<TeacherUploadForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
