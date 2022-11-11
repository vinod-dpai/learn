import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import {
  StyledCourseContainer,
  StyledCourseContentContainer,
  StyledCourseContent,
  StyledCourseMain,
  StyledCourseCategory,
} from '../../styles/Courses/Courses.styled';

const Courses = ({ courses, setSelectedCourse }) => {
  const navigate = useNavigate();

  const handleCourseOpen = (id) => {
    navigate('/courses');
    setSelectedCourse(courses.find((course) => course.id === Number.parseInt(id, 10)));
  };
  return (
    <StyledCourseContainer>
      <h1>AVAILABLE COURSES</h1>
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
};