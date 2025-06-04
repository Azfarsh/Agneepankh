import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./GuruPage.css";

const GuruPage = () => {
  const { authData, logout } = useAuth();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("/api/mcq/guru", {
      headers: {
        Authorization: `Bearer ${authData.token}`,
      },
    })
      .then(res => res.json())
      .then(data => setQuestions(data.questions));
  }, [authData.token]);

  const handleChange = (qid, option) => {
    setAnswers({ ...answers, [qid]: option });
  };

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authData.token}`,
      },
      body: JSON.stringify({
        role: "guru",
        answers: Object.entries(answers).map(([question_id, selected_option]) => ({
          question_id,
          selected_option,
        })),
      }),
    });
    navigate("/feedback");
  };

  if (!questions.length) return <div>Loading...</div>;

  const q = questions[current];

  return (
    <form onSubmit={handleSubmit} className="guru-questions-container">
      <h2>Guru MCQ Questions</h2>
      <div className="question-card flashcard">
        <div className="question-title">{q.question}</div>
        <div className="options-list">
          {["option_a", "option_b", "option_c", "option_d"].map(opt => (
            <label key={opt}>
              <input
                type="radio"
                name={`q${q.id}`}
                value={q[opt]}
                checked={answers[q.id] === q[opt]}
                onChange={() => handleChange(q.id, q[opt])}
                required
              />
              <span>{q[opt]}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flashcard-controls">
        <button type="button" onClick={handlePrev} disabled={current === 0}>Prev</button>
        {current < questions.length - 1 ? (
          <button type="button" onClick={handleNext} disabled={!answers[q.id]}>Next</button>
        ) : (
          <button type="submit" className="submit-btn" disabled={Object.keys(answers).length !== questions.length}>
            Submit
          </button>
        )}
      </div>
      <div className="flashcard-progress">
        {current + 1} / {questions.length}
      </div>
    </form>
  );
};

export default GuruPage;