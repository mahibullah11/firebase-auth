// import React from "react";
import React, { useState } from "react";
import "./Home.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import App from "../App";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignInActive, setIsSignInActive] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  const handleMethodChange = () => {
    setIsSignInActive(!isSignInActive);
    setError("");
  };

  function handleSigup(e) {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter your email and password!");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((Response) => {
        const user = Response.user;
        navigate("/private");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }
  function handleSignin(e) {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter your email and password!");
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((Response) => {
        const user = Response.user;
        navigate("/private");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }

  return (
    <div className="form-container">
      <form className="form">
        <h2>
          {isSignInActive ? (
            <span style={{ color: "#2196f3" }}>Sigup</span>
          ) : (
            <span style={{ color: "green" }}>Signin</span>
          )}
        </h2>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className="input-field"
        />
        <label htmlFor="password">password : </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          className="input-field"
        />
        {error && <p className="error-massege">{error}</p>}

        {isSignInActive ? (
          <button onClick={handleSigup} className="button sign-up-btn">
          Signup
        </button>
        
        ) : (
          <button onClick={handleSignin} className="button sign-in-btn">
          {" "}
          Signin
        </button>
          
        )}
        <p className="form-switch">
          {isSignInActive
            ? "Don't have an account?"
            : "Alredy have an account?"}
          <span onClick={handleMethodChange} className="form-switch-link">
            {isSignInActive ? "Sing In" : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Home;
