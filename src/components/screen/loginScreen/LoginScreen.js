import React from "react";
import Button from "../../compon/button/Button";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../helper/firebase";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth)
      .then((userCredential) => {
        // Signup successful, you can redirect or perform additional actions here
        console.log("Signed up:", userCredential.user);
      })
      .catch((error) => {
        // Handle signup error
        console.log("Signup error:", error);
      });
  };

  const handleLogin = () => {
    alert("Login");
  };

  return (
    <div>
      <h1>Looser</h1>
      <label>Email:</label>
     
      <Button text="Login" onClick={handleLogin} />
      <Button text="Sign up" onClick={handleSignup} />
    </div>
  );
}
