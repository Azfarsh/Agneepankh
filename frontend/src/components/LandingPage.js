import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./LandingPage.css";
import background from "../assets/new-background.png";
import appLogo from "../assets/logo.png";
import guruHelp from "../assets/guru.png";
import studentHelp from "../assets/student.png";
import treeHelp from "../assets/tree.png";

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
  const [showOverlay, setShowOverlay] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [showAreas, setShowAreas] = useState(false);

  useEffect(() => {
    if (location.state && location.state.showGuide) {
      setShowHelp(true);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  useEffect(() => {
    if (showOverlay) {
      const timer = setTimeout(() => {
        setShowOverlay(false);
        setTimeout(() => setContentVisible(true), 400); // match fade duration
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showOverlay]);

  const handleOverlayClick = () => {
    setShowOverlay(false);
    setTimeout(() => setContentVisible(true), 400); // match fade duration
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-content")) return;
    if (!e.target.classList.contains("help-img")) setExpanded(false);
  };

  const handleGuruClick = () => {
    navigate("/guru");
  };

  const handleStudentClick = () => {
    navigate("/student");
  };

  const handleTreeClick = () => {
    navigate("/tree");
  };

  return (
    <div className={`landing-container${showAreas ? " show-areas" : ""}`}>
      {showOverlay && (
        <div className="cloud-blue-overlay fade-in-out" onClick={handleOverlayClick}>
          <div className="cloud-animation" />
        </div>
      )}
      <div className={`landing-content-animated${contentVisible ? " visible" : ""}`} style={{ display: showOverlay ? 'none' : 'block' }}>
        <img src={background} alt="Background" className="background-image" />
        <img src={appLogo} alt="Agnee Pankh Logo" className="landing-logo" />
        {/* Help Button */}
        <button className="help-btn" onClick={() => setShowHelp(true)}>User Guide</button>
        {/* <button
          className="help-btn"
          style={{ top: 80, right: 32, position: "absolute" }}
          onClick={() => setShowAreas((prev) => !prev)}
        >
        {showAreas ? "Hide Clickable Areas" : "Show Clickable Areas"}
        </button> */}
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
        <div 
          className="clickable-area guru" 
          onClick={handleGuruClick}
          style={{ cursor: 'pointer' }}
        />
        <div 
          className="clickable-area student" 
          onClick={handleStudentClick}
          style={{ cursor: 'pointer' }}
        />
        <div 
          className="clickable-area tree" 
          onClick={handleTreeClick}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default LandingPage;