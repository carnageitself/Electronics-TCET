import { createContext, useEffect, useReducer, useState } from "react";
import AuthReducer from "./AuthReducer";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid); // Assuming "users" is your collection name
        try {
          const docSnapshot = await getDoc(userDocRef);
          if (docSnapshot.exists()) {
            setCurrentUser(docSnapshot.data()); // Set user data to state
          } else {
            // Handle the case where the user document doesn't exist
          }
        } catch (error) {
          // Handle any errors that occurred during fetching the user document
          console.error("Error getting user document:", error);
        }
      } else {
        setCurrentUser(null); // If user is not logged in, set currentUser to null
      }
    });
    return () => {
      unsub();
    };
  }, []);

 

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
