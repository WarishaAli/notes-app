// firebaseAdmin.ts

import * as firebaseAdmin from 'firebase-admin';

// get this JSON from the Firebase board
// you can also store the values in environment variables
// import serviceAccount from '../secret.json';

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY ? JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY) : undefined,
      clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
    databaseURL: `https://${process.env.PROJECT_ID}.firebaseio.com`,
  });
}

export { firebaseAdmin };