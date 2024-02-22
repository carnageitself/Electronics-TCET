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
      const userDocRef = doc(db, "users", user.uid); 
        try {
          const docSnapshot = await getDoc(userDocRef);
          if (docSnapshot.exists()) {
            setCurrentUser(docSnapshot.data()); // Set user data to state
            console.log(currentUser, "current")
          } else {
            console.log("User doesnt exist")// Handle the case where the user document doesn't exist
          }
        } catch (error) {
          // Handle any errors that occurred during fetching the user documentz
          console.error("Error getting user document:", error);
        }
    })
    return () => {
        unsub()
    }
}, [])

  

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
