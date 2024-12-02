// ProgressIndicator.jsx
import React from "react";

const ProgressIndicator = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="progress-indicator">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${index <= currentStep ? "completed" : ""}`}
          onClick={() => onStepClick(index)}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default ProgressIndicator;
