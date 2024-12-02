import React, { useState } from "react";
import { institutions } from "./data";

const EducationForm = ({ onNext, data }) => {
  const initialEducationState = {
    level: "",
    institution: "",
    degree: "", // Added degree selection
    specialization: "", // Added specialization selection
    gradingSystem: "cgpa",
    cgpa: "",
    percentage: "",
    certificate: null,
    startDate: "",
    endDate: "",
    isPursuing: false,
  };

  const degrees = {
    UG: ["BCA", "BSc", "BTech"],
    PG: ["MTech", "MCA", "MCS"],
  };

  const specializations = {
    UG: {
      BCA: ["IT", "CS", "Maths"],
      BSc: ["IT", "Physics", "Chemistry", "Maths"],
      BTech: ["IT", "CS", "Mechanical", "ECE", "Civil"],
    },
    PG: {
      MTech: ["IT", "CS", "Mechanical", "ECE", "Civil"],
      MCA: ["IT", "CS", "Software Engineering"],
      MCS: ["CS", "Data Science", "AI"],
    },
  };

  const [educationDetails, setEducationDetails] = useState(
    data.educationDetails || [
      { ...initialEducationState, level: "10th" },
      { ...initialEducationState, level: "12th" },
      { ...initialEducationState, level: "UG" },
      { ...initialEducationState, level: "PG" },
      { ...initialEducationState, level: "PhD" },
    ]
  );

  const handleChange = (index, field, value) => {
    const updatedEducationDetails = [...educationDetails];
    updatedEducationDetails[index][field] = value;
    setEducationDetails(updatedEducationDetails);
  };

  const handleFileChange = (index, file) => {
    const updatedEducationDetails = [...educationDetails];
    updatedEducationDetails[index].certificate = file;
    setEducationDetails(updatedEducationDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const detail of educationDetails) {
      if (!detail.institution) {
        alert(`Please enter the institution for ${detail.level}.`);
        return;
      }
      if (
        detail.gradingSystem === "cgpa" &&
        (detail.cgpa === "" || detail.cgpa < 0 || detail.cgpa > 10)
      ) {
        alert(`Please enter a valid CGPA (0-10) for ${detail.level}.`);
        return;
      }
      if (
        detail.gradingSystem === "percentage" &&
        (detail.percentage === "" ||
          detail.percentage < 0 ||
          detail.percentage > 100)
      ) {
        alert(`Please enter a valid Percentage (0-100) for ${detail.level}.`);
        return;
      }
      if (detail.level === "PhD" && !detail.certificate) {
        alert("Please upload your PhD certificate.");
        return;
      }
      // Validate end date > start date
      if (
        detail.endDate &&
        new Date(detail.endDate) < new Date(detail.startDate)
      ) {
        alert(
          `End date for ${detail.level} cannot be earlier than start date.`
        );
        return;
      }
    }
    onNext({ educationDetails });
  };

  return (
    <div className="container my-5">
      <div className="shadow-lg p-5 mb-5 bg-dark text-light rounded">
        <h2 className="text-center mb-4 text-light">Education Details</h2>
        <form onSubmit={handleSubmit}>
          {educationDetails.map((edu, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-primary">{edu.level} Details</h4>

              {/* Institution */}
              <div className="mb-3 row">
                <label
                  htmlFor={`institution-${index}`}
                  className="col-sm-3 col-form-label text-light"
                >
                  Institution
                </label>
                <div className="col-sm-9">
                  <select
                    id={`institution-${index}`}
                    className="form-select bg-dark text-light border-light"
                    value={edu.institution}
                    onChange={(e) =>
                      handleChange(index, "institution", e.target.value)
                    }
                    required
                  >
                    <option value="">Select Institution</option>
                    {institutions[edu.level]?.map((inst, i) => (
                      <option key={i} value={inst}>
                        {inst}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Degree selection for UG/PG */}
              {edu.level === "UG" || edu.level === "PG" ? (
                <>
                  <div className="mb-3 row">
                    <label
                      htmlFor={`degree-${index}`}
                      className="col-sm-3 col-form-label text-light"
                    >
                      Degree
                    </label>
                    <div className="col-sm-9">
                      <select
                        id={`degree-${index}`}
                        className="form-select bg-dark text-light border-light"
                        value={edu.degree}
                        onChange={(e) =>
                          handleChange(index, "degree", e.target.value)
                        }
                        required
                      >
                        <option value="">Select Degree</option>
                        {degrees[edu.level]?.map((degree, i) => (
                          <option key={i} value={degree}>
                            {degree}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Specialization selection */}
                  {edu.degree && specializations[edu.level][edu.degree] && (
                    <div className="mb-3 row">
                      <label
                        htmlFor={`specialization-${index}`}
                        className="col-sm-3 col-form-label text-light"
                      >
                        Specialization
                      </label>
                      <div className="col-sm-9">
                        <select
                          id={`specialization-${index}`}
                          className="form-select bg-dark text-light border-light"
                          value={edu.specialization}
                          onChange={(e) =>
                            handleChange(
                              index,
                              "specialization",
                              e.target.value
                            )
                          }
                          required
                        >
                          <option value="">Select Specialization</option>
                          {specializations[edu.level][edu.degree].map(
                            (spec, i) => (
                              <option key={i} value={spec}>
                                {spec}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                    </div>
                  )}
                </>
              ) : null}

              {/* Start Date */}
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label text-light">
                  Start Date
                </label>
                <div className="col-sm-9">
                  <input
                    type="date"
                    className="form-control bg-dark text-light border-light"
                    value={edu.startDate}
                    onChange={(e) =>
                      handleChange(index, "startDate", e.target.value)
                    }
                    required={!edu.isPursuing}
                  />
                </div>
              </div>

              {/* End Date / Currently Pursuing */}
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label text-light">
                  End Date / Currently Pursuing
                </label>
                <div className="col-sm-9">
                  <input
                    type="date"
                    className="form-control bg-dark text-light border-light"
                    value={edu.isPursuing ? "" : edu.endDate}
                    onChange={(e) =>
                      handleChange(index, "endDate", e.target.value)
                    }
                    disabled={edu.isPursuing}
                  />
                  <div className="form-check mt-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={`isPursuing-${index}`}
                      checked={edu.isPursuing}
                      onChange={() =>
                        handleChange(index, "isPursuing", !edu.isPursuing)
                      }
                    />
                    <label
                      htmlFor={`isPursuing-${index}`}
                      className="form-check-label text-light"
                    >
                      Currently Pursuing
                    </label>
                  </div>
                </div>
              </div>

              {/* Grading System */}
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label text-light">
                  Grading System
                </label>
                <div className="col-sm-9">
                  <div className="form-check form-check-inline text-light">
                    <input
                      type="radio"
                      id={`cgpa-${index}`}
                      name={`gradingSystem-${index}`}
                      className="form-check-input"
                      value="cgpa"
                      checked={edu.gradingSystem === "cgpa"}
                      onChange={() =>
                        handleChange(index, "gradingSystem", "cgpa")
                      }
                    />
                    <label
                      htmlFor={`cgpa-${index}`}
                      className="form-check-label text-light"
                    >
                      CGPA
                    </label>
                  </div>
                  <div className="form-check form-check-inline text-light">
                    <input
                      type="radio"
                      id={`percentage-${index}`}
                      name={`gradingSystem-${index}`}
                      className="form-check-input"
                      value="percentage"
                      checked={edu.gradingSystem === "percentage"}
                      onChange={() =>
                        handleChange(index, "gradingSystem", "percentage")
                      }
                    />
                    <label
                      htmlFor={`percentage-${index}`}
                      className="form-check-label text-light"
                    >
                      Percentage
                    </label>
                  </div>
                </div>
              </div>

              {/* CGPA */}
              {edu.gradingSystem === "cgpa" && (
                <div className="mb-3 row">
                  <label
                    htmlFor={`cgpa-${index}`}
                    className="col-sm-3 col-form-label text-light"
                  >
                    CGPA
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control bg-dark text-light border-light"
                      value={edu.cgpa}
                      onChange={(e) =>
                        handleChange(index, "cgpa", e.target.value)
                      }
                      min="0"
                      max="10"
                    />
                  </div>
                </div>
              )}

              {/* Percentage */}
              {edu.gradingSystem === "percentage" && (
                <div className="mb-3 row">
                  <label
                    htmlFor={`percentage-${index}`}
                    className="col-sm-3 col-form-label text-light"
                  >
                    Percentage
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control bg-dark text-light border-light"
                      value={edu.percentage}
                      onChange={(e) =>
                        handleChange(index, "percentage", e.target.value)
                      }
                      min="0"
                      max="100"
                    />
                  </div>
                </div>
              )}

              {/* Upload Certificate */}
              {edu.level === "PhD" && (
                <div className="mb-3 row">
                  <label
                    htmlFor={`certificate-${index}`}
                    className="col-sm-3 col-form-label text-light"
                  >
                    Certificate
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="file"
                      className="form-control-file bg-dark text-light border-light"
                      onChange={(e) =>
                        handleFileChange(index, e.target.files[0])
                      }
                    />
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="d-flex justify-content-center mt-5">
            <button type="submit" className="btn btn-primary btn-lg">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EducationForm;
