import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvn4a610WAyGSBhD0mHJuVVbKETLZwbcU",
  authDomain: "image-gallery-427ee.firebaseapp.com",
  projectId: "image-gallery-427ee",
  storageBucket: "image-gallery-427ee.firebasestorage.app",
  messagingSenderId: "475072626312",
  appId: "1:475072626312:web:5944065e8be53ba380e93d"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
};
