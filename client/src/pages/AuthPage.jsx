import CommonForm from "@/components/common-form/Form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signInFormControls, signUpFormControls } from "@/config/formData.js";
import { AuthContext } from "@/context/authContext";
import { useContext, useState } from "react";

export default function AuthPage() {
    const [activeTab, setActiveTab] = useState('signin');
    const { signUpFormData, 
            setSignUpFormData,
            signInFormData,
            setSignInFormData, 
            handleRegisterUser,
            handleLoginUser
         } = useContext(AuthContext)
    const handleChange = (value) => {
        setActiveTab(value)
    } 
    // console.log(signInFormData);
    
    function checkIfSignInFormIsValid() {
        return (
            signInFormData && 
            signInFormData.userEmail != "" && 
            signInFormData.password != ""
        )
    }
    function checkIfSignUpFormIsValid() {
        return (
            signUpFormData && 
            signUpFormData.userName != "" && 
            signUpFormData.userEmail != "" && 
            signUpFormData.password != ''
        )
    }

  return (
    <div className="flex flex-col min-h-screen">
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
                        <CardDescription>
                            Enter your name, email and password to sign-up your account
                        </CardDescription>
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
                        handleSubmit={handleLoginUser}
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
