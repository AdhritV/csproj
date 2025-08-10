import React from 'react';
import Header from '../components/Header';
import CourseList from '../components/CourseList';
import questionsData from '../api/questions.json';

export default function CatalogPage() {
  const courses = Object.keys(questionsData.Courses);
  return (
    <>
      <Header />
      <CourseList courses={courses} />
    </>
  );
}