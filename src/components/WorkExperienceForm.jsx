import React, { useState } from "react";
import "./WorkExperience.css";

const WorkExperienceForm = ({ onNext, data }) => {
  const [experiences, setExperiences] = useState(data.experiences || []);
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [keyResponsibilities, setKeyResponsibilities] = useState("");
  const [skills, setSkills] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const maxSkillsAllowed = 30;

  const jobTitleSuggestions = [
    "SDE 1",
    "SDE 2",
    "SDE 3",
    "Java Developer",
    "Python Developer",
    "PHP Developer",
    "React.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "DevOps Engineer",
    "Data Scientist",
    "Machine Learning Engineer",
  ];

  const calculateDuration = (start, end) => {
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();
    const diffYears = endDate.getFullYear() - startDate.getFullYear();
    const diffMonths = endDate.getMonth() - startDate.getMonth();
    const totalMonths = diffYears * 12 + diffMonths;
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return { years, months };
  };

  const getTotalSkills = () => {
    return experiences.reduce(
      (total, exp) => total + exp.skills.split(",").length,
      0
    );
  };

  const handleAddExperience = () => {
    if (
      !jobTitle ||
      !company ||
      !startDate ||
      !keyResponsibilities ||
      !skills
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const currentSkillsCount = skills.split(",").length;
    const totalSkills = getTotalSkills() + currentSkillsCount;

    if (totalSkills > maxSkillsAllowed) {
      alert(
        `Skill limit exceeded. You can only add up to ${maxSkillsAllowed} skills across all experiences.`
      );
      return;
    }

    const newExperience = {
      jobTitle,
      company,
      startDate,
      endDate,
      keyResponsibilities,
      skills,
    };
    setExperiences([...experiences, newExperience]);

    setJobTitle("");
    setCompany("");
    setStartDate("");
    setEndDate("");
    setKeyResponsibilities("");
    setSkills("");
  };

  const handleRemoveExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };

  const handleSkipExperience = () => {
    onNext({ experiences });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ experiences });
  };

  const hasValidExperience = () => {
    return experiences.some((exp) => exp.jobTitle && exp.startDate);
  };

  const handleJobTitleChange = (value) => {
    setJobTitle(value);
    const filteredSuggestions = jobTitleSuggestions.filter((title) =>
      title.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setJobTitle(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-xl-10" style={{ width: "48rem" }}>
          <div className="card shadow-lg p-4 bg-dark text-light">
            <h2 className="text-center mb-4 text-primary">Work Experience</h2>
            <form onSubmit={handleSubmit}>
              {/* Job Title Input */}
              <div className="mb-3 position-relative">
                <label htmlFor="jobTitle" className="form-label text-white">
                  Job Title
                </label>
                <input
                  id="jobTitle"
                  type="text"
                  className="form-control bg-dark text-light"
                  value={jobTitle}
                  onChange={(e) => handleJobTitleChange(e.target.value)}
                />
                {suggestions.length > 0 && (
                  <ul className="suggestions-list bg-light text-dark">
                    {suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="suggestion-item"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Rest of the inputs */}
              <div className="mb-3">
                <label htmlFor="company" className="form-label text-white">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  className="form-control bg-dark text-light"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="startDate" className="form-label text-white">
                  Start Date
                </label>
                <input
                  id="startDate"
                  type="date"
                  className="form-control bg-dark text-light"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="endDate" className="form-label text-white">
                  End Date 
                </label>
                <input
                  id="endDate"
                  type="date"
                  className="form-control bg-dark text-light"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="keyResponsibilities"
                  className="form-label text-white"
                >
                  Key Responsibilities
                </label>
                <textarea
                  id="keyResponsibilities"
                  className="form-control bg-dark text-light"
                  value={keyResponsibilities}
                  onChange={(e) => setKeyResponsibilities(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="skills" className="form-label text-white">
                  Skills (comma-separated)
                </label>
                <textarea
                  id="skills"
                  className="form-control bg-dark text-light"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
              </div>

              <div className="mb-3 text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddExperience}
                >
                  Add Experience
                </button>
              </div>

              <div>
                <h3 className="text-center text-light">Work Experience List</h3>
                {experiences.length > 0 ? (
                  <ul className="list-group">
                    {experiences.map((experience, index) => {
                      const duration = calculateDuration(
                        experience.startDate,
                        experience.endDate
                      );
                      return (
                        <li
                          key={index}
                          className="list-group-item bg-dark text-light"
                        >
                          <p>
                            <strong>Job Title:</strong> {experience.jobTitle}
                          </p>
                          <p>
                            <strong>Company:</strong> {experience.company}
                          </p>
                          <p>
                            <strong>Start Date:</strong> {experience.startDate}
                          </p>
                          <p>
                            <strong>End Date:</strong>{" "}
                            {experience.endDate || "Present"}
                          </p>
                          <p>
                            <strong>Duration:</strong> {duration.years} years,{" "}
                            {duration.months} months
                          </p>
                          <p>
                            <strong>Responsibilities:</strong>{" "}
                            {experience.keyResponsibilities}
                          </p>
                          <p>
                            <strong>Skills:</strong> {experience.skills}
                          </p>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => handleRemoveExperience(index)}
                          >
                            Remove
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-center text-light">
                    No work experience added yet.
                  </p>
                )}
              </div>

              <div className="d-flex justify-content-between mt-4">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleSkipExperience}
                >
                  Skip for Now
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!hasValidExperience()}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceForm;
