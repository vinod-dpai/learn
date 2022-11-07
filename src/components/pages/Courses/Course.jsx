import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Course = ({ courses }) => {
  const [embedId, setEmbedId] = useState('');
  const [courseName, setCourseName] = useState('');
  const { id } = useParams();
  useEffect(() => {
    if (courses.length > 0) {
      const { name, url: videoUrl } = courses.find((course) => course.id === Number.parseInt(id, 10));
      if (videoUrl) {
        setCourseName(name);
        const urlAr = videoUrl?.split('/');
        const videEmbedId = urlAr[urlAr.length - 1];
        setEmbedId(videEmbedId);
      }
    }
  }, [courses, id]);
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
      <button
        type="button"
        style={{
          marginTop: '0.5rem',
          width: '75%',
          padding: '0.25rem',
          textAlign: 'left',
          borderRadius: '0.25rem',
          backgroundColor: '#60a5fa',
          color: '#1F2937',
          fontSize: '1.2rem',
          fontWeight: 'bold',
        }}
      >
        Continue To Examination
      </button>
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
  courses: PropTypes.string.isRequired,
};
