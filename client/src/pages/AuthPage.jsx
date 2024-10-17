import CommonForm from "@/components/common-form/Form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signInFormControls, signUpFormControls } from "@/config/formData.js";
import { AuthContext } from "@/context/authContext";
import { useContext, useState } from "react";

function AuthPage() {
    const [activeTab, setActiveTab] = useState("signin");
    const {
      signInFormData,
      setSignInFormData,
      signUpFormData,
      setSignUpFormData,
      handleRegisterUser,
      handleLoginUser,
    } = useContext(AuthContext);
  
    function handleTabChange(value) {
      setActiveTab(value);
    }
  
    function checkIfSignInFormIsValid() {
      return (
        signInFormData &&
        signInFormData.userEmail !== "" &&
        signInFormData.password !== ""
      );
    }
  
    function checkIfSignUpFormIsValid() {
      return (
        signUpFormData &&
        signUpFormData.userName !== "" &&
        signUpFormData.userEmail !== "" &&
        signUpFormData.password !== ""
      );
    }
  
    //console.log(signInFormData);
  
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex items-center justify-center min-h-screen bg-background">
          <Tabs
            value={activeTab}
            defaultValue="signin"
            onValueChange={handleTabChange}
            className="w-full max-w-md"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
              <Card className="p-6 space-y-4">
                <CardHeader>
                  <CardTitle>Sign in to your account</CardTitle>
                  <CardDescription>
                    Enter your email and password to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <CommonForm
                    formControls={signInFormControls}
                    buttonText={"Sign In"}
                    formData={signInFormData}
                    setFormData={setSignInFormData}
                    isButtonDisabled={!checkIfSignInFormIsValid()}
                    handleSubmit={handleLoginUser}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="signup">
              <Card className="p-6 space-y-4">
                <CardHeader>
                  <CardTitle>Create a new account</CardTitle>
                  <CardDescription>
                    Enter your details to get started
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <CommonForm
                    formControls={signUpFormControls}
                    buttonText={"Sign Up"}
                    formData={signUpFormData}
                    setFormData={setSignUpFormData}
                    isButtonDisabled={!checkIfSignUpFormIsValid()}
                    handleSubmit={handleRegisterUser}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  }
  
  export default AuthPage;