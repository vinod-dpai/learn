import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import { color, getCoursesFromDB } from './components/Helper';
import { GlobalStyles } from './components/styles/Global';
import NavDropDown from './components/NavDropDown';
import About from './components/pages/About/About';
// import AdminPage from './components/pages/AdminPage/AdminPage';
import Course from './components/pages/Courses/Course';

function App() {
  const [theme, setTheme] = useState('light');
  const [isOpen, setIsOpen] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCoursesFromDB();
      setCourses(res);
    };

    fetchData();
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
        <Route path="/learn" element={<Home courses={courses} />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses/:id" element={<Course courses={courses} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
