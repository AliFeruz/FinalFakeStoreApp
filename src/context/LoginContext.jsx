import { createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";



export const AuthContext = createContext(undefined);

export const AuthContextProvider = (props) => {

    const [user, setUser] = useState(false);
    const [userChecked, setUserChecked] = useState(false);

    const signin = async (email, password) => {
      console.log("Signin called with:", email, password);
    
      try {
        // Perform user authentication logic here
        // After successful authentication, update the user state
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user);
        console.log("User updated:", userCredential.user);
      } catch (error) {
        console.error("Signin error:", error.code, error.message);
        // Handle the error or provide feedback to the user
      }
    };
    
    const signup = async (email, password) => {
      console.log("Signup called with:", email, password);
    
      try {
        // signup logic goes here
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // After successful signup, update the user state
        setUser(userCredential.user);
        console.log("User updated:", userCredential.user);
      } catch (error) {
        console.error("Signup error:", error.code, error.message);
        // Handle the error or provide feedback to the user
      }
    };
    

    const logout = () => {
      signOut(auth)
        .then(() => {
          setUser(null);
        })
        .catch((error) => {
          console.log(error);
        });
    };  
    
    const getActiveUser = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("active user", user);
          setUser(user);
        } else {
          console.log("no active user");
setUser(null)
        }
      setUserChecked(true);

      });
    };
    
    if (user){
      console.warn("user logged in")
    } else {
      console.warn("üser logged out")
    }
    
    useEffect(() => {
      setUserChecked(false);
    
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("active user", user);
          setUser(user);
        } else {
          console.log("no active user");
          setUser(null);
        }
        setUserChecked(true);
      });
    
      // Cleanup the subscription when the component unmounts
      return () => unsubscribe();
    }, []);
    

    return (
      <AuthContext.Provider value={{ user, signin, signup, logout, userChecked }}>
        {props.children}
      </AuthContext.Provider>
    );
  };
  
