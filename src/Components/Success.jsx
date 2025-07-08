import React from "react";
import { useNavigate } from "react-router-dom";
import "./Success.css"; // if you want to separate styling

const Success = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // Change to your desired route
  };

  return (
    <div className="success-page">
      <div className="success-card">
        <h1 className="success-title">🎉 Message Sent Successfully!</h1>
        <p className="success-text">
          Thank you for reaching out. We'll get back to you as soon as possible.
        </p>
        <button className="go-back-button" onClick={handleGoBack}>
          Go Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default Success;
