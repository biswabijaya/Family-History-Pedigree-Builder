import { Request, Response, NextFunction } from 'express';
import { auth } from '../firebase';

export const verifyToken = (
    req: Request & { user?: any },
    res: Response,
    next: NextFunction
): void => {
    const header = req.headers.authorization;

    if (!header || !header.startsWith('Bearer ')) {
        res.status(401).json({ error: 'Unauthorized: Missing token' });
        return;
    }

    const idToken = header.split(' ')[1];

    auth
        .verifyIdToken(idToken)
        .then((decoded) => {
            req.user = decoded;
            next();
        })
        .catch((err) => {
            console.error('Token error', err);
            res.status(401).json({ error: 'Unauthorized: Invalid token' });
        });
};
