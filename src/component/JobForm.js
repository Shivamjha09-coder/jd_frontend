import React, { useState } from "react";
import { requiredSkills } from "../common/constant";
import Multiselect from "multiselect-react-dropdown";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Range } from "react-range";
import { useNavigate } from "react-router-dom";
const JobForm = () => {
    const [formData, setFormData] = useState({
      jobTitle: "",
      department: "",
      domain: "",
      location: [],
      jobType: "",
      salaryRange: "",
      jobLevel: "",
      employmentType: "",
      jobDescription: "",
      requiredSkills: [],
      experienceLevel: [],
      educationalRequirements: "",
      preferredQualifications: "",
      jobResponsibilities: "",
      benefits: "",
      deadline: new Date(),
    });
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [values, setValues] = useState([0, 20]);
    const navigate = useNavigate();
    const handleChange = (newValues) => {
      setValues(newValues);
      setFormData({...formData,experienceLevel:values})
    };
    const handleSelectSkills = (selectedList, selectedItem) => {
      setSelectedSkills(selectedList);
      setFormData({...formData,requiredSkills:selectedSkills})
      console.log("Selected:", selectedList);
    };
    const handleRemoveSkills = (selectedList, removedItem) => {
      setSelectedSkills(selectedList);
      setFormData({...formData,requiredSkills:selectedSkills})
      console.log("Removed:", removedItem);
    };
    const handleJobTypeCheckboxChange = (e) => {
      const value = e.target.value;
      setFormData((prevData) => ({
        ...prevData,
        location: e.target.checked
          ? [...prevData.location, value]
          : prevData.location.filter((item) => item !== value),
      }));
    };
    const handleOnSubmit=()=>{
      console.log(formData);
      navigate("/job-desc", { state: { jd: formData } });
    }
    return (
        <div className="container mt-5 bg-dark text-light">
        <h1 className="text-center mb-4">Job Form</h1>
        <form>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>Job Title <span className="text-danger">*</span></label>
                <input
                  type="text"
                  className="form-control"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={(e) =>
                    setFormData({ ...formData, jobTitle: e.target.value })
                  }
                  placeholder="Enter Job Title"
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Department <span className="text-danger">*</span></label>
                <input
                  type="text"
                  className="form-control"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                  placeholder="Enter Department"
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Domain <span className="text-danger">*</span></label>
                <select required className="form-control text-center" 
                value={formData.domain} onChange={(e) =>setFormData({ ...formData, domain: e.target.value })}>
                    <option value={0}>-----Choose-----</option>
                    <option value={1}>IT</option>
                    <option value={2}>Health</option>
                    <option value={3}>Energy</option>
                    <option value={4}>Finance</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-4">
              <div className="form-group">
                <label>Location <span className="text-danger">*</span></label><br></br>
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" onChange={handleJobTypeCheckboxChange} value={1} id="remote"/>
                <label className="form-check-label">Remote</label>
                </div>
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" onChange={handleJobTypeCheckboxChange} value={2} id="hybrid"/>
                <label className="form-check-label">Hybrid</label>
                </div>
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" onChange={handleJobTypeCheckboxChange} value={3} id="Onsite"/>
                <label className="form-check-label">On-Site</label>
              </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Job Type <span className="text-danger">*</span></label>
                <select required className="form-control text-center" value={formData.jobType} onChange={(e)=>setFormData({...formData,jobType:e.target.value})}>
                    <option value={0}>-----Choose-----</option>
                    <option value={1}>Full Time</option>
                    <option value={2}>Part Time</option>
                    <option value={3}>Contract</option>
                    <option value={4}>Internship</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Job Level <span className="text-danger">*</span></label>
                <select required className="form-control text-center" value={formData.jobLevel} onChange={(e)=>setFormData({...formData,jobLevel:e.target.value})}>
                    <option value={0}>-----Choose-----</option>
                    <option value={1}>Entry</option>
                    <option value={2}>Mid</option>
                    <option value={3}>Senior</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-4">
              <div className="form-group">
                <label>Salary Range <span className="text-danger">*</span></label>
                <input
                className="form-control"
                type="text"
                min={0}
                required
                value={formData.salaryRange}
                onChange={(e)=>setFormData({...formData,salaryRange:e.target.value})}
                placeholder="Enter Salary Range(4LPA to 6LPA)"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Employment Type <span className="text-danger">*</span></label>
                <select required className="form-control text-center" value={formData.employmentType} onChange={(e)=>setFormData({...formData,employmentType:e.target.value})}>
                    <option value={0}>-----Choose-----</option>
                    <option value={1}>Permanent</option>
                    <option value={2}>Temporary</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Job Description Summary <span className="text-danger">*</span></label>
                <textarea 
                rows={3}
                cols={3}
                value={formData.jobDescription}
                onChange={(e)=>setFormData({...formData,jobDescription:e.target.value})}
                placeholder="Enter Short Job Description"
                className="form-control"
                required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
            <div className="form-group">
                <label>Required Skills <span className="text-danger">*</span></label>
                <Multiselect
                options={requiredSkills}
                selectedValues={selectedSkills}
                onSelect={handleSelectSkills}
                onRemove={handleRemoveSkills}
                displayValue="skill"
                placeholder="Select Required Skills"
                className="form-control"
                style={{
                  multiselectContainer: {
                    background: "#f8f9fa",
                    borderRadius: "4px",
                  },
                  chips: {
                    background: "#007bff",
                  },
                  optionContainer: {
                    background: "#ffffff",
                  },
                }}
              />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
              <label className="form-label">Experience Level <span className="text-danger">*</span></label>
              <Range
                step={1}
                min={0}
                max={20}
                values={values}
                onChange={handleChange}
                renderTrack={({ props, children }) => {
                  const { key, ...restProps } = props; // Destructure to exclude "key"
                  return (
                    <div
                      {...restProps} // Spread the remaining props (excluding "key")
                      style={{
                        height: "6px",
                        background: "#ddd",
                        position: "relative",
                        marginTop: "20px",
                        marginBottom: "20px",
                        borderRadius: "4px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          height: "6px",
                          background: "#007bff",
                          left: `${((values[0] / 20) * 100).toFixed(2)}%`,
                          width: `${(((values[1] - values[0]) / 20) * 100).toFixed(2)}%`,
                          borderRadius: "4px",
                        }}
                      />
                      {children.map((child, index) => (
                        <React.Fragment key={index}>{child}</React.Fragment> // Assign a unique key to each child
                      ))}
                    </div>
                  );
                }}
                renderThumb={({ props, index }) => {
                  const { key, ...restProps } = props; // Destructure to exclude "key"
                  return (
                    <div
                      {...restProps} // Spread the remaining props (excluding "key")
                      style={{
                        height: "20px",
                        width: "20px",
                        borderRadius: "50%",
                        backgroundColor: "#007bff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        outline: "none",
                        border: "2px solid #fff",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "-30px",
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#ffff",
                        }}
                      >
                        {values[index]}
                      </div>
                    </div>
                  );
                }}
              />

            <p>
              Experience: <strong>{values[0]} years</strong> to{" "}
              <strong>{values[1]} years</strong>
            </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
              <label className="form-label">Educational Requirements <span className="text-danger">*</span></label>
              <textarea 
                rows={3}
                cols={3}
                value={formData.educationalRequirements}
                onChange={(e)=>setFormData({...formData,educationalRequirements:e.target.value})}
                placeholder="Enter Educational Requirements"
                className="form-control"
                required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
            <div className="form-group">
              <label className="form-label">Preferred Qualifications <span className="text-danger">*</span></label>
              <textarea 
                rows={3}
                cols={3}
                value={formData.preferredQualifications}
                onChange={(e)=>setFormData({...formData,preferredQualifications:e.target.value})}
                placeholder="Enter Preferred Qualifications"
                className="form-control"
                required
                />
              </div>
            </div>
            <div className="col-md-4">
            <div className="form-group">
              <label  className="form-label">Job Responsibilities <span className="text-danger">*</span></label>
              <textarea 
                rows={3}
                cols={3}
                value={formData.jobResponsibilities}
                onChange={(e)=>setFormData({...formData,jobResponsibilities:e.target.value})}
                placeholder="Enter Job Responsibilities"
                className="form-control"
                required
                />
              </div>
            </div>
            <div className="col-md-4">
            <div className="form-group">
              <label className="form-label">Benefits/Perks <span className="text-danger">*</span></label>
              <textarea 
                rows={3}
                cols={3}
                value={formData.benefits}
                onChange={(e)=>setFormData({...formData,benefits:e.target.value})}
                placeholder="Enter Perks"
                className="form-control"
                required
                />
            </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label className="form-label">Deadline for Application <span className="text-danger">*</span></label>
                <br/>
                <DatePicker
                selected={formData.deadline}
                onChange={(date) => setFormData({ ...formData, deadline: date })}
                className="form-control"
                dateFormat="MM/dd/yyyy"
                placeholderText="Select a date"
                />
              </div>
            </div>
          </div>
          <button type="button" onClick={handleOnSubmit} className="btn btn-primary mt-3 mb-3">Preview</button>
        </form>
      </div>
    );
  };
  
  export default JobForm;
  