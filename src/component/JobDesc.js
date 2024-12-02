// import { useLocation } from 'react-router-dom';
// import { COMPANY_LOGO, jobTitle, stateCityConst } from '../common/constant';
// import '../css/JobDesc.css';
// import { splitOnLineChange } from '../common/util';
// import { useState } from 'react';
// const JobDesc = () => {
//   const location = useLocation();
//   const { jd } = location.state || {};

//   const [jobtitle,setJobTitle]=useState(jobTitle);
//   console.log(jd);
//     return (
      
//       <div className="job-card">
//         <h1>Job Description Preview</h1>
//         <header className="job-header">
//           <div className="companyName">
//             <h1>{jd.companyName}</h1>
//             <p className="companyName"></p>
//           </div>
//           <div className="job-title">
//           {jobtitle &&
//               jobtitle
//                 .filter((item) => item.id === parseInt(jd.jobTitle))
//                 .map((item) => (
//                   <p key={item.id}>{item.title}</p>
//                 ))}
//           </div>
//         </header>
  
//         <div className="job-meta">
//         <span className="location">📍
//   {jd.city && jd.state && jd.country ? (
//     <span>
//       {jd.city}, {jd.state}, {jd.country}
//     </span>
//   ) : (
//     <span>Location not provided</span>
//   )}
// </span>

//           <span className="modeOfEmployment">🕒 {jd.modeOfEmployment &&
//             jd.modeOfEmployment==='2'?'Full Time':
//             jd.modeOfEmployment==='1'?'Part Time':
//             jd.modeOfEmployment==='3'?'Freelancer':
//             jd.modeOfEmployment==='4'?'Internship':''
//             }</span>
//           <span className="experience">🌟 {jd.RelevantExperience} - {jd.OverallyearsofExperience}  years</span>
//           <span className="posted-date">💼 Vacancies {jd.vacancies}</span>
//           <span className="posted-date">💻 Mode:{jd.workmode}</span>
//           <span className="posted-date">💻 Domain:{jd.domain}</span>
//           {/* <span className="posted-date">💻 Last Date:{jd.deadline}</span> */}
//         </div>
//         <div className="job-meta">
//           <span>Level:{jd.levelOfRole}</span>
//         </div>
//         <div className="job-details">
//         <div className="skills mb-3"> 
//   <h4>Salary Range</h4>
//   <div className="job-meta">
//     {jd.minimumSalary && jd.maximumSalary && jd.salaryCurrency ? (
//       <span>
//         {jd.minimumSalary} - {jd.maximumSalary} {jd.salaryCurrency} per {jd.salaryType}
//       </span>
//     ) : (
//       <span>Not provided</span>
//     )}
//   </div>
// </div>

//         <div className="skills mb-4"> 
//             <h4>About Company</h4>
//             <div className="job-meta">
//                { jd.aboutCompany &&
//                <span>{jd.aboutCompany}</span>
//                } 
//             </div>
//           </div>
//         <div className="skills mb-4"> 
//             <h4>Hard Skills</h4>
//             <div className="skill-tags">
//                { jd.hardSkills &&
//                 jd.hardSkills.map((item,index)=>(
//                     <span key={item.id}>{item.skill}</span>
//                 ))
//                } 
//             </div>
//           </div>
//           <div className="skills mb-4">
//             <h4>Soft Skills</h4>
//             <div className="skill-tags">
//                { jd.softSkills &&
//                 jd.softSkills.map((item,index)=>(
//                     <span key={item.id}>{item.skill}</span>
//                 ))
//                } 
//             </div>
//           </div>
//           <div className="skills mb-4">
//             <h4>Preferred Skills</h4>
//             <div className="skill-tags">
//                { jd.preferredSkills &&
//                 jd.preferredSkills.map((item,index)=>(
//                     <span key={item.id}>{item.skill}</span>
//                 ))
//                } 
//             </div>
//           </div>

//           <div className="skills mb-4">
//             <h4>Experienced Skills</h4>
//             <div className="skill-tags">
//                { jd.experiencedSkills &&
//                 jd.experiencedSkills.map((item,index)=>(
//                     <span key={item.id}>{item.skill}</span>
//                 ))
//                } 
//             </div>
//           </div>
//           <div className="skills mb-4"> 
//             <h4>Role and Responsibilities</h4>
//             <div className="job-meta">
//                { jd.responsibilities &&
//                <span>{jd.responsibilities}</span>
//                } 
//             </div>
//           </div>

//           <div className="skills mb-4"> 
//             <h4>Perk and Benefits</h4>
//             <div className="job-meta">
//                { jd.responsibilities &&
//                <span>{jd.responsibilities}</span>
//                } 
//             </div>
//           </div>

//           <h4 className="mt-4">Job Availability</h4>
// <span className="availability">
//   {jd.noticePeriod && jd.noticePeriod > 0
//     ? `${jd.noticePeriod} days Notice Period`
//     : "Immediate Joiner"}
// </span>

//         </div>
  
//         <footer className="job-footer">
//           <button className="apply-now">Publish Job</button>
//         </footer>
//       </div>
//     );
// }

// export default JobDesc;


import { useLocation } from "react-router-dom";
import { COMPANY_LOGO, jobTitle } from "../common/constant";
import "../css/JobDesc.css";
import { useState } from "react";

const JobDesc = () => {
  const location = useLocation();
  const { jd } = location.state || {};

  const [jobtitle, setJobTitle] = useState(jobTitle);

  const handlePublishJob = async () => {
    try {
      const response = await fetch("http://localhost:3001/upload-jd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jd),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Job published successfully:", data);
        alert("Job Published Successfully!");
      } else {
        console.error("Failed to publish job. Status:", response.status);
        alert("Failed to Publish Job.");
      }
    } catch (error) {
      console.error("Error publishing job:", error);
      alert("Error while publishing the job.");
    }
  };

  return (
    <div className="job-card">
      <h1>Job Description Preview</h1>
      <header className="job-header">
        <div className="companyName">
          <h1>{jd.companyName}</h1>
          <p className="companyName"></p>
        </div>
        <div className="job-title">
          {jobtitle &&
            jobtitle
              .filter((item) => item.id === parseInt(jd.jobTitle))
              .map((item) => <p key={item.id}>{item.title}</p>)}
        </div>
      </header>

      <div className="job-meta">
        <span className="location">
          📍
          {jd.city && jd.state && jd.country ? (
            <span>
              {jd.city}, {jd.state}, {jd.country}
            </span>
          ) : (
            <span>Location not provided</span>
          )}
        </span>

        <span className="modeOfEmployment">
          🕒{" "}
          {jd.modeOfEmployment &&
            (jd.modeOfEmployment === "2"
              ? "Full Time"
              : jd.modeOfEmployment === "1"
              ? "Part Time"
              : jd.modeOfEmployment === "3"
              ? "Freelancer"
              : jd.modeOfEmployment === "4"
              ? "Internship"
              : "")}
        </span>
        <span className="experience">
          🌟 {jd.RelevantExperience} - {jd.OverallyearsofExperience} years
        </span>
        <span className="posted-date">💼 Vacancies {jd.vacancies}</span>
        <span className="posted-date">💻 Mode:{jd.workmode}</span>
        <span className="posted-date">💻 Domain:{jd.domain}</span>
      </div>
      <div className="job-meta">
        <span>Level:{jd.levelOfRole}</span>
      </div>
      <div className="job-details">
        <div className="skills mb-3">
          <h4>Salary Range</h4>
          <div className="job-meta">
            {jd.minimumSalary && jd.maximumSalary && jd.salaryCurrency ? (
              <span>
                {jd.minimumSalary} - {jd.maximumSalary} {jd.salaryCurrency} per{" "}
                {jd.salaryType}
              </span>
            ) : (
              <span>Not provided</span>
            )}
          </div>
        </div>

        <div className="skills mb-4">
          <h4>About Company</h4>
          <div className="job-meta">
            {jd.aboutCompany && <span>{jd.aboutCompany}</span>}
          </div>
        </div>
        <div className="skills mb-4">
          <h4>Hard Skills</h4>
          <div className="skill-tags">
            {jd.hardSkills &&
              jd.hardSkills.map((item, index) => (
                <span key={item.id}>{item.skill}</span>
              ))}
          </div>
        </div>
        {/* Add other fields similarly */}
      </div>

      <footer className="job-footer">
        <button className="apply-now" onClick={handlePublishJob}>
          Publish Job
        </button>
      </footer>
    </div>
  );
};

export default JobDesc;
