var admin = require("firebase-admin");

var serviceAccount = require("./alex-chat-app-tic-firebase-adminsdk-lkjvp-79f59c46f0.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;
