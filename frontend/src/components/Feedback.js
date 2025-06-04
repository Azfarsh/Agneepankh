import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Feedback.css";

const FeedbackPage = () => {
  const { authData } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !feedback.trim()) {
      setError("Please fill in both fields.");
      return;
    }
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authData.token}`,
        },
        body: JSON.stringify({ name, feedback }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Failed to submit feedback.");
      }
    } catch {
      setError("Failed to submit feedback.");
    }
  };

  const handleGoBack = () => {
    navigate("/");
  };

  if (submitted)
  return (
    <div className="thank-you-msg">
      <div>
        Thank you for answering the survey.
        <br />
        <button className="go-back-btn" onClick={handleGoBack}>
          Go back to Login
        </button>
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="feedback-container">
      <h2>Feedback</h2>
      <div className="question-card flashcard">
        <div className="feedback-form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="feedback-input"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="feedback-form-group">
          <label htmlFor="feedback">Feedback</label>
          <textarea
            id="feedback"
            className="feedback-textarea"
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
            placeholder="Enter your feedback here..."
            rows={4}
            required
            style={{ width: "100%", borderRadius: 8, padding: 8, border: "1.5px solid #a7c957" }}
          />
        </div>
        {error && <div className="feedback-error">{error}</div>}
      </div>
      <div className="flashcard-controls">
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FeedbackPage;