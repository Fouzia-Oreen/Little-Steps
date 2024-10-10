
import logo from "@/assets/logo.png";
import CommonForm from "@/components/common-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signInFormControls, signUpFormControls } from "@/config";
import { AuthContext } from "@/context/auth-context";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

export default function AuthPage() {
    const [activeTab, setActiveTab] = useState('signin');
    const { signUpFormData, 
            setSignUpFormData,
            signInFormData,
            setSignInFormData, 
            handleRegisterUser } = useContext(AuthContext)
    const handleChange = (value) => {
        setActiveTab(value)
    }
    function checkIfSignInFormIsValid() {
        return (
            signInFormData && signInFormData.userEmail != "" && signInFormData.password != ""
        )
    }
    function checkIfSignUpFormIsValid() {
        return (
            signUpFormData && signUpFormData.userName != "" &&signUpFormData.userEmail != "" && signUpFormData.password != ''
        )
    }

  return (
    <div className="flex flex-col min-h-screen">
        <header className="p-4 lg:px-6 h-14 flex items-center border-b-[1px] border-neutral-700 bg-blue-300">
            <Link to={'/'} className="flex items-baseline justify-center ">
            <img src={logo} alt="logo" className=" h-11 w-12 mr-4"/>
            <span className="font-bold text-2xl text-orange-400">Little  Steps</span>
            </Link>
        </header>
        <div className="flex items-center justify-center min-h-screen bg-blue-200">
            <div className=" border-[1px] border-neutral-500 w-[380px] p-4 rounded-md">
            <Tabs value={activeTab} defaultValue="signin" onValueChange={handleChange} className="w-full max-w-md  ">
            <TabsList className="grid w-full grid-cols-2  gap-8 bg-transparent">
                <TabsTrigger value="signin" className="bg-neutral-300 border-[1px] border-neutral-500">Sign In</TabsTrigger>
                <TabsTrigger value="signup" className="bg-neutral-300 border-[1px] border-neutral-500">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signup">
                <Card className=" space-y-4">
                    <CardHeader>
                        <CardTitle className="font-bold text-lg">Sign up</CardTitle>
                        <CardDescription>Enter your name, email and password to sign-up your account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <CommonForm 
                        formControls={signUpFormControls }
                        buttonText={'Sign Up'}
                        formData={signUpFormData}
                        setFormData={setSignUpFormData}
                        isButtonDisabled={!checkIfSignUpFormIsValid()}
                        handleSubmit={handleRegisterUser}
                        />
                    </CardContent>
                
                </Card>                
            </TabsContent>
            <TabsContent value="signin">
            <Card className=" space-y-4">
                    <CardHeader>
                        <CardTitle className="font-bold text-lg">Sign In</CardTitle>
                        <CardDescription>Enter your email and password to sign-in your account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <CommonForm 
                        formControls={signInFormControls }
                        buttonText={'Sign In'}
                        formData={signInFormData}
                        setFormData={setSignInFormData}
                        isButtonDisabled={!checkIfSignInFormIsValid()}
                        />
                    </CardContent>       
                </Card>
            </TabsContent>
            </Tabs>
            </div>
        </div>
    </div>
  )
}
