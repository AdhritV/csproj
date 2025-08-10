import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CourseList({ courses }) {
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();
  const filtered = courses.filter(c => c.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div id="menu">
      <input
        className="num-field"
        placeholder="Search for a course..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      {filtered.map(course => (
        <button
          key={course}
          className="menu-container"
          onClick={() => navigate(`/quiz/${encodeURIComponent(course)}/Unit%201/Lesson%201`)}
        >
          {course}
        </button>
      ))}
    </div>
  );
}