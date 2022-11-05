import React from 'react';
import { PropTypes } from 'prop-types';
import { StyledCourseContainer, StyledCourseContent, StyledCourseMain } from '../../styles/Courses/Courses.styled';

const Courses = ({ courses }) => (
  <StyledCourseContainer>
    <h1>AVAILABLE COURSES</h1>
    <StyledCourseMain>
      {courses.map((course) => (
        <StyledCourseContent key={course.id}>
          <h2>{course.name}</h2>
        </StyledCourseContent>
      ))}
    </StyledCourseMain>
  </StyledCourseContainer>
);

export default Courses;

Courses.propTypes = {
  courses: PropTypes.array.isRequired,
};
