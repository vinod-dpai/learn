import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { StyledNavDropDown } from './styles/Header.styled';

const NavDropDown = ({ isOpen, navToggle }) => (
  <StyledNavDropDown isOpen={isOpen} onClick={navToggle}>
    <Link to="/learn">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/admin">Manage</Link>
    <Link to="/contact">Contact</Link>
  </StyledNavDropDown>
);

NavDropDown.propTypes = {
  isOpen: PropTypes.bool,
  navToggle: PropTypes.func,
};

export default NavDropDown;
