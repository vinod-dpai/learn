import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { StyledHeader, StyledLogo, StyledNavMain, StyledNav, StyledMenuIcon } from './styles/Header.styled';
import { clearUserDetails } from './Helper';
// import { DarkIcon, LightIcon } from './Icons';
import Logo from '../images/kelsa.png';
import MenuIcon from '../icons/menu.webp';

const Header = ({ navToggle, areUserDetailsPresent, setAreUserDetailsPresent }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUserDetails();
    setAreUserDetailsPresent(false);
    navigate('/learn');
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
          {areUserDetailsPresent && <button type="button" onClick={handleLogout}>Log out</button>}
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
  areUserDetailsPresent: PropTypes.bool.isRequired,
  setAreUserDetailsPresent: PropTypes.func.isRequired,
  // theme: PropTypes.string,
  // toggleTheme: PropTypes.func,
};

export default Header;
