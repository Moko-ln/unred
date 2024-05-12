"use client"

import {createContext, useContext, FC, useState, useEffect} from "react";
import { auth } from "@/data/FirebaseConfig";
import {onAuthStateChanged} from "@firebase/auth";

// Créez le contexte
export const AuthContext = createContext<any>({
    user: null,
});

export const AuthProvider = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: any) => {
            setUser(user)
        });

        return () => unsubscribe();
    }, [user])

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}

// Fonction utilitaire pour utiliser le contexte dans les composants
export const useAuth = () => useContext(AuthContext);