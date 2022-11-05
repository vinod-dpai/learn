import React, { useState } from 'react';

const ManagePage = () => {
  const [activePage, setActivePage] = useState('courses');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90%' }}>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button
          id="courses"
          type="button"
          style={{ padding: '1rem', fontSize: '1.2rem' }}
          onClick={(e) => setActivePage(() => e.target.id)}
        >
          Manage Courses
        </button>
        <button
          id="questions"
          type="button"
          style={{ padding: '1rem', fontSize: '1.2rem' }}
          onClick={(e) => setActivePage(() => e.target.id)}
        >
          Manage Questions
        </button>
        <button
          id="users"
          type="button"
          style={{ padding: '1rem', fontSize: '1.2rem' }}
          onClick={(e) => setActivePage(() => e.target.id)}
        >
          Manage Users
        </button>
      </div>
      <h1 style={{ textTransform: 'capitalize' }}>Manage {activePage}</h1>
    </div>
  );
};

export default ManagePage;
