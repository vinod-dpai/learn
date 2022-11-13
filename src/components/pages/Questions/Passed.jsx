import React, { useEffect } from 'react'
import ReactDOMServer from 'react-dom/server';
import { useNavigate } from 'react-router-dom';
import Certificate from './Certificate';
import html2pdf from 'html2pdf.js';
import { PropTypes } from 'prop-types';

const Passed = ({ course, certificate }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!course) {
      navigate('/learn');
    }
    else {
      const certificateHTML = ReactDOMServer.renderToStaticMarkup(<Certificate course={course} certificate={certificate} />);
      html2pdf(certificateHTML);
    }
  }, [course]);

  return (
    <Certificate course={course} certificate={certificate} />
  );
}

export default Passed;

Passed.propTypes = {
  course: PropTypes.object.isRequired,
  certificate: PropTypes.object.isRequired,
}