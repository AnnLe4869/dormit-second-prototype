import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import React from "react";
import { createRoot } from "react-dom/client";
import "stop-runaway-react-effects/hijack";
import App from "./App";
import AppContext from "./context/app-context";

import "./index.css";
// this is to populate data only
// when in production, admin will create item by hand and will add data to it
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJFe5JBX1JXD2ygq4ryDamTavbO2e9Po4",
  authDomain: "dormit-second-prototype.firebaseapp.com",
  projectId: "dormit-second-prototype",
  storageBucket: "dormit-second-prototype.appspot.com",
  messagingSenderId: "451270285728",
  appId: "1:451270285728:web:9ad8890ea66d822a176cc5",
  measurementId: "G-LW1R7N143W"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const functions = getFunctions(app);
/**
 * the function below connect the app with function emulator
 * allow us to do local testing
 * More on https://firebase.google.com/docs/functions/local-emulator#windows
 * WARNING: when running emulator, make sure you rebuild the cloud function every time you make change
 * In details, you should run `npm run build:watch` to watch for change in one terminal
 * and in another terminal, you run the emulator
 * Read more https://stackoverflow.com/questions/64845931/firebase-cloud-function-local-code-changes-are-not-reflected-in-emulators
 */
// connectFunctionsEmulator(functions, "localhost", 5001);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <AppContext db={db} auth={auth} storage={storage} functions={functions}>
    <App />
  </AppContext>
);
