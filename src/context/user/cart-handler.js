import React, { createContext, useCallback, useContext } from "react";

import { collection, doc, setDoc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { UserContext } from "./user-context";
import { AppContext } from "../app-context";
import { ProductContext } from "../product/product-context";

/**
 * ---------------------------------------------------------------------------------------------------------------------------
 * CART HANDLING
 * ---------------------------------------------------------------------------------------------------------------------------
 */
export function useSelectItem(id) {}
