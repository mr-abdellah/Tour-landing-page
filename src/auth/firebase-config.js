import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC-sgUdpdYHVJdwU5TMkoris6FSA78nGRk",
  authDomain: "tour-4a6ff.firebaseapp.com",
  projectId: "tour-4a6ff",
  storageBucket: "tour-4a6ff.appspot.com",
  messagingSenderId: "862788433378",
  appId: "1:862788433378:web:4e2df26be0932b94daf5bb",
  measurementId: "G-S5DGHL5GJ5"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
