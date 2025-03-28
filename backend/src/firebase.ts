import admin from 'firebase-admin';
import dotenv from 'dotenv';
dotenv.config();

// Go to Project Settings > Service accounts > Generate new private key
// and download the JSON file - firebase-service-account.json
// Make sure to add this file to .gitignore
// and do not share it publicly
// You can generate this file from Firebase Console

const serviceAccount = require("../firebase-service-account.json");
// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "<your-firebase-project-id>.appspot.com",
});


export const db = admin.firestore();
export const auth = admin.auth();
