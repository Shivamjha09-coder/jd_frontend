// import React, { useEffect, useState } from "react";
// import { Tabs, Tab, Form, Row, Col, Button } from "react-bootstrap";
// import Multiselect from "multiselect-react-dropdown";
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { requiredSkills, softSkills, stateCityConst, preferredSkills, experiencedSkills } from "../common/constant";
// import { useNavigate } from "react-router-dom";
// import { constructFrom } from "date-fns/fp";

// const JobPostForm = () => {
//   const [formData, setFormData] = useState({
//     companyName: "",
//     jobTitle: "",
//     department: "",
//     domain: "",
//     state: "",
//     city: "",
//     jobType: "",
//     RelevantExperience: "",
//     salaryRange: "",
//     salaryType: "",
//     salaryCurrency: "",
//     aboutCompany: "",
//     responsibilities: "",
//     Qualification: "",
//     RequiredQualification: "",
//     OverallyearsofExperience: "",
//     jobLevel: "",
//     employmentType: "",
//     jobDescription: "",
//     softSkills: [],
//     hardSkills: [],
//     requiredSkills: [],
//     experienceLevel: [],
//     educationalRequirements: "",
//     preferredQualifications: "",
//     jobResponsibilities: "",
//     vacancies: "",
//     availability: "",
//     noticePeriod: 0,
//     workmode: "",
//     modeOfEmployment: "",
//     PreferredQualification: "",
//     levelOfRole: "",
//     Benefits: "",
//     Summary: "",
//     Stream: "",
//     preferredSkills: "",
//     deadline: new Date(),
//   });
//   const [activeTab, setActiveTab] = useState("jobForm");
//   const [errors, setErrors] = useState({});
//   const [stateCity, setStateCity] = useState(stateCityConst || []);
//   const [isNoticePeriod, setIsNoticePeriod] = useState(false);
//   const [cityarray, setCity] = useState([]);
//   const [selectedHardSkills, setSelectedHardSkills] = useState([]);
//   const [selectedSoftSkills, setSelectedSoftSkills] = useState([]);
//   const [selectedpreferredSkills, setSelectedpreferredSkills] = useState([]);
//   const [selectedexperiencedSkills, setSelectedexperiencedSkills] = useState([]);
//   const navigate = useNavigate();
//   const handleTabChange = (key) => {
//     setActiveTab(key);
//   };
//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.companyName) newErrors.companyName = "Company Name is required.";
//     if (!formData.jobTitle) newErrors.jobTitle = "Job Title is required.";
//     if (!formData.workmode) newErrors.workmode = "Work Mode is required.";
//     if (!formData.domain) newErrors.domain = "Domain is required.";
//     if(!formData.aboutCompany) newErrors.aboutCompany = "About Company is required.";
//     if(!formData.responsibilities) newErrors.responsibilities = "responsibilities is required.";

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };
//   const handleStateChange = (e) => {
//     const { name, value } = e.target;
//     // console.log(value);
//     if (value) {
//       setFormData({ ...formData, [name]: value });
//       setCity(
//         stateCity
//           .filter((item) => item.id === parseInt(value)).flatMap((item) => item.cities)
//       );
//     }
//   }
//   const handleAvailabilityChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     if (parseInt(value) === 2) {
//       setIsNoticePeriod(true);
//     } else {
//       setIsNoticePeriod(false);
//     }
//   }
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSelectpreferredSkills = (selectedList) => {
//     setSelectedpreferredSkills(selectedList);
//     setFormData({ ...formData, preferredSkills: selectedpreferredSkills });
//   };

//   const handleRemovepreferredSkills = (removedList) => {
//     setSelectedpreferredSkills(removedList);
//     setFormData({ ...formData, preferredSkills: selectedpreferredSkills });
//   };

//   const handleSelectexperiencedSkills = (selectedList) => {
//     setSelectedexperiencedSkills(selectedList);
//     setFormData({ ...formData, experiencedSkills: selectedexperiencedSkills });
//   };

//   const handleRemoveexperiencedSkills = (removedList) => {
//     setSelectedexperiencedSkills(removedList);
//     setFormData({ ...formData, experiencedSkills: selectedexperiencedSkills });
//   };

//   const handleSelectHardSkills = (selectedList) => {
//     setSelectedHardSkills(selectedList);
//     setFormData({ ...formData, hardSkills: selectedHardSkills });
//   };

//   const handleSelectSoftSkills = (selectedList) => {
//     setSelectedSoftSkills(selectedList);
//     setFormData({ ...formData, softSkills: selectedSoftSkills });
//   };

//   const handleRemoveHardSkills = (removedList) => {
//     setSelectedHardSkills(removedList);
//     setFormData({ ...formData, hardSkills: selectedHardSkills });
//   };

//   const handleRemoveSoftSkills = (removedList) => {
//     setSelectedSoftSkills(removedList);
//     setFormData({ ...formData, softSkills: selectedSoftSkills });
//   };
//   const NextButton = () => {
//     setActiveTab("workExperience");
//   }
//   const NextButton2 = () => {
//     setActiveTab("Education");
//   }
//   const handleOnSubmit = () => {
//     if (validateForm()) {
//       navigate("/job-desc", { state: { jd: formData } });
//       console.log("Form Submitted", formData);
//     }
//   }

//   return (
//     <div className="container my-5">
//       <h1 className="mb-4" align="center">Job Posting and Experience Form</h1>

//       {/* Tab Navigation */}
//       <Tabs
//         activeKey={activeTab}
//         onSelect={handleTabChange}
//         className="mb-4"
//         justify
//       >
//         {/* <Tab eventKey="Uploadfile" title="Upload File"></Tab> */}
//         <Tab eventKey="jobForm" title="Job Form">
//           <div className="p-3">
//             {/* Job Form Section */}
//             <h4>Job Details</h4>
//             <Row>
//               <Col md={4}>
//                 <Form.Group controlId="Company Name" className="mb-3">
//                   <Form.Label>Company Name <span className="text-danger">*</span></Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter Company Name"
//                     name="companyName"
//                     value={formData.companyName}
//                     onChange={(e) => {
//                       handleInputChange(e);
//                       if (e.target.value.trim() !== "") {
//                         setErrors((prevErrors) => ({
//                           ...prevErrors,
//                           companyName: null,
//                         }));
//                       }
//                     }}
//                   />
//                   {errors.companyName && <div className="text-danger">{errors.companyName}</div>}
//                 </Form.Group>
//               </Col>

//               <Col md={4}>
//                 <Form.Group controlId="jobTitle" className="mb-3">
//                   <Form.Label>Job Title <span className="text-danger">*</span></Form.Label>
//                   <Form.Control as="select" name="jobTitle" value={formData.jobTitle} onChange={(e) => {
//                     handleInputChange(e);
//                     if (e.target.value.trim() !== "") {
//                       setErrors((prevErrors) => ({
//                         ...prevErrors,
//                         jobTitle: null,
//                       }));
//                     }
//                   }
//                   }>
//                     <option value={0}>---Select---</option>
//                     <option value={1}>ASDE</option>
//                     <option value={2}>SDE 1</option>
//                     <option value={3}>SDE 2</option>
//                     <option value={4}>Software Engineer</option>
//                     <option value={5}>Tester</option>
//                   </Form.Control>
//                   {errors.jobTitle && <div className="text-danger">{errors.jobTitle}</div>}
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group controlId="salaryDetails" className="mb-3">
//                   <Form.Label>Job Location</Form.Label>
//                   <div className="d-flex align-items-center">
//                     <Form.Control
//                       as="select"
//                       name="state"
//                       value={formData.state}
//                       onChange={handleStateChange}
//                       className="flex-fill"
//                     >
//                       <option>---Select State---</option>
//                       {
//                         stateCity && stateCity.map((item, index) => (
//                           <option key={item.id} value={item.id}>{item.state}</option>
//                         ))
//                       }
//                     </Form.Control>
//                     <div className="d-flex gap-2" style={{ width: "70%" }}>
//                       {/* Salary Type */}
//                       <Form.Control
//                         as="select"
//                         name="city"
//                         value={formData.city}
//                         onChange={handleInputChange}
//                         className="flex-fill"
//                       >
//                         <option>---Select City---</option>
//                         {
//                           cityarray && cityarray.map((item, index) => (
//                             <option key={index} value={item}>{item}</option>
//                           ))
//                         }
//                       </Form.Control>
//                     </div>
//                   </div>

//                   {/* Error Messages */}
//                   {errors.salaryRange && <div className="text-danger mt-1">{errors.salaryRange}</div>}
//                   {errors.salaryType && <div className="text-danger mt-1">{errors.salaryType}</div>}
//                   {errors.salaryCurrency && <div className="text-danger mt-1">{errors.salaryCurrency}</div>}
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row>
//               <Col md={4}>
//                 <Form.Group controlId="vacancies" className="mb-3">
//                   <Form.Label>No of Vacancies</Form.Label>
//                   <Form.Control
//                     type="number"
//                     placeholder="Enter number of vacancies"
//                     name="vacancies"
//                     value={formData.vacancies}
//                     onChange={handleInputChange}
//                   />
//                   {errors.vacancies && <div className="text-danger">{errors.vacancies}</div>}
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group controlId="availability" className="mb-3">
//                   <Form.Label>Availability</Form.Label>
//                   <Form.Control as="select" name="availability" value={formData.availability} onChange={handleAvailabilityChange}>
//                     <option value={0}>---Select---</option>
//                     <option value={1}>Immediate Joiner</option>
//                     <option value={2}>Notice Period</option>
//                   </Form.Control>
//                   {isNoticePeriod &&
//                     <>
//                       <Form.Range
//                         min={0}
//                         max={90}
//                         step={15}
//                         name="noticePeriod"
//                         value={formData.noticePeriod}
//                         onChange={handleInputChange}
//                       />
//                       <div>{formData.noticePeriod} days</div>
//                     </>
//                   }
//                   {errors.availability && <div className="text-danger">{errors.availability}</div>}
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group controlId="workmode" className="mb-3">
//                   <Form.Label>Work Mode <span className="text-danger">*</span></Form.Label>
//                   <div className="d-flex align-items-center gap-3">
//                     <Form.Check
//                       type="radio"
//                       id="onsite"
//                       name="workmode"
//                       label="On-site"
//                       value={"onsite"}
//                       checked={formData.workmode === "onsite"}
//                       onChange={(e) => {
//                         handleInputChange(e);
//                         if (e.target.value.trim() !== "") {
//                           setErrors((prevErrors) => ({
//                             ...prevErrors,
//                             workmode: null,
//                           }));
//                         }
//                       }
//                     }
//                     />
//                     <Form.Check
//                       type="radio"
//                       id="remote"
//                       name="workmode"
//                       label="Remote"
//                       value={"remote"}
//                       checked={formData.workmode === "remote"}
//                       onChange={(e) => {
//                         handleInputChange(e);
//                         if (e.target.value.trim() !== "") {
//                           setErrors((prevErrors) => ({
//                             ...prevErrors,
//                             workmode: null,
//                           }));
//                         }
//                       }
//                     }
//                     />
//                     <Form.Check
//                       type="radio"
//                       id="hybrid"
//                       name="workmode"
//                       label="Hybrid"
//                       value={"hybrid"}
//                       checked={formData.workmode === "hybrid"}
//                       onChange={(e) => {
//                         handleInputChange(e);
//                         if (e.target.value.trim() !== "") {
//                           setErrors((prevErrors) => ({
//                             ...prevErrors,
//                             workmode: null,
//                           }));
//                         }
//                       }
//                     }
//                     />
//                   </div>
//                   {errors.workmode && <div className="text-danger">{errors.workmode}</div>}
//                 </Form.Group>
//               </Col>

//             </Row>
//             <Row>
//               <Col md={4}>
//                 <Form.Group controlId="modeOfEmployment" className="mb-3">
//                   <Form.Label>Mode Of Employeement</Form.Label>
//                   <Form.Control as="select" name="modeOfEmployment" value={formData.modeOfEmployment} onChange={handleInputChange}>
//                     <option value={0}>---Select---</option>
//                     <option value={1}>Part Time</option>
//                     <option value={2}>Full Time</option>
//                     <option value={3}>Freelancer</option>
//                     <option value={4}>Internship</option>
//                   </Form.Control>
//                   {errors.modeOfEmployment && <div className="text-danger">{errors.modeOfEmployment}</div>}
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group controlId="levelOfRole" className="mb-3">
//                   <Form.Label>Level Of Role</Form.Label>
//                   <Form.Control as="select" name="levelOfRole" value={formData.levelOfRole} onChange={handleInputChange}>
//                     <option value={0}>---Select---</option>
//                     <option value="Junior">Junior</option>
//                     <option value="Senior">Senior</option>
//                     <option value="Associate">Associate</option>
//                     <option value="Mid">Mid</option>
//                     <option value="C-Level">C-Level</option>
//                     <option value="Director">Director</option>
//                     <option value="VP">VP</option>
//                   </Form.Control>
//                   {errors.levelOfRole && <div className="text-danger">{errors.levelOfRole}</div>}
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group controlId="domain" className="mb-3">
//                   <Form.Label>Domain <span className="text-danger">*</span></Form.Label>
//                   <Form.Control as="select" name="domain" value={formData.domain} onChange={(e) => {
//                     handleInputChange(e);
//                     if (e.target.value.trim() !== "") {
//                       setErrors((prevErrors) => ({
//                         ...prevErrors,
//                         domain: null,
//                       }));
//                     }
//                   }}>
//                     <option value={0}>---Select---</option>
//                     <option value="IT">IT</option>
//                     <option value="Energy">Energy</option>
//                     <option value="Finance">Finance</option>
//                     <option value="Health">Health</option>
//                   </Form.Control>
//                   {errors.domain && <div className="text-danger">{errors.domain}</div>}
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row>
//               <Col md={4}>
//                 <Form.Group controlId="salaryDetails" className="mb-3">
//                   <Form.Label>Salary Details</Form.Label>

//                   <div className="d-flex align-items-center">
//                     {/* Salary Range with 50% width */}
//                     <Form.Control
//                       type="text"
//                       name="salaryRange"
//                       value={formData.salaryRange}
//                       onChange={handleInputChange}
//                       placeholder="Enter Salary Range"
//                       className="me-2"
//                       style={{ width: "42%" }}
//                     />

//                     {/* Inline for Salary Type and Salary Currency inside the Salary Range container */}
//                     <div className="d-flex gap-2" style={{ width: "70%" }}>
//                       {/* Salary Currency */}
//                       <Form.Control
//                         as="select"
//                         name="salaryCurrency"
//                         value={formData.salaryCurrency}
//                         onChange={handleInputChange}
//                         className="flex-fill"
//                       >
//                         <option value={0}>Currency Type</option>
//                         <option value="₹ INR">₹INR</option>
//                         <option value="$ Dollar">$Dollar</option>
//                         <option value="£ Pound">Pound</option>
//                         <option value="€ Euro">€Euro</option>
//                         <option value="¥Yen">Yen</option>
//                         <option value="rial">rial</option>
//                       </Form.Control>
//                       {/* Salary Type */}
//                       <Form.Control
//                         as="select"
//                         name="salaryType"
//                         value={formData.salaryType}
//                         onChange={handleInputChange}
//                         className="flex-fill"
//                       >
//                         <option value={0}>Salary Type</option>
//                         <option value="Hour">Hourly</option>
//                         <option value="Day">Daily</option>
//                         <option value="Week">Weekly</option>
//                         <option value="Month">Monthly</option>
//                         <option value="Annum">Annually</option>
//                       </Form.Control>
//                     </div>
//                   </div>

//                   {/* Error Messages */}
//                   {errors.salaryRange && <div className="text-danger mt-1">{errors.salaryRange}</div>}
//                   {errors.salaryType && <div className="text-danger mt-1">{errors.salaryType}</div>}
//                   {errors.salaryCurrency && <div className="text-danger mt-1">{errors.salaryCurrency}</div>}
//                 </Form.Group>
//                 <label className="form-label">Deadline for Application <span className="text-danger">*</span></label>
                
//                 <DatePicker
//                 selected={formData.deadline}
//                 onChange={(date) => setFormData({ ...formData, deadline: date })}
//                 className="form-control"
//                 dateFormat="MM/dd/yyyy"
//                 placeholderText="Select a date" />
//               </Col>
            
                
            
//             </Row>
//           </div>
//           <div className="d-flex justify-content-end">
//             <Button variant="primary" type="button" onClick={NextButton}> Next </Button>
//           </div>
//         </Tab>

//         <Tab eventKey="workExperience" title="Work Expertise">
//           <div className="p-3">
//             {/* Work Experience Section */}
//             <h4>Work Expertise</h4>
//             <Row>
//               <Col mid={4}>
//                 <Form.Group controlId="aboutCompany" className="mb-3">
//                   <Form.Label>About Company <spam className="text-danger">*</spam></Form.Label>
//                   <Form.Control as="textarea" name="aboutCompany" value={formData.aboutCompany} onChange={(e) => {
//                     handleInputChange(e);
//                     if (e.target.value.trim() !== "") {
//                       setErrors((prevErrors) => ({
//                         ...prevErrors,
//                         aboutCompany: null,
//                       }));
//                     }
//                   }} rows={2} placeholder="Write about the company" />
//                   {errors.aboutCompany && <div className="text-danger">{errors.aboutCompany}</div>}
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group controlId="responsibilities" className="mb-3">
//                   <Form.Label>Roles and Responsibilities <span className="text-danger">*</span></Form.Label>
//                   <Form.Control as="textarea" name="responsibilities" value={formData.responsibilities} onChange={(e) => {
//                     handleInputChange(e);
//                     if (e.target.value.trim() !== "") {
//                       setErrors((prevErrors) => ({
//                         ...prevErrors,
//                         responsibilities: null,
//                       }));
//                     }
//                   }} rows={2} placeholder="Describe responsibilities" />
//                   {errors.responsibilities && <div className="text-danger">{errors.responsibilities}</div>}
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group controlId="Job Description" className="mb-3">
//                   <Form.Label>Job Description</Form.Label>
//                   <Form.Control as="textarea" name="JobDescription" value={formData.JobDescription} onChange={handleInputChange} rows={2} placeholder="Enter Job Description" />
//                   {errors.JobDescription && <div className="text-danger">{errors.JobDescription}</div>}
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row>
//               <Col md={4}>
//                 <Form.Group controlId="Overall years of Experience" className="mb-3">
//                   <Form.Label>Overall Years of Experience</Form.Label>
//                   <Form.Control type="number" name="OverallyearsofExperience" value={formData.OverallyearsofExperience} onChange={handleInputChange} placeholder="Enter overall years of experience" />
//                   {errors.OverallyearsofExperience && <div className="text-danger">{errors.OverallyearsofExperience}</div>}
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group controlId="Relevant Experience" className="mb-3">
//                   <Form.Label>Relevant Experience</Form.Label>
//                   <Form.Control type="number" name="RelevantExperience" value={formData.RelevantExperience} onChange={handleInputChange} placeholder="Enter Relevent years of experience" />
//                   {errors.RelevantExperience && <div className="text-danger">{errors.RelevantExperience}</div>}
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row>
//               <Col md={4}>
//                 <Form.Group controlId="Benefits" className="mb-3">
//                   <Form.Label>Benefits</Form.Label>
//                   <Form.Control as="textarea" name="Benefits" value={formData.Benefits} onChange={handleInputChange} rows={2} placeholder="Benefits of the company" />
//                   {errors.Benifets && <div className="text-danger">{errors.Benefits}</div>}
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group controlId="Summary" className="mb-3">
//                   <Form.Label>Summary</Form.Label>
//                   <Form.Control as="textarea" name="Summary" value={formData.Summary} onChange={handleInputChange} rows={2} placeholder="Benefits of the company" />
//                   {errors.Summary && <div className="text-danger">{errors.Summary}</div>}
//                 </Form.Group>
//               </Col>
//             </Row>
//           </div>
//           <div className="d-flex justify-content-end">
//             <Button variant="primary" type="button" onClick={NextButton2}> Next </Button>
//           </div>

//         </Tab>
//         <Tab eventKey="Education" title="Education">
//           <div className="p-3">
//             {/*Education Section */}
//             <h4>Education</h4>
//             <Row>
//               <Col md={4}>
//                 <Form.Group controlId="hardSkills">
//                   <Form.Label>Hard Skills</Form.Label>
//                   <Multiselect
//                     options={requiredSkills}
//                     selectedValues={selectedHardSkills}
//                     onSelect={handleSelectHardSkills}
//                     onRemove={handleRemoveHardSkills}
//                     displayValue="skill"
//                     placeholder="Select Hard Skills"
//                     style={{
//                       multiselectContainer: {
//                         background: "#f8f9fa",
//                         borderRadius: "4px",
//                         border: "1px solid #ced4da",
//                       },
//                       chips: {
//                         background: "#007bff",
//                         color: "#fff",
//                       },
//                       searchBox: {
//                         border: "1px solid #ced4da",
//                         borderRadius: "4px",
//                       },
//                       optionContainer: {
//                         background: "#ffffff",
//                       },
//                     }}
//                   />
//                 </Form.Group>
//               </Col>

//               <Col md={4}>
//                 <Form.Group controlId="softSkills">
//                   <Form.Label>Soft Skills</Form.Label>
//                   <Multiselect
//                     options={softSkills}
//                     selectedValues={selectedSoftSkills}
//                     onSelect={handleSelectSoftSkills}
//                     onRemove={handleRemoveSoftSkills}
//                     displayValue="skill"
//                     placeholder="Select Soft Skills"
//                     style={{
//                       multiselectContainer: {
//                         background: "#f8f9fa",
//                         borderRadius: "4px",
//                         border: "1px solid #ced4da",
//                       },
//                       chips: {
//                         background: "#007bff",
//                         color: "#fff",
//                       },
//                       searchBox: {
//                         border: "1px solid #ced4da",
//                         borderRadius: "4px",
//                       },
//                       optionContainer: {
//                         background: "#ffffff",
//                       },
//                     }}
//                   />
//                 </Form.Group>
//               </Col>

//               <Col md={4}>
//                 <Form.Group controlId="Preferred Skills">
//                   <Form.Label>Preferred Skills</Form.Label>
//                   <Multiselect
//                     options={preferredSkills}
//                     selectedValues={selectedpreferredSkills}
//                     onSelect={handleSelectpreferredSkills}
//                     onRemove={handleRemovepreferredSkills}
//                     displayValue="skill"
//                     placeholder="Select Preferred Skills"
//                     style={{
//                       multiselectContainer: {
//                         background: "#f8f9fa",
//                         borderRadius: "4px",
//                         border: "1px solid #ced4da",
//                       },
//                       chips: {
//                         background: "#007bff",
//                         color: "#fff",
//                       },
//                       searchBox: {
//                         border: "1px solid #ced4da",
//                         borderRadius: "4px",
//                       },
//                       optionContainer: {
//                         background: "#ffffff",
//                       },
//                     }}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={4} className="mt-2">
//                 <Form.Group controlId="experienced Skills">
//                   <Form.Label>Experienced Skills</Form.Label>
//                   <Multiselect
//                     options={experiencedSkills}
//                     selectedValues={selectedexperiencedSkills}
//                     onSelect={handleSelectexperiencedSkills}
//                     onRemove={handleRemoveexperiencedSkills}
//                     displayValue="skill"
//                     placeholder="Select experienced Skills"
//                     style={{
//                       multiselectContainer: {
//                         background: "#f8f9fa",
//                         borderRadius: "4px",
//                         border: "1px solid #ced4da",
//                       },
//                       chips: {
//                         background: "#007bff",
//                         color: "#fff",
//                       },
//                       searchBox: {
//                         border: "1px solid #ced4da",
//                         borderRadius: "4px",
//                       },
//                       optionContainer: {
//                         background: "#ffffff",
//                       },
//                     }}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={4} className="mt-2">
//                 <Form.Group controlId="Qualification" className="mb-3">
//                   <Form.Label>Qualification</Form.Label>
//                   <Form.Control as="select" name="Qualification" value={formData.Qualification} onChange={handleInputChange}>
//                     <option value={0}>---Select---</option>
//                     <option value={"Matric"}>Matric</option>
//                     <option value={"Intermediate"}>Intermediate</option>
//                     <option value={"Graduate"}>Graduate</option>
//                     <option value={"Masters"}>Masters</option>
//                     <option value={"Above"}>Above</option>
//                   </Form.Control>
//                   {errors.Qualification && <div className="text-danger">{errors.Qualification}</div>}
//                 </Form.Group>
//               </Col>

//               <Col md={4} className="mt-2">
//                 <Form.Group controlId="Stream" className="mb-3">
//                   <Form.Label>Stream</Form.Label>
//                   <Form.Control as="select" name="Stream" value={formData.Stream} onChange={handleInputChange}>
//                     <option value={0}>---Select---</option>
//                     <option value={"Matric"}>Matric</option>
//                     <option value={"Intermediate"}>Intermediate</option>
//                     <option value={"Graduate"}>Graduate</option>
//                     <option value={"Masters"}>Masters</option>
//                     <option value={"Above"}>Above</option>
//                   </Form.Control>
//                   {errors.Stream && <div className="text-danger">{errors.Stream}</div>}
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row>
//               <Col md={4}>
//                 <Form.Group controlId="Required Qualification" className="mb-3">
//                   <Form.Label>Required Qualification</Form.Label>
//                   <Form.Control as="select" name="RequiredQualification" value={formData.RequiredQualification} onChange={handleInputChange}>
//                     <option value={0}>---Select---</option>
//                     <option value={"Matric"}>Matric</option>
//                     <option value={"Intermediate"}>Intermediate</option>
//                     <option value={"Graduate"}>Graduate</option>
//                     <option value={"Masters"}>Masters</option>
//                     <option value={"Above"}>Above</option>
//                   </Form.Control>
//                   {errors.RequiredQualification && <div className="text-danger">{errors.RequiredQualification}</div>}
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group controlId="Preferred Qualification" className="mb-3">
//                   <Form.Label>Preferred Qualification</Form.Label>
//                   <Form.Control as="select" name="PreferredQualification" value={formData.PreferredQualification} onChange={handleInputChange}>
//                     <option value={0}>---Select---</option>
//                     <option value={"Matric"}>Matric</option>
//                     <option value={"Intermediate"}>Intermediate</option>
//                     <option value={"Graduate"}>Graduate</option>
//                     <option value={"Masters"}>Masters</option>
//                     <option value={"Above"}>Above</option>
//                   </Form.Control>
//                   {errors.PreferredQualification && <div className="text-danger">{errors.PreferredQualification}</div>}
//                 </Form.Group>
//               </Col>
//             </Row>
//           </div>
//           <div className="d-flex justify-content-end">
//             <Button variant="primary" type="submit" onClick={handleOnSubmit}>Preview</Button>
//           </div>
//         </Tab>
//       </Tabs>
//     </div>
//   );
// }
// export default JobPostForm;



import React, { useEffect, useState } from "react";
import { Tabs, Tab, Form, Row, Col, Button } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
import {
  requiredSkills,
  softSkills,
  stateCityConst,
  preferredSkills,
  experiencedSkills,
  qualificationStreamConst,
  countryStateCity,
} from "../common/constant";
import { useNavigate } from "react-router-dom";
//import { constructFrom } from "date-fns/fp";

const JobPostForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    jobTitle: "",
    department: "",
    domain: "",

    country: "", // added
    state: "",
    city: "",
    jobType: "",
    RelevantExperience: "",
    // salaryRange: "",
    minimumSalary: "",
    maximumSalary: "",

    salaryType: "",
    salaryCurrency: "",
    aboutCompany: "",
    responsibilities: "",
    Qualification: "",
    // RequiredQualification: "",
    OverallyearsofExperience: "",
    jobLevel: "",
    employmentType: "",
    jobDescription: "",
    softSkills: [],
    hardSkills: [],
    requiredSkills: [],
    experienceLevel: [],
    educationalRequirements: "",
    preferredQualifications: "",
    jobResponsibilities: "",
    vacancies: "",
    availability: "",
    noticePeriod: 0,
    workmode: "",
    modeOfEmployment: "",
    PreferredQualification: "",
    levelOfRole: "",
    Benefits: "",
    Summary: "",
    Stream: "",
    preferredSkills: "",
    //deadline: new Date(),
  });
  const [activeTab, setActiveTab] = useState("jobForm");
  const [errors, setErrors] = useState({});
  const [stateCity, setStateCity] = useState(stateCityConst || []);
  const [isNoticePeriod, setIsNoticePeriod] = useState(false);
  const [cityarray, setCity] = useState([]);
  const [selectedHardSkills, setSelectedHardSkills] = useState([]);
  const [selectedSoftSkills, setSelectedSoftSkills] = useState([]);
  const [selectedpreferredSkills, setSelectedpreferredSkills] = useState([]);
  const [selectedexperiencedSkills, setSelectedexperiencedSkills] = useState(
    []
  );

  const [stateArray, setStateArray] = useState([]); // Stores states of selected country
  const [cityArray, setCityArray] = useState([]); // Stores cities of selected state

  const navigate = useNavigate();
  const handleTabChange = (key) => {
    setActiveTab(key);
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyName)
      newErrors.companyName = "Company Name is required.";
    if (!formData.jobTitle) newErrors.jobTitle = "Job Title is required.";
    if (!formData.workmode) newErrors.workmode = "Work Mode is required.";
    if (!formData.domain) newErrors.domain = "Domain is required.";
    if (!formData.aboutCompany)
      newErrors.aboutCompany = "About Company is required.";
    if (!formData.responsibilities)
      newErrors.responsibilities = "responsibilities is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleAvailabilityChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (parseInt(value) === 2) {
      setIsNoticePeriod(true);
    } else {
      setIsNoticePeriod(false);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectpreferredSkills = (selectedList) => {
    setSelectedpreferredSkills(selectedList);
    setFormData({ ...formData, preferredSkills: selectedpreferredSkills });
  };

  const handleRemovepreferredSkills = (removedList) => {
    setSelectedpreferredSkills(removedList);
    setFormData({ ...formData, preferredSkills: selectedpreferredSkills });
  };

  const handleSelectexperiencedSkills = (selectedList) => {
    setSelectedexperiencedSkills(selectedList);
    setFormData({ ...formData, experiencedSkills: selectedexperiencedSkills });
  };

  const handleRemoveexperiencedSkills = (removedList) => {
    setSelectedexperiencedSkills(removedList);
    setFormData({ ...formData, experiencedSkills: selectedexperiencedSkills });
  };

  const handleSelectHardSkills = (selectedList) => {
    setSelectedHardSkills(selectedList);
    setFormData({ ...formData, hardSkills: selectedHardSkills });
  };

  const handleSelectSoftSkills = (selectedList) => {
    setSelectedSoftSkills(selectedList);
    setFormData({ ...formData, softSkills: selectedSoftSkills });
  };

  const handleRemoveHardSkills = (removedList) => {
    setSelectedHardSkills(removedList);
    setFormData({ ...formData, hardSkills: selectedHardSkills });
  };

  const handleRemoveSoftSkills = (removedList) => {
    setSelectedSoftSkills(removedList);
    setFormData({ ...formData, softSkills: selectedSoftSkills });
  };
  const NextButton = () => {
    setActiveTab("workExperience");
  };
  const NextButton2 = () => {
    setActiveTab("Education");
  };
  const handleOnSubmit = () => {
    if (validateForm()) {
      navigate("/job-desc", { state: { jd: formData } });
      console.log("Form Submitted", formData);
    }
  };

  const handleCountryChange = (e) => {
    const { value } = e.target;

    console.log("Selected Country:", "Value", e.target.value); // Log selected country
    const selectedCountry = countryStateCity.find(
      (country) => country.country === value
    );
  
  
    setFormData((prevState) => {
      const updatedFormData = {
        ...prevState,
        country: selectedCountry ? selectedCountry.country : "",
        state: "",
        city: "",
      };
      console.log("Updated formData inside setFormData:", updatedFormData);
      return updatedFormData;
    });
    console.log("States",)
    setStateArray(selectedCountry ? selectedCountry.states : []);
    setCityArray([]);
  };
  
  

  const handleStateChange = (e) => {
    const { value } = e.target; // Selected state ID
    const selectedState = stateArray.find(
      (state) => state.state === value
    );

    setFormData((prevState) => {
      const updatedFormData = {
        ...prevState,
        state: selectedState ? selectedState.state : "",
        city: "",
      };
      console.log("Updated formData inside setFormData:", updatedFormData);
      return updatedFormData;
    });
    setCityArray(selectedState ? selectedState.cities : []); // Update cities
  };

  const handleCityChange = (e) => {
    const { value } = e.target; // Selected city

    setFormData((prevState) => {
      const updatedFormData = {
        ...prevState,
        city: value,
      };
      console.log("Updated formData inside setFormData:", updatedFormData);
      return updatedFormData;
    });
  };

  const [selectedQualification, setSelectedQualification] = useState("");
  const [selectedStreams, setSelectedStreams] = useState([]);
  const [qualificationStreams, setQualificationStreams] = useState([]);

  // Handle qualification selection
  const handleQualificationChange = (e) => {
    const selectedQual = e.target.value;
    setSelectedQualification(selectedQual);

    // Find the qualification object based on the selected value
    const qualification = qualificationStreamConst.find(
      (item) => item.qualification === selectedQual
    );
    if (qualification) {
      setQualificationStreams(qualification.streams); // Update the streams based on qualification
    } else {
      setQualificationStreams([]); // Reset streams if qualification is not found
    }
  };

  // Handle stream selection
  const handleStreamChange = (e) => {
    const selected = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedStreams(selected); // Store selected streams
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4" align="center">
        Job Posting and Experience Form
      </h1>

      {/* Tab Navigation */}
      <Tabs
        activeKey={activeTab}
        onSelect={handleTabChange}
        className="mb-4"
        justify
      >
        {/* <Tab eventKey="Uploadfile" title="Upload File"></Tab> */}
        <Tab eventKey="jobForm" title="Job Form">
          <div className="p-3">
            {/* Job Form Section */}
            <h4>Job Details</h4>
            <Row>
              <Col md={4}>
                <Form.Group controlId="Company Name" className="mb-3">
                  <Form.Label>
                    Company Name <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    // type="text"
                    as="textarea" // Switch to textarea to allow height adjustment
                    rows={1} // Initial height
                    placeholder="Enter Company Name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={(e) => {
                      handleInputChange(e);
                      if (e.target.value.trim() !== "") {
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          companyName: null,
                        }));
                      }
                    }}
                    style={{
                      resize: "none", // Prevent manual resizing
                      overflow: "hidden", // Prevent scrollbars
                      width: "100%", // Keep the width constant
                    }}
                    onInput={(e) => {
                      e.target.style.height = "auto"; // Reset height before calculating
                      e.target.style.height = `${e.target.scrollHeight}px`; // Dynamically adjust height
                    }}
                  />
                  {errors.companyName && (
                    <div className="text-danger">{errors.companyName}</div>
                  )}
                </Form.Group>
              </Col>

              <Col md={2}>
                <Form.Group controlId="jobTitle" className="mb-3">
                  <Form.Label>
                    Job Title <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => {
                      handleInputChange(e);
                      if (e.target.value.trim() !== "") {
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          jobTitle: null,
                        }));
                      }
                    }}
                  >
                    <option value={0}>---Select---</option>
                    <option value={1}>ASDE</option>
                    <option value={2}>SDE 1</option>
                    <option value={3}>SDE 2</option>
                    <option value={4}>Software Engineer</option>
                    <option value={5}>Tester</option>
                  </Form.Control>
                  {errors.jobTitle && (
                    <div className="text-danger">{errors.jobTitle}</div>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="locationSelection" className="mb-3">
                  <Form.Label>Job Location</Form.Label>
                  <Row className="d-flex align-items-center">
                    {/* Country Dropdown */}
                    <Col md={4}>
                      <Form.Control
                        as="select"
                        name="country"
                        // value={formData?.country} // Bound to formData.country
                        onChange={handleCountryChange}

                      >
                        <option value="">---Select Country---</option>
                        {countryStateCity.map((country) => (
                          <option key={country.id} value={country.country}>
                            {country.country}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>

                    {/* State Dropdown */}
                    <Col md={4}>
                      <Form.Control
                        as="select"
                        name="state"
                        // value={formData.state} // Bound to formData.state
                        onChange={handleStateChange}
                        // disabled={!stateArray.length} // Disable if no states are available
                      >
                        <option value="">---Select State---</option>
                        {stateArray.map((state) => (
                          <option key={state.id} value={state?.state}>
                            {state.state}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>

                    {/* City Dropdown */}
                    <Col md={4}>
                      <Form.Control
                        as="select"
                        name="city"
                        value={formData.city} // Bound to formData.city
                        onChange={handleCityChange}
                        disabled={!cityArray.length} // Disable if no cities are available
                      >
                        <option value="">---Select City---</option>
                        {cityArray.map((city, index) => (
                          <option key={index} value={city}>
                            {city}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group controlId="vacancies" className="mb-3">
                  <Form.Label>No of Vacancies</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter number of vacancies"
                    name="vacancies"
                    value={formData.vacancies}
                    onChange={handleInputChange}
                  />
                  {errors.vacancies && (
                    <div className="text-danger">{errors.vacancies}</div>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="availability" className="mb-3">
                  <Form.Label>Availability</Form.Label>
                  <Form.Control
                    as="select"
                    name="availability"
                    value={formData.availability}
                    onChange={handleAvailabilityChange}
                  >
                    <option value={0}>---Select---</option>
                    <option value={1}>Immediate Joiner</option>
                    <option value={2}>Notice Period</option>
                  </Form.Control>
                  {isNoticePeriod && (
                    <>
                      <Form.Range
                        min={0}
                        max={90}
                        step={15}
                        name="noticePeriod"
                        value={formData.noticePeriod}
                        onChange={handleInputChange}
                      />
                      <div>{formData.noticePeriod} days</div>
                    </>
                  )}
                  {errors.availability && (
                    <div className="text-danger">{errors.availability}</div>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="workmode" className="mb-3">
                  <Form.Label>
                    Work Mode <span className="text-danger">*</span>
                  </Form.Label>
                  <div className="d-flex align-items-center gap-3">
                    <Form.Check
                      type="radio"
                      id="onsite"
                      name="workmode"
                      label="On-site"
                      value={"onsite"}
                      checked={formData.workmode === "onsite"}
                      onChange={(e) => {
                        handleInputChange(e);
                        if (e.target.value.trim() !== "") {
                          setErrors((prevErrors) => ({
                            ...prevErrors,
                            workmode: null,
                          }));
                        }
                      }}
                    />
                    <Form.Check
                      type="radio"
                      id="remote"
                      name="workmode"
                      label="Remote"
                      value={"remote"}
                      checked={formData.workmode === "remote"}
                      onChange={(e) => {
                        handleInputChange(e);
                        if (e.target.value.trim() !== "") {
                          setErrors((prevErrors) => ({
                            ...prevErrors,
                            workmode: null,
                          }));
                        }
                      }}
                    />
                    <Form.Check
                      type="radio"
                      id="hybrid"
                      name="workmode"
                      label="Hybrid"
                      value={"hybrid"}
                      checked={formData.workmode === "hybrid"}
                      onChange={(e) => {
                        handleInputChange(e);
                        if (e.target.value.trim() !== "") {
                          setErrors((prevErrors) => ({
                            ...prevErrors,
                            workmode: null,
                          }));
                        }
                      }}
                    />
                  </div>
                  {errors.workmode && (
                    <div className="text-danger">{errors.workmode}</div>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group controlId="modeOfEmployment" className="mb-3">
                  <Form.Label>Mode Of Employeement</Form.Label>
                  <Form.Control
                    as="select"
                    name="modeOfEmployment"
                    value={formData.modeOfEmployment}
                    onChange={handleInputChange}
                  >
                    <option value={0}>---Select---</option>
                    <option value={1}>Part Time</option>
                    <option value={2}>Full Time</option>
                    <option value={3}>Freelancer</option>
                    <option value={4}>Internship</option>
                  </Form.Control>
                  {errors.modeOfEmployment && (
                    <div className="text-danger">{errors.modeOfEmployment}</div>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="levelOfRole" className="mb-3">
                  <Form.Label>Level Of Role</Form.Label>
                  <Form.Control
                    as="select"
                    name="levelOfRole"
                    value={formData.levelOfRole}
                    onChange={handleInputChange}
                  >
                    <option value={0}>---Select---</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                    <option value="Associate">Associate</option>
                    <option value="Mid">Mid</option>
                    <option value="C-Level">C-Level</option>
                    <option value="Director">Director</option>
                    <option value="VP">VP</option>
                  </Form.Control>
                  {errors.levelOfRole && (
                    <div className="text-danger">{errors.levelOfRole}</div>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="domain" className="mb-3">
                  <Form.Label>
                    Domain <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="domain"
                    value={formData.domain}
                    onChange={(e) => {
                      handleInputChange(e);
                      if (e.target.value.trim() !== "") {
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          domain: null,
                        }));
                      }
                    }}
                  >
                    <option value={0}>---Select---</option>
                    <option value="IT">IT</option>
                    <option value="Energy">Energy</option>
                    <option value="Finance">Finance</option>
                    <option value="Health">Health</option>
                  </Form.Control>
                  {errors.domain && (
                    <div className="text-danger">{errors.domain}</div>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group controlId="salaryDetails" className="mb-3">
                  <Form.Label>Salary Details</Form.Label>

                  <div className="d-flex align-items-center">
                    {/* Salary Range with 50% width */}
                    {/* <Form.Control
                      type="text"
                      name="salaryRange"
                      value={formData.salaryRange}
                      onChange={handleInputChange}
                      placeholder="Enter Salary Range"
                      className="me-2"
                      style={{ width: "42%" }}
                    /> */}
                    {/* Minimum Salary Input */}
                    <Form.Control
                      type="text"
                      name="minimumSalary"
                      value={formData.minimumSalary}
                      onChange={handleInputChange}
                      placeholder="Minimum Salary"
                      className="me-2"
                      style={{ width: "50%" }}
                    />

                    {/* Maximum Salary Input */}
                    <Form.Control
                      type="text"
                      name="maximumSalary"
                      value={formData.maximumSalary}
                      onChange={handleInputChange}
                      placeholder="Maximum Salary"
                      className="me-2"
                      style={{ width: "50%" }}
                    />

                    {/* Inline for Salary Type and Salary Currency inside the Salary Range container */}
                    <div className="d-flex gap-2" style={{ width: "70%" }}>
                      {/* Salary Currency */}
                      <Form.Control
                        as="select"
                        name="salaryCurrency"
                        value={formData.salaryCurrency}
                        onChange={handleInputChange}
                        className="flex-fill"
                        // style={{ width: "50%" }}
                      >
                        <option value={0}>Currency Type</option>
                        <option value="₹ INR">₹INR</option>
                        <option value="$ Dollar">$Dollar</option>
                        <option value="£ Pound">Pound</option>
                        <option value="€ Euro">€Euro</option>
                        <option value="¥Yen">Yen</option>
                        <option value="rial">rial</option>
                      </Form.Control>
                      {/* Salary Type */}
                      <Form.Control
                        as="select"
                        name="salaryType"
                        value={formData.salaryType}
                        onChange={handleInputChange}
                        className="flex-fill"
                        // style={{ width: "50%" }}
                      >
                        <option value={0}>Salary Type</option>
                        <option value="Hour">Hourly</option>
                        <option value="Day">Daily</option>
                        <option value="Week">Weekly</option>
                        <option value="Month">Monthly</option>
                        <option value="Annum">Annually</option>
                      </Form.Control>
                    </div>
                  </div>

                  {/* Error Messages */}
                  {errors.salaryRange && (
                    <div className="text-danger mt-1">{errors.salaryRange}</div>
                  )}
                  {errors.salaryType && (
                    <div className="text-danger mt-1">{errors.salaryType}</div>
                  )}
                  {errors.salaryCurrency && (
                    <div className="text-danger mt-1">
                      {errors.salaryCurrency}
                    </div>
                  )}
                </Form.Group>
                {/* <label className="form-label">
                  Deadline for Application{" "}
                  <span className="text-danger">*</span>
                </label>

                <DatePicker
                  selected={formData.deadline}
                  onChange={(date) =>
                    setFormData({ ...formData, deadline: date })
                  }
                  className="form-control"
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Select a date"
                /> */}
              </Col>
            </Row>
          </div>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="button" onClick={NextButton}>
              {" "}
              Next{" "}
            </Button>
          </div>
        </Tab>

        <Tab eventKey="workExperience" title="Work Expertise">
          <div className="p-3">
            {/* Work Experience Section */}
            <h4>Work Expertise</h4>
            <Row>
              <Col mid={4}>
                <Form.Group controlId="aboutCompany" className="mb-3">
                  <Form.Label>
                    About Company <spam className="text-danger">*</spam>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    name="aboutCompany"
                    value={formData.aboutCompany}
                    onChange={(e) => {
                      handleInputChange(e);
                      if (e.target.value.trim() !== "") {
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          aboutCompany: null,
                        }));
                      }
                    }}
                    rows={2}
                    placeholder="Write about the company"
                  />
                  {errors.aboutCompany && (
                    <div className="text-danger">{errors.aboutCompany}</div>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="responsibilities" className="mb-3">
                  <Form.Label>
                    Roles and Responsibilities{" "}
                    <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    name="responsibilities"
                    value={formData.responsibilities}
                    onChange={(e) => {
                      handleInputChange(e);
                      if (e.target.value.trim() !== "") {
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          responsibilities: null,
                        }));
                      }
                    }}
                    rows={2}
                    placeholder="Describe responsibilities"
                  />
                  {errors.responsibilities && (
                    <div className="text-danger">{errors.responsibilities}</div>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="Job Description" className="mb-3">
                  <Form.Label>Job Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="JobDescription"
                    value={formData.JobDescription}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder="Enter Job Description"
                  />
                  {errors.JobDescription && (
                    <div className="text-danger">{errors.JobDescription}</div>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group
                  controlId="Overall years of Experience"
                  className="mb-3"
                >
                  <Form.Label>Overall Years of Experience</Form.Label>
                  <Form.Control
                    type="number"
                    name="OverallyearsofExperience"
                    value={formData.OverallyearsofExperience}
                    onChange={handleInputChange}
                    placeholder="Enter overall years of experience"
                  />
                  {errors.OverallyearsofExperience && (
                    <div className="text-danger">
                      {errors.OverallyearsofExperience}
                    </div>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="Relevant Experience" className="mb-3">
                  <Form.Label>Relevant Experience</Form.Label>
                  <Form.Control
                    type="number"
                    name="RelevantExperience"
                    value={formData.RelevantExperience}
                    onChange={handleInputChange}
                    placeholder="Enter Relevent years of experience"
                  />
                  {errors.RelevantExperience && (
                    <div className="text-danger">
                      {errors.RelevantExperience}
                    </div>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group controlId="Benefits" className="mb-3">
                  <Form.Label>Benefits</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="Benefits"
                    value={formData.Benefits}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder="Benefits of the company"
                  />
                  {errors.Benifets && (
                    <div className="text-danger">{errors.Benefits}</div>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="Summary" className="mb-3">
                  <Form.Label>Summary</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="Summary"
                    value={formData.Summary}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder="Benefits of the company"
                  />
                  {errors.Summary && (
                    <div className="text-danger">{errors.Summary}</div>
                  )}
                </Form.Group>
              </Col>
            </Row>
          </div>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="button" onClick={NextButton2}>
              {" "}
              Next{" "}
            </Button>
          </div>
        </Tab>
        <Tab eventKey="Education" title="Education">
          <div className="p-3">
            {/*Education Section */}
            <h4>Education</h4>
            <Row>
              <Col md={4} className="mt-2">
                <Form.Group controlId="Qualification" className="mb-3">
                  <Form.Label>Qualification</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedQualification}
                    onChange={handleQualificationChange}
                  >
                    <option value="">---Select Qualification---</option>
                    {qualificationStreamConst.map((qual) => (
                      <option key={qual.id} value={qual.qualification}>
                        {qual.qualification}
                      </option>
                    ))}
                  </Form.Control>
                  {errors.Qualification && (
                    <div className="text-danger">{errors.Qualification}</div>
                  )}
                </Form.Group>
              </Col>

              <Col md={4} className="mt-2">
                <Form.Group controlId="Stream" className="mb-3">
                  <Form.Label>Stream</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedStreams}
                    onChange={handleStreamChange}
                  >
                    <option value="">---Select Stream---</option>

                    {qualificationStreams.map((stream, index) => (
                      <option key={index} value={stream}>
                        {stream}
                      </option>
                    ))}
                  </Form.Control>
                  {errors.Stream && (
                    <div className="text-danger">{errors.Stream}</div>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group
                  controlId="Preferred Qualification"
                  className="mb-3"
                >
                  <Form.Label>Preferred Qualification</Form.Label>
                  <Form.Control
                    as="select"
                    name="PreferredQualification"
                    value={formData.PreferredQualification}
                    onChange={handleInputChange}
                  >
                    <option value={0}>
                      ---Select Preferred Qualification---
                    </option>
                    <option value={"Matric"}>Matric</option>
                    <option value={"Intermediate"}>Intermediate</option>
                    <option value={"Graduate"}>Graduate</option>
                    <option value={"Masters"}>Masters</option>
                    <option value={"Above"}>Above</option>
                  </Form.Control>
                  {errors.PreferredQualification && (
                    <div className="text-danger">
                      {errors.PreferredQualification}
                    </div>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group controlId="hardSkills">
                  <Form.Label>Hard Skills</Form.Label>
                  <Multiselect
                    options={requiredSkills}
                    selectedValues={selectedHardSkills}
                    onSelect={handleSelectHardSkills}
                    onRemove={handleRemoveHardSkills}
                    displayValue="skill"
                    placeholder="Select Hard Skills"
                    style={{
                      multiselectContainer: {
                        background: "#f8f9fa",
                        borderRadius: "4px",
                        border: "1px solid #ced4da",
                      },
                      chips: {
                        background: "#007bff",
                        color: "#fff",
                      },
                      searchBox: {
                        border: "1px solid #ced4da",
                        borderRadius: "4px",
                      },
                      optionContainer: {
                        background: "#ffffff",
                      },
                    }}
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group controlId="softSkills">
                  <Form.Label>Soft Skills</Form.Label>
                  <Multiselect
                    options={softSkills}
                    selectedValues={selectedSoftSkills}
                    onSelect={handleSelectSoftSkills}
                    onRemove={handleRemoveSoftSkills}
                    displayValue="skill"
                    placeholder="Select Soft Skills"
                    style={{
                      multiselectContainer: {
                        background: "#f8f9fa",
                        borderRadius: "4px",
                        border: "1px solid #ced4da",
                      },
                      chips: {
                        background: "#007bff",
                        color: "#fff",
                      },
                      searchBox: {
                        border: "1px solid #ced4da",
                        borderRadius: "4px",
                      },
                      optionContainer: {
                        background: "#ffffff",
                      },
                    }}
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group controlId="Preferred Skills">
                  <Form.Label>Preferred Skills</Form.Label>
                  <Multiselect
                    options={preferredSkills}
                    selectedValues={selectedpreferredSkills}
                    onSelect={handleSelectpreferredSkills}
                    onRemove={handleRemovepreferredSkills}
                    displayValue="skill"
                    placeholder="Select Preferred Skills"
                    style={{
                      multiselectContainer: {
                        background: "#f8f9fa",
                        borderRadius: "4px",
                        border: "1px solid #ced4da",
                      },
                      chips: {
                        background: "#007bff",
                        color: "#fff",
                      },
                      searchBox: {
                        border: "1px solid #ced4da",
                        borderRadius: "4px",
                      },
                      optionContainer: {
                        background: "#ffffff",
                      },
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md={4} className="mt-2">
                <Form.Group controlId="experienced Skills">
                  <Form.Label>Experienced Skills</Form.Label>
                  <Multiselect
                    options={experiencedSkills}
                    selectedValues={selectedexperiencedSkills}
                    onSelect={handleSelectexperiencedSkills}
                    onRemove={handleRemoveexperiencedSkills}
                    displayValue="skill"
                    placeholder="Select experienced Skills"
                    style={{
                      multiselectContainer: {
                        background: "#f8f9fa",
                        borderRadius: "4px",
                        border: "1px solid #ced4da",
                      },
                      chips: {
                        background: "#007bff",
                        color: "#fff",
                      },
                      searchBox: {
                        border: "1px solid #ced4da",
                        borderRadius: "4px",
                      },
                      optionContainer: {
                        background: "#ffffff",
                      },
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit" onClick={handleOnSubmit}>
              Preview
            </Button>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};
export default JobPostForm;