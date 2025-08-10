import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import QuizQuestion from '../components/QuizQuestion';
import Scoreboard from '../components/Scoreboard';
import questionsData from '../api/questions.json';

export default function QuizPage() {
  const { course, unit, lesson } = useParams();
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const qs = questionsData.Courses[decodeURIComponent(course)]
                              [decodeURIComponent(unit)]
                              [decodeURIComponent(lesson)] || [];
    setQuestions(qs);
  }, [course, unit, lesson]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(s => Math.min(100, s + 10));
    setCurrent(i => i + 1);
  };

  return (
    <>
      <Header />
      {current < questions.length ? (
        <>
          <Scoreboard score={score} questionIndex={current + 1} total={questions.length} />
          <QuizQuestion data={questions[current]} onAnswer={handleAnswer} />
        </>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <h2>Final Score: {score}</h2>
        </div>
      )}
    </>
  );
}