import React, { useState } from 'react';
import {
//   TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
} from '@mui/material';

const QuestionnaireForm: React.FC = () => {
  const [hasHistory, setHasHistory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Family history: ${hasHistory}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <FormControl>
          <FormLabel>Do you have a family history of any major condition?</FormLabel>
          <RadioGroup
            row
            value={hasHistory}
            onChange={(e) => setHasHistory(e.target.value)}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>

        <Button type="submit" variant="contained">
          Continue
        </Button>
      </Stack>
    </form>
  );
};

export default QuestionnaireForm;
