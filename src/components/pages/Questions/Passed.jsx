import React, { useEffect } from 'react'
import ReactDOMServer from 'react-dom/server';
import { useNavigate } from 'react-router-dom';
import Certificate from './Certificate';
import html2pdf from 'html2pdf.js';
import { PropTypes } from 'prop-types';

const Passed = ({ course, user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(course).length === 0 || Object.keys(user).length === 0) {
      navigate('/learn');
    }
    else {
      const userHTML = ReactDOMServer.renderToStaticMarkup(<Certificate course={course} user={user} />);

      var certOptions = {
        margin:       0.5,
        filename:     'certificate.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 1 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
      };
      html2pdf(userHTML, certOptions);
    }
  }, [course, user]);

  return (
    <Certificate course={course} user={user} />
  );
}

export default Passed;

Passed.propTypes = {
  course: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}