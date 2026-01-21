import React, { createContext, useContext, useState } from "react";


interface Auth {
    user: string | null;
    roles: string[] | null;
    accessToken: string | null;
}

interface AuthContextType {
    auth: Auth;
    setAuth: React.Dispatch<React.SetStateAction<Auth>>;
    persist: boolean;
    setPersist: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [auth, setAuth] = useState<Auth>({
        user: null,
        roles: null,
        accessToken: null,
    });
    const [persist, setPersist] = useState<boolean>(() => {
        const stored = localStorage.getItem("persist");
        return stored === "true";
    });
    return (
        <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
            {children}
        </AuthContext.Provider >
    )
}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};


export default AuthContext;
