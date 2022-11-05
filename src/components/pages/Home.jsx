import React, { useState, useEffect } from 'react';
import { StyledHome, StyledSearchContainer, StyledSearchBox, StyledFilterIcon } from '../styles/Home.styled';
import Courses from './Courses/Courses';
import FilterIcon from '../../icons/filter.webp';
import UserModal from './UserModal';
import { getCourses } from '../Helper';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCourses();
      setCourses(res);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredCourses(courses);
  }, [courses]);

  const handleSearch = (e) => {
    const { value } = e.target;

    setSearchText(value);

    setFilteredCourses(() => courses.filter((course) => course.name.toLowerCase().includes(value.toLowerCase())));
  };
  return (
    <StyledHome>
      <h1>DLSA Alappuzha - Learning Portal</h1>

      <StyledSearchContainer>
        <StyledSearchBox placeholder="Type Something To Search..." value={searchText} onChange={handleSearch} />
        <StyledFilterIcon src={FilterIcon} alt="Filter" />
      </StyledSearchContainer>
      <Courses courses={filteredCourses} />
      <UserModal />
    </StyledHome>
  );
};

export default Home;
