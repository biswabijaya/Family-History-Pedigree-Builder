import express from 'express';
import { saveResponse, getUserResponses } from '../services/firestore.service';
import { verifyToken } from '../middlewares/auth';

const router = express.Router();

// Protect all routes with auth middleware
router.use(verifyToken);

// POST /api/questionnaires
router.post('/', async (req, res) => {
    const { user, body } = req as any;

    try {
        const id = await saveResponse(user.uid, body);
        res.status(201).json({ id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to save data' });
    }
});

// GET /api/questionnaires
router.get('/', async (req, res) => {
    const { user } = req as any;

    try {
        const responses = await getUserResponses(user.uid);
        res.json(responses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

export default router;
