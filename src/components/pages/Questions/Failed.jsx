import React from 'react';
import { Link } from 'react-router-dom';

const Failed = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>
      <h2> You failed the examination</h2>
      <span>Click <Link to="/questions">here</Link> to retry.</span>
      <span>Click <Link to="/courses">here</Link> to go back to courses page.</span>
    </div>
  );
}

export default Failed;
