import React, { useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
  Alert,
} from '@mui/material';
import { useAuth } from '../context/AuthContext'; // custom context for Firebase Auth
import { saveQuestionnaireResponse } from '../services/firestore'; // Firestore save function

const QuestionnaireForm: React.FC = () => {
  const { user } = useAuth(); // access authenticated user

  // Track current step in multi-step form
  const [step, setStep] = useState(1);

  // UI flags
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Define the interface for form data
  interface QuestionnaireData {
    hasHistory: string;
    relation: string;
    condition: string;
    ageOfOnset: string;
    status: string;
  }
  
  // Main form state
  const [formData, setFormData] = useState<QuestionnaireData>({
    hasHistory: '',
    relation: '',
    condition: '',
    ageOfOnset: '',
    status: '',
  });

  // Handle final form submission to Firestore
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!user) {
      setError('You must be logged in to submit.');
      return;
    }

    try {
      setLoading(true);
      // Save form data to Firestore linked to user ID
      await saveQuestionnaireResponse(user.uid, formData);
      setSubmitted(true); // show success alert

      // Reset form and step
      setFormData({
        hasHistory: '',
        relation: '',
        condition: '',
        ageOfOnset: '',
        status: '',
      });
      setStep(1);
    } catch (err) {
      console.error(err);
      setError('Failed to save response.');
    } finally {
      setLoading(false);
    }
  };

  // Navigation between steps
  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };
  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        {/* Alerts */}
        {error && <Alert severity="error">{error}</Alert>}
        {submitted && <Alert severity="success">Response submitted successfully!</Alert>}

        {/* Step 1: Family history yes/no */}
        {step === 1 && (
          <FormControl>
            <FormLabel>Do you have a family history of any major condition?</FormLabel>
            <RadioGroup
              row
              value={formData.hasHistory}
              onChange={(e) =>
                setFormData({ ...formData, hasHistory: e.target.value })
              }
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        )}

        {/* Step 2: Relation to the patient */}
        {step === 2 && (
          <TextField
            label="Relation (e.g., Mother, Uncle)"
            value={formData.relation}
            onChange={(e) =>
              setFormData({ ...formData, relation: e.target.value })
            }
            fullWidth
            required
          />
        )}

        {/* Step 3: Condition name */}
        {step === 3 && (
          <TextField
            label="Medical Condition (e.g., Diabetes)"
            value={formData.condition}
            onChange={(e) =>
              setFormData({ ...formData, condition: e.target.value })
            }
            fullWidth
            required
          />
        )}

        {/* Step 4: Age of onset */}
        {step === 4 && (
          <TextField
            label="Age of Onset"
            type="number"
            value={formData.ageOfOnset}
            onChange={(e) =>
              setFormData({ ...formData, ageOfOnset: e.target.value })
            }
            fullWidth
            required
          />
        )}

        {/* Step 5: Status of the family member */}
        {step === 5 && (
          <FormControl>
            <FormLabel>Status</FormLabel>
            <RadioGroup
              row
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
            >
              <FormControlLabel value="alive" control={<Radio />} label="Alive" />
              <FormControlLabel value="deceased" control={<Radio />} label="Deceased" />
            </RadioGroup>
          </FormControl>
        )}

        {/* Navigation Buttons */}
        <Stack direction="row" spacing={2} justifyContent="space-between">
          {step > 1 && (
            <Button onClick={handleBack} variant="outlined">
              Back
            </Button>
          )}
          {step < 5 ? (
            <Button onClick={handleNext} variant="contained">
              Next
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          )}
        </Stack>
      </Stack>
    </form>
  );
};

export default QuestionnaireForm;
