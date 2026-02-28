import { firebaseConfig, FUNCTIONS_REGION } from "./firebase-config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, serverTimestamp, query, where, orderBy, limit, onSnapshot, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getStorage, ref as sRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-functions.js";

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app, FUNCTIONS_REGION);

export const firebase = {
  RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged, signOut,
  doc, setDoc, getDoc, addDoc, collection, serverTimestamp, query, where, orderBy, limit, onSnapshot, updateDoc,
  sRef, uploadBytes, getDownloadURL,
  httpsCallable
};
