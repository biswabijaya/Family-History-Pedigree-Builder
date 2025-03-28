import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Alert,
  CircularProgress,
} from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { getUserResponses } from '../services/firestore';

interface ResponseData {
  id: string;
  data: {
    relation: string;
    condition: string;
    ageOfOnset: string | number;
    status: string;
  };
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [responses, setResponses] = useState<ResponseData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

      try {
        const result = await getUserResponses(user.uid);
        setResponses(result as ResponseData[]);
      } catch (err) {
        setError('Failed to load data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (!user) return <Alert severity="error">You must be logged in</Alert>;

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Family History Submissions
      </Typography>

      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      {!loading && responses.length === 0 && (
        <Alert severity="info">No submissions yet.</Alert>
      )}

      <List>
        {responses.map((entry) => (
          <div key={entry.id}>
            <ListItem>
              <ListItemText
                primary={`${entry.data.relation} (${entry.data.condition})`}
                secondary={`Age of Onset: ${entry.data.ageOfOnset}, Status: ${entry.data.status}`}
              />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Container>
  );
};

export default Dashboard;
