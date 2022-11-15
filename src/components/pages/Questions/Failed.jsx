import React from 'react';
import { Link } from 'react-router-dom';
import {PropTypes} from 'prop-types'

const Failed = ({ score }) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>
      <h2> You failed the examination</h2>
      <span>You need 80 marks to pass. You scored only {score}!!</span>
      <span>Click <Link to="/questions">here</Link> to retry.</span>
      <span>Click <Link to="/courses">here</Link> to go back to courses page.</span>
    </div>
  );
}

export default Failed;

Failed.propTypes = {
  score: PropTypes.number.isRequired,
}