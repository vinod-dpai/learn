import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import {
  StyledCourseContainer,
  StyledHeading,
  StyledCourseContentContainer,
  StyledCourseContent,
  StyledCourseMain,
  StyledCourseCategory,
} from '../../styles/Courses/Courses.styled';

const Courses = ({ courses, setSelectedCourse, category }) => {
  const navigate = useNavigate();

  const handleCourseOpen = (id) => {
    navigate('/courses');
    setSelectedCourse(courses.find((course) => course.id === Number.parseInt(id, 10)));
    window.sessionStorage.setItem('cid', id);
  };
  return (
    <StyledCourseContainer>
      <StyledHeading>{category} COURSES</StyledHeading>
      <StyledCourseMain>
        {courses.length > 0 &&
          courses.map((course) => (
            <StyledCourseContentContainer key={course.id} onClick={() => handleCourseOpen(course.id)}>
              <StyledCourseContent>
                <h2>{course.name}</h2>
                <StyledCourseCategory>{course.category}</StyledCourseCategory>
              </StyledCourseContent>
            </StyledCourseContentContainer>
          ))}
      </StyledCourseMain>
    </StyledCourseContainer>
  );
};

export default Courses;

Courses.propTypes = {
  courses: PropTypes.array.isRequired,
  setSelectedCourse: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};
