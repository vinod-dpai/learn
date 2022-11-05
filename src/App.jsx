import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import { color } from './components/Helper';
import { GlobalStyles } from './components/styles/Global';
import NavDropDown from './components/NavDropDown';

function App() {
  const [theme, setTheme] = useState('light');

  const [isOpen, setIsOpen] = useState(false);

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
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} /> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
