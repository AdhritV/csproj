import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import questionsData from '../api/questions.json';

export default function CoursePage() {
  const { course } = useParams();
  const navigate = useNavigate();
  const courseName = decodeURIComponent(course);

  const units = useMemo(() => {
    const courseObj = questionsData.Courses?.[courseName];
    if (!courseObj) return [];
    return Object.keys(courseObj).map(unitName => {
      const lessonsObj = courseObj[unitName] || {};
      const lessonNames = Object.keys(lessonsObj);
      return {
        unitName,
        lessonNames,
      };
    });
  }, [courseName]);

  if (!units.length) {
    return (
      <>
        <Header />
        <div className="title" style={{ marginTop: 40 }}>
          <h2>Course not found: {courseName}</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div id="title" className="course-title">
        {courseName.toUpperCase()}
      </div>

      {/* list all units */}
      <div id="menu">
        {units.map(({ unitName, lessonNames }) => (
          <div className="unit-container" key={unitName}>
            <h1 className="unit-container-title">{unitName}</h1>
            <h1 className="subtext">{unitName}</h1>
          </div>
        ))}
      </div>
    </>
  );
}