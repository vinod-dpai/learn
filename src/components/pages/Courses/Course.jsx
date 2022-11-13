import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledButton } from '../../styles/Courses/Course.styled';

const Course = ({ courses, setAreUserDetailsPresent }) => {
  const [embedId, setEmbedId] = useState('');
  const [courseName, setCourseName] = useState('');
  const navigate = useNavigate();

  const cid = window.sessionStorage.getItem('cid');
  const selectedCourse = courses.find((course) => course.id === Number.parseInt(cid, 10));

  useEffect(() => {
    const userName = window.sessionStorage.getItem('userName');
    setAreUserDetailsPresent(!!userName);
  });

  useEffect(() => {
    if (cid && courses.length > 0) {
      const { name, url: videoUrl } = selectedCourse;
      setCourseName(name);
      const urlAr = videoUrl.split('/');
      const videEmbedId = urlAr[urlAr.length - 1];
      setEmbedId(videEmbedId);
    }
  }, [cid, courses, selectedCourse]);

  useEffect(() => {
    if (!cid) navigate('/learn');
  }, [cid, navigate]);

  const handleContinueToExam = () => {
    navigate('/questions');
  };
  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-2rem' }}>
      <h3 style={{ width: '75%', textAlign: 'left' }}>{courseName}</h3>
      <div className="ratio ratio-16x9" style={{ width: '75%' }}>
        <iframe
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded Video"
        />
      </div>
      <StyledButton type="button" onClick={handleContinueToExam}>
        Continue To Examination
      </StyledButton>
    </Container>
  );
  // return (
  //   <StyledCourseContainer>
  //     <h2>{courseName}</h2>
  //     <Video id={embedId} />
  //   </StyledCourseContainer>
  // );
};

export default Course;

Course.propTypes = {
  courses: PropTypes.array.isRequired,
  setAreUserDetailsPresent: PropTypes.func.isRequired,
};
