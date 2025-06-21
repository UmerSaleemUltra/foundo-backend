import firebaseAdmin from 'firebase-admin';

// Convert base64 to JSON
const base64Decoded = Buffer.from(process.env.FIREBASE_SECRET_FILE, 'base64').toString('utf8');
const decodedJson = JSON.parse(base64Decoded);

// Firebase config
const firebaseConfig = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(decodedJson),
});

export default firebaseConfig;
