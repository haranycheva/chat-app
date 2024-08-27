import {
  RedirectToSignIn,
  RedirectToSignUp,
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  useAuth,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function Login() {
  return (
    <>
      <RedirectToSignUp signUpForceRedirectUrl="/chat-app/" />
    </>
  );
}

export default Login;
