import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// To make the app work you need a .env file in the client folder
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID
};

console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
