/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { initialSignInFormData, initialSignUpFormData } from "@/config/formData";
import { checkAuthService, loginService, registerService } from "@/services";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({children}) {
    const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData)
    const [signInFormData, setSignInFormData] = useState(initialSignInFormData)
    const [auth, setAuth] = useState({
        authenticate : false,
        user: null
    })


    async function handleRegisterUser(event) {
        event.preventDefault();
        const data = await registerService(signUpFormData);
        console.log(data);
    }
    async function handleLoginUser(event) {
        event.preventDefault();
        const data = await loginService(signInFormData);
        if (data.success) {
            sessionStorage.setItem('accessToken', JSON.stringify(data.data.accessToken))
            setAuth({
                authenticate : true,
                user: data.user
            })
        } else {
            setAuth({
                authenticate : false,
                user: null
            })
        }
        console.log(data);
    }
    // checkAuth
    async function checkAuthUser() {
        const data = await checkAuthService();
        if (data.success) {
            setAuth({
                authenticate : true,
                user: data.user
            })
        }else {
            setAuth({
                authenticate : false,
                user: null
            })
        }
    }
    useEffect(() => {
        checkAuthUser()
    }, [])
    

    return (
        <AuthContext.Provider value={{
            signUpFormData,
            setSignUpFormData,
            signInFormData, 
            setSignInFormData,
            handleRegisterUser,
            handleLoginUser
        }}>{children}
        </AuthContext.Provider>
    )
}