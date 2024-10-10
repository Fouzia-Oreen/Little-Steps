 
/* eslint-disable react/prop-types */
import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { registerService } from "@/services";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({children}) {
    const [signUpFormData, setSignUpFormData] =useState(initialSignUpFormData)
    const [signInFormData, setSignInFormData] =useState(initialSignInFormData)

    async function handleRegisterUser(event) {
        event.preventDefault();
        const data = await registerService(signUpFormData);
        console.log(data);
      }
    

    return (
        <AuthContext.Provider value={{
            signUpFormData,
            setSignUpFormData,
            signInFormData, 
            setSignInFormData,
            handleRegisterUser
        }}>{children}</AuthContext.Provider>
    )
}