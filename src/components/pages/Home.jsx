import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { StyledHome, StyledSearchContainer, StyledSearchBox, StyledFilterIcon } from '../styles/Home.styled';
import Courses from './Courses/Courses';
import FilterIcon from '../../icons/filter.webp';
import UserModal from './UserModal';

const Home = ({ courses, isUserModalOpen, setIsUserModalOpen, setSelectedCourse }) => {
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setFilteredCourses(courses);
  }, [courses]);

  const handleSearch = (e) => {
    const { value } = e.target;

    setSearchText(value);

    setFilteredCourses(() => courses.filter((course) => course.name.toLowerCase().includes(value.toLowerCase())));
  };

  const handlePageClick = () => {
    console.log('Clicked');
  };
  return (
    <StyledHome onClick={handlePageClick}>
      <h1>DLSA Alappuzha - Learning Portal</h1>

      <StyledSearchContainer>
        <StyledSearchBox placeholder="Type Something To Search..." value={searchText} onChange={handleSearch} />
        <StyledFilterIcon src={FilterIcon} alt="Filter" />
      </StyledSearchContainer>
      <Courses courses={filteredCourses} setSelectedCourse={setSelectedCourse} />
      <UserModal isModalOpen={isUserModalOpen} setIsModalOpen={setIsUserModalOpen} />
    </StyledHome>
  );
};

export default Home;

Home.propTypes = {
  courses: PropTypes.array.isRequired,
  isUserModalOpen: PropTypes.bool.isRequired,
  setIsUserModalOpen: PropTypes.func.isRequired,
  setSelectedCourse: PropTypes.func.isRequired,
};
