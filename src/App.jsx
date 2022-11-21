import { ThemeProvider } from 'styled-components';
import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import { color, getCoursesFromDB } from './components/Helper';
import { GlobalStyles } from './components/styles/Global';
import NavDropDown from './components/NavDropDown';
import About from './components/pages/About/About';
// import AdminPage from './components/pages/AdminPage/AdminPage';
import Course from './components/pages/Courses/Course';
import Questions from './components/pages/Questions/Questions';
import Passed from './components/pages/Questions/Passed';
import Failed from './components/pages/Questions/Failed';
import UserDetails from './components/pages/UserDetails';

function App() {
  const [theme, setTheme] = useState('light');
  const [isOpen, setIsOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({});
  const [areUserDetailsPresent, setAreUserDetailsPresent] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [finalScore, setFinalScore] = useState(0);

  // const [score, setScore] = useState(0);

  const handlesetUserInfo = (user) => {
    setUserInfo(user);
  }
  const handleSetSelectedCourse = (course) => {
    setSelectedCourse(course);
  };

  const handleSetAreUserDetailsPresent = (value) => {
    setAreUserDetailsPresent(value);
  }

  const handleSetFinalScore = (score) => {
    setFinalScore(score);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCoursesFromDB();
      setCourses(res);
    };

    fetchData();

    if (window.sessionStorage.getItem('userName')) setAreUserDetailsPresent(true);
    // const userName = window.sessionStorage.getItem('userName');
    // setAreUserDetailsPresent(!!userName);
  }, []);

  const navToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) setIsOpen(false);
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  const toggleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else setTheme('dark');
  };
  return (
    <ThemeProvider theme={color[theme]}>
      <GlobalStyles />
      <Header isOpen={isOpen} navToggle={navToggle} theme={theme} toggleTheme={toggleTheme} areUserDetailsPresent={areUserDetailsPresent} setAreUserDetailsPresent={handleSetAreUserDetailsPresent} />
      <NavDropDown isOpen={isOpen} navToggle={navToggle} areUserDetailsPresent={areUserDetailsPresent} setAreUserDetailsPresent={handleSetAreUserDetailsPresent} />
      <Routes>
        <Route
          path="/learn"
          element={
            <Home
              courses={courses}
              setSelectedCourse={handleSetSelectedCourse}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/courses"
          element={
            <Course
              courses={courses}
            />
          }
        />
        <Route
          path="/questions"
          element={
            <Questions
              courses={courses}
              setUserInfo={handlesetUserInfo}
              setFinalScore={handleSetFinalScore}
            />
          }
        />
        <Route path="/passed" element={<Passed course={selectedCourse} user={userInfo} /> } />
        <Route path="/failed" element={<Failed course={selectedCourse} score={finalScore} />} />
        <Route path="/userDetails" element={<UserDetails setAreUserDetailsPresent={handleSetAreUserDetailsPresent} />} />
        <Route path="*" element={<Navigate to="/learn" replace />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App;
