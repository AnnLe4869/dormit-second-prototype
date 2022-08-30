import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import React from "react";
import { createRoot } from "react-dom/client";
import "stop-runaway-react-effects/hijack";
import App from "./App";
import AppContext from "./context/app-context";
import firebaseConfig from "./firebase.config";
import "./index.css";

// this is to populate data only

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const functions = getFunctions(app);
/**
 * the function below connect the app with emulator
 * allow us to do local testing
 * More on https://firebase.google.com/docs/functions/local-emulator#windows
 *
 * WARNING: when running emulator, make sure you rebuild the cloud function every time you make change
 * In details, you should run `npm run build:watch` to watch for change in one terminal
 * and in another terminal, you run the emulator
 * Read more https://stackoverflow.com/questions/64845931/firebase-cloud-function-local-code-changes-are-not-reflected-in-emulators
 */
connectAuthEmulator(auth, "http://localhost:9099");
connectFirestoreEmulator(db, "localhost", 8080);
connectFunctionsEmulator(functions, "localhost", 5001);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <AppContext db={db} auth={auth} functions={functions}>
    <App />
  </AppContext>
);
