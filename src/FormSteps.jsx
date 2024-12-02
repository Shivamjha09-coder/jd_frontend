// FormSteps.jsx
import React from "react";
import ProfileForm from "./components/ProfileForm";
import EducationForm from "./components/EducationForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import SkillsForm from "./components/SkillsForm";
import CVUpload from "./components/CVUpload";
import Preview from "./components/Preview";

const stepComponents = [
  ProfileForm,
  EducationForm,
  WorkExperienceForm,
  SkillsForm,
  CVUpload,
];

const FormSteps = ({
  currentStep,
  setCurrentStep,
  formData,
  setFormData,
  isPreview,
  setIsPreview,
  isSubmitted,
  setIsSubmitted,
}) => {
  const StepComponent = stepComponents[currentStep];

  const handleNextStep = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
    if (currentStep < stepComponents.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreview = () => setIsPreview(true);
  const handleSubmit = () => setIsSubmitted(true);

  const isFormCompleted = () => {
    const { name, email, degree, institution, company, role, skills, cv } =
      formData;
    return (
      name && email && degree && institution && company && role && skills && cv
    );
  };

  if (isSubmitted) {
    return (
      <div className="submitted-message">
        <h2>Your profile has been submitted successfully!</h2>
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Degree:</strong> {formData.degree}
        </p>
        <p>
          <strong>Institution:</strong> {formData.institution}
        </p>
        <p>
          <strong>Company:</strong> {formData.company}
        </p>
        <p>
          <strong>Role:</strong> {formData.role}
        </p>
        <p>
          <strong>Skills:</strong> {formData.skills}
        </p>
        <p>
          <strong>CV:</strong>{" "}
          {formData.cv ? formData.cv.name : "No file uploaded"}
        </p>
      </div>
    );
  }

  return (
    <>
      {!isPreview ? (
        <>
          <StepComponent onNext={handleNextStep} data={formData} />
          {currentStep === stepComponents.length - 1 && isFormCompleted() && (
            <button onClick={handlePreview}>Preview</button>
          )}
        </>
      ) : (
        <Preview
          data={formData}
          onEdit={() => setIsPreview(false)}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default FormSteps;
