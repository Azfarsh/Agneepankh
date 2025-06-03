import React, { useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import appLogo from "../assets/logo.png";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuthData } = useAuth();
  const [error, setError] = useState("");

  const handleGoogleSignIn = async () => {
    setError("");
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();
      setAuthData({ token, uid: user.uid, email: user.email });
      navigate("/landing", { state: { showGuide: true } });
    } catch (error) {
      setError("Google sign-in failed. Please try again.");
    }
  };

  return (
    <div className="login-main-container">
      <div className="login-card">
        <img src={appLogo} alt="Agnee Pankh Logo" className="login-logo-centered" />
        <h1 className="app-title">Agneepankh</h1>
        <div className="tagline">Empower to walk, run and fly 1 day.</div>
        <div className="app-intro">
          <p>
            Welcome to <b>Agneepankh</b>! This app is designed to collect valuable insights through MCQ-based surveys from three unique perspectives:
          </p>
          <ul>
            <li>
              <b>Guru</b> – for teachers and mentors
            </li>
            <li>
              <b>Student</b> – for learners and students
            </li>
            <li>
              <b>Tree</b> – representing the industry and community
            </li>
          </ul>
          <p>
            <b>How it works:</b> <br />
            Log in to begin. On the next page, choose your role by clicking on Guru, Student, or Tree. You'll then answer a set of MCQ questions tailored to your role. Your responses help us empower and uplift the entire learning community!
          </p>
        </div>
        <button className="google-signin-btn" onClick={handleGoogleSignIn}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            className="google-icon"
          />
          Sign in with Google
        </button>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default LoginPage;