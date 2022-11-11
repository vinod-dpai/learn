import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import { color, getCoursesFromDB } from './components/Helper';
import { GlobalStyles } from './components/styles/Global';
import NavDropDown from './components/NavDropDown';
import About from './components/pages/About/About';
// import AdminPage from './components/pages/AdminPage/AdminPage';
import Course from './components/pages/Courses/Course';
import Questions from './components/Questions/Questions';
import Passed from './components/Questions/Passed';
import Failed from './components/Questions/Failed';

function App() {
  const [theme, setTheme] = useState('light');
  const [isOpen, setIsOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({});
  const [isUserModalOpen, setIsUserModalOpen] = useState(true);
  const [finalScore, setFinalScore] = useState(0);
  // const [score, setScore] = useState(0);
  const handleSetSelectedCourse = (course) => {
    setSelectedCourse(course);
  };

  const handleSetFinalScore = (score) => {
    setFinalScore(score);
  };

  const handleSetIsUserModalOpen = (status) => {
    setIsUserModalOpen(status);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCoursesFromDB();
      setCourses(res);
    };

    fetchData();

    const isUserDetailsPresent = window.sessionStorage.getItem('userName');
    if (!isUserDetailsPresent) setIsUserModalOpen(true);
    else setIsUserModalOpen(false);
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
      <Header isOpen={isOpen} navToggle={navToggle} theme={theme} toggleTheme={toggleTheme} />
      <NavDropDown isOpen={isOpen} navToggle={navToggle} />
      <Routes>
        <Route
          path="/learn"
          element={
            <Home
              courses={courses}
              isUserModalOpen={isUserModalOpen}
              setIsUserModalOpen={handleSetIsUserModalOpen}
              setSelectedCourse={handleSetSelectedCourse}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/courses"
          element={
            <Course
              course={selectedCourse}
              isUserModalOpen={isUserModalOpen}
              setIsUserModalOpen={handleSetIsUserModalOpen}
            />
          }
        />
        <Route
          path="/questions"
          element={
            <Questions
              course={selectedCourse}
              isUserModalOpen={isUserModalOpen}
              setIsUserModalOpen={handleSetIsUserModalOpen}
              setFinalScore={handleSetFinalScore}
            />
          }
        />
        <Route path="/passed" element={<Passed />} />
        <Route path="/failed" element={<Failed />} />
        <Route path="*" element={<Navigate to="/learn" replace />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
