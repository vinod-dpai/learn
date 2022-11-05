import React from 'react';
import { StyledHome, StyledSearchContainer, StyledSearchBox, StyledFilterIcon } from '../styles/Home.styled';
import Courses from './Courses/Courses';
import FilterIcon from '../../icons/filter.webp';
import UserModal from './UserModal';

const Home = () => (
  <StyledHome>
    <h1>DLSA Alappuzha - Learning Portal</h1>

    <StyledSearchContainer>
      <StyledSearchBox placeholder="Type Something To Search..." />
      <StyledFilterIcon src={FilterIcon} alt="Filter" />
    </StyledSearchContainer>
    <Courses />
    <UserModal />
  </StyledHome>
);

export default Home;
