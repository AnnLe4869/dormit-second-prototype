import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AppContext from "./context/app-context";
import firebaseConfig from "./firebase.config";
import "./index.css";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <AppContext db={db}>
    <App />
  </AppContext>
);
