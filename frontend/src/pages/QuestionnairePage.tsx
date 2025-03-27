import React from 'react';
import { Container, Typography } from '@mui/material';
import QuestionnaireForm from '../sections/QuestionnaireForm';

const QuestionnairePage: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Family History Questionnaire
      </Typography>
      <QuestionnaireForm />
    </Container>
  );
};

export default QuestionnairePage;
