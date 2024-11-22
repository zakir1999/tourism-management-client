import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
       }

       const signIn = (email,password) =>{
        setLoading(true);    
      return signInWithEmailAndPassword(auth,email,password) 
     }

     const logOut =() =>{
        setLoading(true);
        return signOut(auth);
       }

       const profilePicture = (name,photoURL) =>{
        
        return updateProfile(auth.currentUser,{displayName:name,photoURL})
       }


       useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser =>{
           console.log('user in the auth state change',currentUser)
           setUser(currentUser);
           setLoading(false)
       });
       return () =>{
           unSubscribe ();
       }
   
      },[])


    const authInfo ={
        user,
        setUser,
        createUser,
        signIn,
        logOut,
        loading,
        profilePicture,
        googleLogin,
        updateProfile


    }





    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>


    
    );
};

export default AuthProviders;