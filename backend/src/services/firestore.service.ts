import { db } from '../firebase';

export const saveResponse = async (uid: string, data: any) => {
    const doc = await db.collection('questionnaires').add({
        userId: uid,
        data,
        createdAt: new Date(),
    });
    return doc.id;
};

export const getUserResponses = async (uid: string) => {
    const snapshot = await db
        .collection('questionnaires')
        .where('userId', '==', uid)
        .orderBy('createdAt', 'desc')
        .get();

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));
};
