// src/AuthProvider.tsx
import React, { useEffect, useState, useContext, createContext } from "react";
import { auth, firestore } from './../firebase';



export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loadingAuthState, setLoadingAuthState] = useState(true);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoadingAuthState(false);
        });
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                authenticated: user !== null,
                setUser,
                loadingAuthState
            }}>
            {children}
        </AuthContext.Provider>
    );
}