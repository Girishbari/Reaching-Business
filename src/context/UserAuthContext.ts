import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebaseConfig";

interface UserAuthContextProps {
    children: ReactNode;
}

interface User {
    // Define the type for your user object here
    // For example, if user has an id, email, and displayName:
    id: string;
    email: string;
    displayName: string;
    // Add other properties as needed
}

interface UserAuthContextValue {
    user: User;
    signUp: (email: string, password: string) => Promise<void>;
    logIn: (email: string, password: string) => Promise<void>;
    logOut: () => Promise<void>;
}

const userAuthContext = createContext<UserAuthContextValue | undefined>(undefined);

export function UserAuthContextProvider({ children }: UserAuthContextProps) {
    const [user, setUser] = useState<User>({ id: "", email: "", displayName: "" });

    function signUp(email: string, password: string) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logIn(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser || { id: "", email: "", displayName: "" });
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <userAuthContext.Provider value={{ user, signUp, logIn, logOut }}>
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    const context = useContext(userAuthContext);
    if (!context) {
        throw new Error("useUserAuth must be used within a UserAuthContextProvider");
    }
    return context;
}
