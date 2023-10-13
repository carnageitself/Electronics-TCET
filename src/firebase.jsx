import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVLeDKbWp5wHD2qsFJCGXpT6g2FjcWHs0",
  authDomain: "admin-dashboard-9e878.firebaseapp.com",
  projectId: "admin-dashboard-9e878",
  storageBucket: "admin-dashboard-9e878.appspot.com",
  messagingSenderId: "1057203911933",
  appId: "1:1057203911933:web:aac5cf2c833c2e13369294",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
