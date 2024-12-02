import React, { useState } from "react";

const SkillsForm = ({ onNext, data }) => {
  const [hardSkills, setHardSkills] = useState(data.hardSkills || []);
  const [softSkills, setSoftSkills] = useState(data.softSkills || []);
  const [newHardSkill, setNewHardSkill] = useState(""); // Separate state for hard skills
  const [newSoftSkill, setNewSoftSkill] = useState(""); // Separate state for soft skills
  const [hardSkillYears, setHardSkillYears] = useState(""); // Separate state for hard skill years
  const [softSkillYears, setSoftSkillYears] = useState(""); // Separate state for soft skill years
  const [skillSuggestions] = useState([
    "JavaScript",
    "HTML",
    "CSS",
    "React.js",
    "Node.js",
    "Java",
    "Python",
    "SQL",
    "TypeScript",
    "MongoDB",
    "Git",
    "Docker",
    "GraphQL",
    "AWS",
    "Azure",
    "DevOps",
    "Android",
    "Swift",
    "Ruby",
    "C#",
    "Go",
    "PHP",
    "C++",
    "Kotlin",
    "Scala",
    "Rust",
    "Flutter",
    "Vue.js",
    "Angular",
    "Express.js",
    "Laravel",
  ]); // Predefined list of skills to suggest

  const handleAddSkill = (skillType, skill, years) => {
    if (
      skillType === "hard" &&
      newHardSkill &&
      hardSkillYears &&
      hardSkills.length < 30
    ) {
      const newSkillObject = { skill, years };
      setHardSkills([...hardSkills, newSkillObject]);
      setNewHardSkill(""); // Clear the hard skill input
      setHardSkillYears(""); // Clear the hard skill years input
    } else if (
      skillType === "soft" &&
      newSoftSkill &&
      softSkillYears &&
      softSkills.length < 30
    ) {
      const newSkillObject = { skill, years };
      setSoftSkills([...softSkills, newSkillObject]);
      setNewSoftSkill(""); // Clear the soft skill input
      setSoftSkillYears(""); // Clear the soft skill years input
    }
  };

  const handleRemoveSkill = (skillType, index) => {
    if (skillType === "hard") {
      setHardSkills(hardSkills.filter((_, i) => i !== index));
    } else if (skillType === "soft") {
      setSoftSkills(softSkills.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hardSkills.length === 0 || softSkills.length === 0) {
      alert("Please add at least one hard skill and one soft skill.");
      return;
    }
    onNext({ hardSkills, softSkills });
  };

  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit} className="bg-dark p-4 rounded shadow-lg">
        <h1 className="text-center text-warning mb-4">Skills</h1>

        {/* Hard Skills Section */}
        <div className="skill-section mb-4">
          <h3 className="text-light">Hard Skills</h3>

          <div className="mb-3">
            <input
              type="text"
              placeholder="Search and select a skill"
              value={newHardSkill}
              onChange={(e) => setNewHardSkill(e.target.value)}
              className="form-control bg-dark text-light placeholder-light-bold"
            />
            <div className="suggestions mt-2">
              {newHardSkill &&
                skillSuggestions
                  .filter((skill) =>
                    skill.toLowerCase().includes(newHardSkill.toLowerCase())
                  )
                  .slice(0, 5) // Limit to 5 suggestions
                  .map((skill, index) => (
                    <div
                      key={index}
                      className="suggested-skill bg-secondary p-2 rounded mb-1"
                      onClick={() => setNewHardSkill(skill)} // Set selected skill to input
                    >
                      {skill}
                    </div>
                  ))}
            </div>
          </div>

          <div className="mb-3">
            <input
              type="number"
              placeholder="Years of experience"
              value={hardSkillYears}
              onChange={(e) => setHardSkillYears(e.target.value)}
              className="form-control bg-dark text-light placeholder-light-bold"
            />
          </div>

          <button
            type="button"
            className="btn btn-success btn-block mx-3"
            onClick={() => handleAddSkill("hard", newHardSkill, hardSkillYears)}
            disabled={hardSkills.length >= 30}
          >
            Add Hard Skill
          </button>

          <ul className="list-unstyled mt-2 text-light">
            {hardSkills.map((skill, index) => (
              <li
                key={index}
                className="bg-dark text-light p-2 mb-2 rounded"
                style={{
                  backgroundColor: "#343a40",
                  border: "1px solid #495057",
                }}
              >
                <span>
                  {" "}
                  {skill.skill} - {skill.years} years{" "}
                </span>
                <button
                  style={{ margin: "auto" }}
                  type="button"
                  onClick={() => handleRemoveSkill("hard", index)}
                  className="btn btn-danger btn-sm ml-2"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Soft Skills Section */}
        <div className="skill-section mb-4">
          <h3 className="text-light">Soft Skills</h3>

          <div className="mb-3">
            <input
              type="text"
              placeholder="Search and select a skill"
              value={newSoftSkill}
              onChange={(e) => setNewSoftSkill(e.target.value)}
              className="form-control bg-dark text-light placeholder-light-bold"
            />
            <div className="suggestions mt-2">
              {newSoftSkill &&
                skillSuggestions
                  .filter((skill) =>
                    skill.toLowerCase().includes(newSoftSkill.toLowerCase())
                  )
                  .slice(0, 5) // Limit to 5 suggestions
                  .map((skill, index) => (
                    <div
                      key={index}
                      className="suggested-skill bg-secondary p-2 rounded mb-1"
                      onClick={() => setNewSoftSkill(skill)} // Set selected skill to input
                    >
                      {skill}
                    </div>
                  ))}
            </div>
          </div>

          <div className="mb-3">
            <input
              type="number"
              placeholder="Years of experience"
              value={softSkillYears}
              onChange={(e) => setSoftSkillYears(e.target.value)}
              className="form-control bg-dark text-light placeholder-light-bold"
            />
          </div>

          <button
            type="button"
            className="btn btn-success btn-block"
            onClick={() => handleAddSkill("soft", newSoftSkill, softSkillYears)}
            disabled={softSkills.length >= 30}
          >
            Add Soft Skill
          </button>

          <ul className="list-unstyled mt-2 text-light">
            {softSkills.map((skill, index) => (
              <li
                key={index}
                className="bg-dark text-light p-2 mb-2 rounded"
                style={{
                  backgroundColor: "#343a40",
                  border: "1px solid #495057",
                }}
              >
                {skill.skill} - {skill.years} years
                <button
                  style={{ margin: "auto" }}
                  type="button"
                  onClick={() => handleRemoveSkill("soft", index)}
                  className="btn btn-danger btn-sm ml-2 mx-3"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary btn-block"
          style={{ backgroundColor: "#007BFF" }}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default SkillsForm;
