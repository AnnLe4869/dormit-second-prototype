import { useContext } from "react";

import { AppContext } from "../app-context";

import { UserContext } from "./user-context";

/**
 * return a function that when called will
 * fetch all current orders that the users has
 */
export function useLoadCurrentOrders() {
  const { state: userState } = useContext(UserContext);

  return async () => {};
}

/**
 * return a function that when called will
 * fetch all past orders that the users has
 */
export function useLoadPastOrders() {
  const { auth, db } = useContext(AppContext);
  const { state: userState } = useContext(UserContext);

  return async () => {};
}
/**
 * return a function that when called will
 * fetch all current and past orders that the users has
 */
export function useLoadAllOrders() {
  const { state: userState } = useContext(UserContext);

  return async () => {};
}
