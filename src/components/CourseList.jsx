import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CourseList({ courses }) {
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();
  const filtered = courses.filter(c => c.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div id="menu">
      {/* Title + Search in one line */}
      <div className="course-list-header">
        <h2 className="course-list-title">Courses</h2>
        <input
          className="num-field search"
          placeholder="Search..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </div>

      {filtered.map(course => (
        <button
          key={course}
          className="menu-container"
          onClick={() => navigate(`/course/${encodeURIComponent(course)}`)}
        >
          {course}
        </button>
      ))}
    </div>
  );
}