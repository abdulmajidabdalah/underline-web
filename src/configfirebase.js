import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtOgaZ9RpigSTDHWoS_5KMSFd2SMMr4T8",
  authDomain: "underline-website.firebaseapp.com",
  projectId: "underline-website",
  storageBucket: "underline-website.appspot.com",
  messagingSenderId: "122635578981",
  appId: "1:122635578981:web:e56c2a16b2f72f2500e08c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
