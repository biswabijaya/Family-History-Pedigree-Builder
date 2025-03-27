import React from 'react';
import { Routes, Route } from 'react-router-dom';
import QuestionnairePage from '../pages/QuestionnairePage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<QuestionnairePage />} />
    </Routes>
  );
};

export default Router;
