import React, { 
    createContext, 
    useState,
    useEffect
} from 'react';
import app from '../firebase/firebase.config';
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, user => {

            setUser(user);
            setLoading(false);
        }, []);

        return () => {
            return unsubscribe();
        }
    });

    const createUser = (email, password) => {

        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = () => {

        setLoading(true);

        return signInWithPopup(auth, googleProvider);
    }

    const login = (email, password) => {

        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signUpWithGmail = () => {
        
        return signInWith
    }

    const logOut = () => {

        return signOut(auth);
    }
    
    const authInfo = {
        user,
        createUser,
        loginWithGoogle,
        loading,
        login,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider