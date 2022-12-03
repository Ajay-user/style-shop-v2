import { createContext, useState, useEffect } from "react";

import {
  firebaseAuthChangeListener,
  creatUserDocFromAuth,
} from "../utils/firebase/firebase.util";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = firebaseAuthChangeListener((user) => {
      console.log(user);
      if (user) {
        // now that we've create use doc in user-context
        // we can remove it from sign-in page
        // but sign-up page need the functionality because we are asking for more info
        creatUserDocFromAuth(user);
      }
      // we are setting the user here
      setCurrentUser(user);
    });

    // optional cleanup mechanism for effects.
    // Every effect may return a function that cleans up after it.
    // we should not call this fn
    // react will do it
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
