import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { getQuestionsFromDB } from '../Helper';
import { StyledQuestionsContainer } from '../styles/Questions/Questions.styled';

const Questions = ({ courses }) => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getQuestionsFromDB(id);
      setQuestions(res);
      console.log(res);
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    setSelectedCourse(courses.find((course) => course.id === Number.parseInt(id, 10)));
  }, [courses, id]);

  const handleBackClick = () => {
    navigate(`/courses/${id}`);
  };

  return (
    selectedCourse && (
      <StyledQuestionsContainer>
        <h2 style={{ width: '100%', textAlign: 'center', marginBottom: '1rem' }}>
          Examination for {selectedCourse.name}
        </h2>
        <button type="button" onClick={handleBackClick}>
          Go Back To Video
        </button>
        <ol style={{ marginTop: '1rem' }}>
          {questions.length > 0 &&
            questions.map((question) => (
              <li key={question.id}>
                <h4>{question.question}</h4>
                <div style={{ display: 'flex' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem', marginBottom: '2rem' }}>
                    <input
                      type="radio"
                      name={question.id}
                      id={`${question.id}_${question.option1}`}
                      style={{ display: 'none' }}
                    />
                    <label
                      htmlFor={`${question.id}_${question.option1}`}
                      style={{
                        borderRadius: '0.25rem',
                        padding: '0.25rem 0.5rem',
                        cursor: 'pointer',
                      }}
                    >
                      {question.option1}
                    </label>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem', marginBottom: '2rem' }}>
                    <input
                      type="radio"
                      name={question.id}
                      id={`${question.id}_${question.option2}`}
                      style={{ display: 'none' }}
                    />
                    <label
                      htmlFor={`${question.id}_${question.option2}`}
                      style={{
                        borderRadius: '0.25rem',
                        padding: '0.25rem 0.5rem',
                        cursor: 'pointer',
                      }}
                    >
                      {question.option2}
                    </label>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem', marginBottom: '2rem' }}>
                    <input
                      type="radio"
                      name={question.id}
                      id={`${question.id}_${question.option3}`}
                      style={{ display: 'none' }}
                    />
                    <label
                      htmlFor={`${question.id}_${question.option3}`}
                      style={{
                        borderRadius: '0.25rem',
                        padding: '0.25rem 0.5rem',
                        cursor: 'pointer',
                      }}
                    >
                      {question.option3}
                    </label>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem', marginBottom: '2rem' }}>
                    <input
                      type="radio"
                      name={question.id}
                      id={`${question.id}_${question.option4}`}
                      style={{ display: 'none' }}
                    />
                    <label
                      htmlFor={`${question.id}_${question.option4}`}
                      style={{
                        borderRadius: '0.25rem',
                        padding: '0.25rem 0.5rem',
                        cursor: 'pointer',
                      }}
                    >
                      {question.option4}
                    </label>
                  </div>
                </div>
              </li>
            ))}
        </ol>
        <button type="button">Submit</button>
      </StyledQuestionsContainer>
    )
  );
};

export default Questions;

Questions.propTypes = {
  courses: PropTypes.array.isRequired,
};
