import { initializeApp } from 'firebase/app';

// @ts-ignore
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// ------------------------------------------------------------------

import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyDDrcQtPm_Uj_Jgwj5ryCM6w_wHHL_ooLE",
  authDomain: "lab-fisika-1.firebaseapp.com",
  projectId: "lab-fisika-1",
  storageBucket: "lab-fisika-1.firebasestorage.app",
  messagingSenderId: "841215217278",
  appId: "1:841215217278:web:00433fb15ffe3b11e5922f",
  measurementId: "G-C8BER70SQM"
};

const app = initializeApp(firebaseConfig);

// Inisialisasi Auth dengan Persistence (Agar user gak logout pas aplikasi ditutup)
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});