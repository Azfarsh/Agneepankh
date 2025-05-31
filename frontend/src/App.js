import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import GuruPage from "./components/GuruPage";
import StudentPage from "./components/StudentPage";
import TreePage from "./components/TreePage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/landing"
          element={
              <LandingPage />
          }
        />
        <Route
          path="/guru"
          element={
              <GuruPage />
          }
        />
        <Route
          path="/student"
          element={
              <StudentPage />
          }
        />
        <Route
          path="/tree"
          element={
              <TreePage />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;