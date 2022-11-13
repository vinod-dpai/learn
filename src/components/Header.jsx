import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledHeader, StyledLogo, StyledNavMain, StyledNav, StyledMenuIcon } from './styles/Header.styled';
// import { DarkIcon, LightIcon } from './Icons';
import Logo from '../images/kelsa.png';
import MenuIcon from '../icons/menu.webp';

const Header = ({ navToggle }) => {

  const [areuserDetailsPresent, setAreuserDetailsPresent] = useState(!!window.sessionStorage.getItem('userName'));

  const clearUserDetails = () => {
    window.sessionStorage.removeItem('userName');
    window.sessionStorage.removeItem('dob');
    window.sessionStorage.removeItem('gender');
    window.sessionStorage.removeItem('email');
    window.sessionStorage.removeItem('phno');
    window.sessionStorage.removeItem('address');
    window.sessionStorage.removeItem('district');
    window.sessionStorage.removeItem('taluk');
    window.sessionStorage.removeItem('religion');
    window.sessionStorage.removeItem('isStudent');
    window.sessionStorage.removeItem('schoolOrCollege');
    window.sessionStorage.removeItem('classOrCourse');

    setAreuserDetailsPresent(false);
  }

  return (
    <StyledHeader>
      <StyledLogo src={Logo} alt="Logo" />
      <StyledNavMain>
        <StyledNav>
          <Link to="/learn">Home</Link>
          <Link to="/about">About</Link>
          {/* <Link to="/admin">Manage</Link> */}
          <Link to="/contact">Contact</Link>
          {areuserDetailsPresent && <button type="button" onClick={clearUserDetails}>Log out</button>}
        </StyledNav>
        {/* <button type="button" onClick={toggleTheme}>
        {theme === 'dark' && <DarkIcon />}
        {theme === 'light' && <LightIcon />}
      </button> */}
      </StyledNavMain>
      <StyledMenuIcon onClick={navToggle} width="10" src={MenuIcon} alt="Menu" />
    </StyledHeader>
  )
};

Header.propTypes = {
  navToggle: PropTypes.func,
  // theme: PropTypes.string,
  // toggleTheme: PropTypes.func,
};

export default Header;
