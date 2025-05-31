import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./LandingPage.css";
import background from "../assets/background.png";
import appLogo from "../assets/logo.png";
import guruHelp from "../assets/guru-border.png";
import studentHelp from "../assets/student-border.png";
import treeHelp from "../assets/tree-border.png";

const helpSlides = [
  {
    img: guruHelp,
    text: "If you are a teacher or mentor, click on this part of the landing page."
  },
  {
    img: studentHelp,
    text: "If you are a student or learner, click on any one of the highlighted area."
  },
  {
    img: treeHelp,
    text: "If you represent an institution or industry, click here."
  }
];

const LandingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showHelp, setShowHelp] = useState(false);
  const [slide, setSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (location.state && location.state.showGuide) {
      setShowHelp(true);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);
  
  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-content")) return;
    if (!e.target.classList.contains("help-img")) setExpanded(false);
  };

  return (
    <div className="landing-container">
      <img src={background} alt="Background" className="background-image" />
      <img src={appLogo} alt="Agnee Pankh Logo" className="landing-logo" />

      {/* Help Button */}
<button className="help-btn" onClick={() => setShowHelp(true)}>User Guide</button>

      {/* Help Modal */}
      {showHelp && (
        <div className="modal-overlay" onClick={handleModalClick}>
          <div className="modal-content">
            <h2 className="modal-heading">User Guide</h2>
            <img
              src={helpSlides[slide].img}
              alt="Help"
              className={`help-img${expanded ? " expanded" : ""}`}
              onClick={e => {
                e.stopPropagation();
                setExpanded(!expanded);
              }}
              style={{ cursor: "zoom-in" }}
            />
            <div className="help-instructions">{helpSlides[slide].text}</div>
            <div className="modal-controls">
              <button onClick={() => setSlide(s => Math.max(0, s - 1))} disabled={slide === 0}>Prev</button>
              <button onClick={() => setSlide(s => Math.min(helpSlides.length - 1, s + 1))} disabled={slide === helpSlides.length - 1}>Next</button>
              <button onClick={() => setShowHelp(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Clickable areas */}
      <div className="clickable-area guru" onClick={() => navigate("/guru")} />
      <div className="clickable-area student1" onClick={() => navigate("/student")} />
      <div className="clickable-area student2" onClick={() => navigate("/student")} />
      <div className="clickable-area student3" onClick={() => navigate("/student")} />
      <div className="clickable-area student4" onClick={() => navigate("/student")} />
      <div className="clickable-area tree" onClick={() => navigate("/tree")} />
    </div>
  );
};

export default LandingPage;