import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyDm_-ZLsiaSpz2WTnKOU5m1-222gFkv6K0",
  authDomain: "portfolio-d20d8.firebaseapp.com",
  projectId: "portfolio-d20d8",
  storageBucket: "portfolio-d20d8.firebasestorage.app",
  messagingSenderId: "217599982188",
  appId: "1:217599982188:web:073a34bb60c0fb193df649",
  measurementId: "G-JVCN4JXSX0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app); 