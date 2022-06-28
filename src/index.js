import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import React from "react";
import { createRoot } from "react-dom/client";
import "stop-runaway-react-effects/hijack";
import App from "./App";
import AppContext from "./context/app-context";
import firebaseConfig from "./my-firebase.config";
import "./index.css";

// this is to populate data only
// when in production, admin will create item by hand and will add data to it
import { getStorage } from "firebase/storage";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <AppContext db={db} auth={auth} storage={storage}>
    <App />
  </AppContext>
);
