import express from 'express';
import cors from 'cors';
import * as functions from 'firebase-functions/v2/https';
import questionnaireRoutes from './routes/questionnaire.routes';

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

// Mount routes
app.use('/api/questionnaires', questionnaireRoutes);

// Export Firebase Function v2
export const api = functions.onRequest({ cors: true }, app);
