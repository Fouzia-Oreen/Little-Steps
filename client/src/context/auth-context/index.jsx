/* eslint-disable react/prop-types */
import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({children}) {
    const [signUpFormData, setSignUpFormData] =useState(initialSignUpFormData)
    const [signInFormData, setSignInFormData] =useState(initialSignInFormData)
    return (
        <AuthContext.Provider value={{
            signUpFormData, setSignUpFormData,
            signInFormData, setSignInFormData
        }}>{children}</AuthContext.Provider>
    )
}