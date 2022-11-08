import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useParams } from 'react-router-dom';
import { getQuestionsFromDB } from '../Helper';

const Questions = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getQuestionsFromDB(id);
      setQuestions(res);
    };

    fetchData();
  }, [id]);

  return <h2>{id}</h2>;
};

export default Questions;

// Questions.propTypes = {
//   course: PropTypes.object.isRequired,
// };
