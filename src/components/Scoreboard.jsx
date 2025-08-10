import React from 'react';

export default function Scoreboard({ score, questionIndex, total }) {
  return (
    <div className="score" style={{ textAlign: 'center' }}>
      <h1>Score: {score}</h1><h2>/100</h2>
      <h1>Question: {questionIndex}/{total}</h1>
    </div>
  );
}