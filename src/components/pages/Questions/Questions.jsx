import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { addUserDetails, getQuestionsFromDB } from '../../Helper';
import { StyledQuestionsContainer } from '../../styles/Questions/Questions.styled';

const Questions = ({ courses, setUserInfo, setFinalScore }) => {
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
      const dateOfCompletion = new Date();

      const phno = Number.parseInt(window.sessionStorage.getItem('phno'));

      let religion = window.sessionStorage.getItem('religion');
      religion = religion.replace(/([A-Z])/g, " $1");
      religion = religion.charAt(0).toUpperCase() + religion.slice(1);

      let gender = window.sessionStorage.getItem('gender');
      gender = gender.replace(/([A-Z])/g, " $1");
      gender = gender.charAt(0).toUpperCase() + gender.slice(1);

      let district = window.sessionStorage.getItem('district');
      district = district.replace(/([A-Z])/g, " $1");
      district = district.charAt(0).toUpperCase() + district.slice(1);

      let taluk = window.sessionStorage.getItem('taluk');
      taluk = taluk.replace(/([A-Z])/g, " $1");
      taluk = taluk.charAt(0).toUpperCase() + taluk.slice(1);

      const user = {
        address: window.sessionStorage.getItem('address'),
        classOrCourse: window.sessionStorage.getItem('classOrCourse') || '',
        courseId: selectedCourse.id,
        dateOfCompletion: dateOfCompletion.toString(),
        district,
        email: window.sessionStorage.getItem('email'),
        id: `${dateOfCompletion.valueOf() + dateOfCompletion.getMilliseconds()}C${selectedCourse.id}`,
        isStudent: window.sessionStorage.getItem('isStudent') === 'true',
        name: window.sessionStorage.getItem('userName'),
        gender,
        dob: window.sessionStorage.getItem('dob'),
        phno,
        religion,
        schoolOrCollege: window.sessionStorage.getItem('schoolOrCollege') || '',
        score,
        taluk,
      }

      setUserInfo(user);

      addUserDetails(user);
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
    courses.length > 0 && questions.length > 0 && (
      <StyledQuestionsContainer>
        <h2 style={{ width: '100%', textAlign: 'center', marginBottom: '1rem' }}>
          Examination for {selectedCourse.name}
        </h2>
        <button type="button" onClick={handleBackClick}>
          Go Back To Video
        </button>
        <ol style={{ marginTop: '1rem' }}>
          {questions.map((question) => (
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
        <p style={{ fontWeight: 'bold', color: 'red' }}>* Submit button will be available only after attempting all questions</p>
      </StyledQuestionsContainer>
    )
  );
};

export default Questions;

Questions.propTypes = {
  courses: PropTypes.array.isRequired,
  setUserInfo: PropTypes.func.isRequired,
  setFinalScore: PropTypes.func.isRequired,
};
