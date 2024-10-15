export const signUpFormControls = [
  {
    name: 'UserName',
    label: "User Name",
    placeholder: "Enter your name",
    type: 'text',
    componentType: 'input'
  },
  {
    name: 'userEmail',
    label: "User Email",
    placeholder: "Enter your email",
    type: 'email',
    componentType: 'input'
  },
  {
    name: 'password',
    label: "Password",
    placeholder: "Enter your password",
    type: 'password',
    componentType: 'input'
  }
]

export const signInFormControls = [
    {
      name: 'userEmail',
      label: "User Email",
      placeholder: "Enter your email",
      type: 'email',
      componentType: 'input'
    },
    {
      name: 'password',
      label: "Password",
      placeholder: "Enter your password",
      type: 'password',
      componentType: 'input'
    }
]

export const initialSignInFormData = {
  userEmail: "",
  password: ""
}
export const initialSignUpFormData = {
    UserName: "",
    userEmail: "",
    password: ""
}
