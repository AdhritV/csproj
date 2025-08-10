import React, { useState, useEffect } from 'react';
import { normalizeVariables, evaluateExpression, evaluateExplanationLine } from '../utils/quizUtils';

export default function QuizQuestion({ data, onAnswer }) {
  const [vars, setVars] = useState({});
  const [input, setInput] = useState('');

  useEffect(() => {
    setVars(normalizeVariables(data.variables));
    setInput('');
  }, [data]);

  const questionHTML = evaluateExplanationLine(data.question, vars);
  const correct = evaluateExpression(data.answer, vars);

  // Run MathJax after questionHTML changes
  useEffect(() => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, [questionHTML]);

  const handleSubmit = () => {
    const userVal = parseFloat(input);
    const isCorrect = Math.abs(userVal - correct) < 1e-5;
    onAnswer(isCorrect);
  };

  return (
    <div className="quiz-container">
      <div dangerouslySetInnerHTML={{ __html: questionHTML }} />
      <input
        type="number"
        className="num-field"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button className="next" onClick={handleSubmit}>Submit</button>
    </div>
  );
}