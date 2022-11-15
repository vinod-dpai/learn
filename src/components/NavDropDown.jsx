import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { StyledNavDropDown } from './styles/Header.styled';
import { clearUserDetails } from './Helper';

const NavDropDown = ({ isOpen, navToggle, areUserDetailsPresent, setAreUserDetailsPresent }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUserDetails();
    setAreUserDetailsPresent(false);
    navigate('/learn');
  }
  return (
    <StyledNavDropDown isOpen={isOpen} onClick={navToggle}>
      <Link to="/learn">Home</Link>
      <Link to="/about">About</Link>
      {/* <Link to="/admin">Manage</Link> */}
      <Link to="/contact">Contact</Link>
      {areUserDetailsPresent && <button type="button" onClick={handleLogout}>Log out</button>}
    </StyledNavDropDown>
  )
};

NavDropDown.propTypes = {
  isOpen: PropTypes.bool,
  navToggle: PropTypes.func,
  areUserDetailsPresent: PropTypes.bool.isRequired,
  setAreUserDetailsPresent: PropTypes.func.isRequired,
};

export default NavDropDown;
