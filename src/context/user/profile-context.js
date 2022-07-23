import { useContext } from "react";
import { UserContext } from "./user-context";

/**
 * return a function that when called will update user first name
 */
export function useUpdateFirstName() {
  const { state, dispatch } = useContext(UserContext);

  /**
   * update user's first name when called
   *
   * in firebase, in "users" collection, each user has field named "first_name"
   * update this field
   * then update user's field in Context by calling dispatch({type: SET_FIRST_NAME, payload: {name: "your name"}})
   */
  return async (name) => {};
}

/**
 * return a function that when called will update user first name
 */
export function useUpdateLastName() {
  const { state, dispatch } = useContext(UserContext);

  /**
   * update user's last name when called
   *
   * in firebase, in "users" collection, each user has field named "last_name"
   * update this field
   * then update user's field in Context by calling dispatch({type: SET_LAST_NAME, payload: {name: "your name"}})
   */
  return async (name) => {};
}
