// Configuración de Firebase Admin SDK usando el JSON completo de credenciales
const admin = require('firebase-admin');
require('dotenv').config();

const firebaseCredentials = JSON.parse(process.env.FIREBASE_CREDENTIALS_JSON);

admin.initializeApp({
  credential: admin.credential.cert(firebaseCredentials),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const db = admin.firestore();

module.exports = db;
