import React, { useState, useEffect } from 'react';
import { StyledCourseContainer, StyledCourseContent, StyledCourseMain } from '../../styles/Courses/Courses.styled';
import { getCourses } from '../../Helper';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getCourses();
      setCourses(res);
    };

    fetchData();
  }, []);
  return (
    <StyledCourseContainer>
      <h1>AVAILABLE COURSES</h1>
      <StyledCourseMain>
        {courses.map((course) => (
          <StyledCourseContent key={course.id}>
            <h2>{course.name}</h2>
          </StyledCourseContent>
        ))}
        {/* <div
          style={{
            width: '100%',
            height: '10rem',
            border: '1px solid #1F2937',
            padding: '0.5rem',
            borderRadius: '0.25rem',
          }}
        >
          <h2>Course Name</h2>
        </div>
        <div
          style={{
            width: '100%',
            height: '10rem',
            border: '1px solid #1F2937',
            padding: '0.5rem',
            borderRadius: '0.25rem',
          }}
        >
          <h2>Course Name</h2>
        </div> */}
      </StyledCourseMain>
    </StyledCourseContainer>
  );
};

export default Courses;
