import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { StyledHome, StyledSelect, StyledSearchContainer, StyledSearchBox, StyledFilterIcon } from '../styles/Home.styled';
import Courses from './Courses/Courses';

const Home = ({ courses, setSelectedCourse }) => {
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchText, setSearchText] = useState('');
  const [categories, setCategories] = useState([]);
  const [searchCategory, setSearchedCategory] = useState('All');

  useEffect(() => {
    const allCategories = courses.map((course) => course.category);
    setFilteredCourses(courses);
    setCategories(
      allCategories
        .filter((item, index) => allCategories.indexOf(item) === index)
    );
  }, [courses]);

  useEffect(() => {
    const courseIdsFilteredByText = courses
      .filter((course) => course.name.toLowerCase().includes(searchText.toLowerCase()))
      .map((course) => course.id);
    let courseIdsFilteredByCategory = [];
    if (searchCategory !== 'All') {
      courseIdsFilteredByCategory = courses.filter((course) => course.category === searchCategory);
    }
    else {
      courseIdsFilteredByCategory = courses;
    };

    courseIdsFilteredByCategory = courseIdsFilteredByCategory.map((course) => course.id);

    const updatedCourseIdsFilter = courseIdsFilteredByText.filter((item) => courseIdsFilteredByCategory.includes(item));

    setFilteredCourses(courses.filter((course) => updatedCourseIdsFilter.includes(course.id)));
  }, [searchText, searchCategory])

  // const handlePageClick = () => {
  //   const userName = window.sessionStorage.getItem('userName');
  //   setAreUserDetailsPresent(!!userName);
  // };
  return (
    <StyledHome>
      <h1>DLSA Alappuzha - Learning Portal</h1>

      <StyledSearchContainer>
        <StyledSelect value={searchCategory} onChange={(e) => setSearchedCategory(e.target.value)}>
          <option value="All">All</option>
          {
            categories.map((category) => (
              <option key={category}>{category}</option>
            ))
          }
        </StyledSelect>
        <StyledSearchBox placeholder="Type Something To Search..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        {/* <StyledFilterIcon src={FilterIcon} alt="Filter" /> */}
      </StyledSearchContainer>
      <Courses courses={filteredCourses} setSelectedCourse={setSelectedCourse} />
    </StyledHome>
  );
};

export default Home;

Home.propTypes = {
  courses: PropTypes.array.isRequired,
  setSelectedCourse: PropTypes.func.isRequired,
};
