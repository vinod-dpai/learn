import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { getQuestionsFromDB } from '../Helper';
import { StyledQuestionsContainer } from '../styles/Questions/Questions.styled';
import UserModal from '../pages/UserModal';

const Questions = ({ courses, isUserModalOpen, setIsUserModalOpen, setFinalScore }) => {
  const cid = window.sessionStorage.getItem('cid');
  const selectedCourse = courses.find((course) => course.id === Number.parseInt(cid, 10));
  const [questions, setQuestions] = useState([]);
  const [areAllQuestionsAnswered, setAreAllQuestionsAnswered] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!cid) navigate('/learn');
    const fetchData = async () => {
      const res = await getQuestionsFromDB(cid);
      setQuestions(
        res.map((question) => ({
          ...question,
          answered: false,
          selected: false,
        }))
      );
    };

    fetchData();
  }, [cid, navigate]);

  useEffect(() => {
    const isUserDetailsPresent = window.sessionStorage.getItem('userName');
    if (!isUserDetailsPresent) setIsUserModalOpen(true);
    else setIsUserModalOpen(false);
  });

  // useEffect(() => {
  //   setcourse(courses.find((course) => course.id === Number.parseInt(id, 10)));
  // }, [courses, id]);

  const handleBackClick = () => {
    navigate('/courses');
  };

  const handleAnswerClick = (questionId, selectedOption) => {
    const updatedQuestions = questions.map((question) => {
      const tempQuestion = { ...question };
      if (tempQuestion.id === questionId) {
        tempQuestion.answered = true;
        tempQuestion.selected = selectedOption;
      }

      return tempQuestion;
    });

    setQuestions(updatedQuestions);
  };

  const calculateScore = () => {
    const selectedAnswers = questions.map(({ answer, selected }) => ({
      selected,
      answer,
    }));

    let score = 0;

    selectedAnswers.forEach(({ answer, selected }) => {
      if (selected === answer) {
        score += 10;
      }
    });

    setFinalScore(score);
    if (score >= 80) {
      navigate('/passed');
    } else {
      navigate('/failed');
    }
  };

  useEffect(() => {
    const answeredQuestions = questions.filter((question) => question.answered);
    if (answeredQuestions.length === 10) setAreAllQuestionsAnswered(true);
  }, [questions]);
  return (
    cid &&
    courses.length > 0 && (
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
                      onClick={() => handleAnswerClick(question.id, question.option1)}
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
                      onClick={() => handleAnswerClick(question.id, question.option2)}
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
                      onClick={() => handleAnswerClick(question.id, question.option3)}
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
                      onClick={() => handleAnswerClick(question.id, question.option4)}
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
        <button disabled={!areAllQuestionsAnswered} type="button" onClick={calculateScore}>
          Submit
        </button>
        <UserModal isModalOpen={isUserModalOpen} setIsModalOpen={setIsUserModalOpen} />
      </StyledQuestionsContainer>
    )
  );
};

export default Questions;

Questions.propTypes = {
  courses: PropTypes.array.isRequired,
  isUserModalOpen: PropTypes.bool.isRequired,
  setIsUserModalOpen: PropTypes.func.isRequired,
  setFinalScore: PropTypes.func.isRequired,
};
