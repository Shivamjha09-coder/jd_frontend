import React from 'react';
import { useLocation } from 'react-router-dom';
import './PreviewPage.css';  // Import the new CSS

const PreviewPage = () => {
  const { state } = useLocation();
  const jobData = state?.jobData;

  if (!jobData) {
    return <div className="alert">No job data found.</div>; // Alert class updated
  }

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-4">Job Description Preview</h2>

        <div className="row mb-3">
          <div className="col-md-6">
            <h5>Job Title</h5>
            <p>{jobData.jobTitle || "Not provided"}</p>
          </div>
          <div className="col-md-6">
            <h5>No. of Vacancies</h5>
            <p>{jobData.noOfVacancies || "Not provided"}</p>
          </div>
        </div>

        <div className="mb-3">
          <h5>About Company</h5>
          <p>{jobData.aboutCompany || "Not provided"}</p>
        </div>

        <div className="mb-3">
          <h5>Company Name</h5>
          <p>{jobData.companyName || "Not provided"}</p>
        </div>

        <div className="mb-3">
          <h5>Job Location</h5>
          <p>
            {jobData.city}, {jobData.state},{jobData.country}
          </p>
        </div>

        {/* <div className="mb-3">
          <h5>Salary Range</h5>
          <p>{jobData.minimumSalary}</p>
        </div> */}
        <div className="mb-3">
  <h5>Salary Range</h5>
  <p>
    {jobData.minimumSalary && jobData.maximumSalary
      ? `${jobData.minimumSalary} - ${jobData.maximumSalary} (${jobData.salaryCurrency || "Currency not provided"})`
      : "Not provided"}
  </p>
</div>


        <div className="mb-3">
          <h5>Hard Skills</h5>
          <ul className="list-group">
            {jobData.hardSkills.length > 0 ? (
              jobData.hardSkills.map((skill, index) => (
                <li className="list-group-item" key={index}>{skill}</li>
              ))
            ) : (
              <p>No hard skills provided</p>
            )}
          </ul>
        </div>

        <div className="mb-3">
          <h5>Soft Skills</h5>
          <ul className="list-group">
            {jobData.softSkills.length > 0 ? (
              jobData.softSkills.map((skill, index) => (
                <li className="list-group-item" key={index}>{skill}</li>
              ))
            ) : (
              <p>No soft skills provided</p>
            )}
          </ul>
        </div>

        <div className="mb-3">
          <h5>Domain</h5>
          <p>{jobData.domain || "Not provided"}</p>
        </div>

        <div className="mb-3">
          <h5>Work Mode</h5>
          <p>{jobData.workMode || "Not provided"}</p>
        </div>

        <div className="mb-3">
          <h5>Roles and Responsibilities</h5>
          <ul className="list-group">
            {jobData.rolesAndResponsibilities.length > 0 ? (
              jobData.rolesAndResponsibilities.map((role, index) => (
                <li className="list-group-item" key={index}>{role}</li>
              ))
            ) : (
              <p>No roles and responsibilities provided</p>
            )}
          </ul>
        </div>

        <div className="mb-3">
          <h5>Perks and Benefits</h5>
          <ul className="list-group">
            {jobData.perksAndBenefits.length > 0 ? (
              jobData.perksAndBenefits.map((perk, index) => (
                <li className="list-group-item" key={index}>{perk}</li>
              ))
            ) : (
              <p>No perks and benefits provided</p>
            )}
          </ul>
        </div>

        <div className="mb-3">
          <h5>Experience and Skills</h5>
          <ul className="list-group">
            {jobData.experienceSkills.length > 0 ? (
              jobData.experienceSkills.map((exp, index) => (
                <li className="list-group-item" key={index}>{exp}</li>
              ))
            ) : (
              <p>No experience or skills provided</p>
            )}
          </ul>
        </div>

        <div className="mb-3">
          <h5>Preferred Skills</h5>
          <ul className="list-group">
            {jobData.preferredSkills.length > 0 ? (
              jobData.preferredSkills.map((skill, index) => (
                <li className="list-group-item" key={index}>{skill}</li>
              ))
            ) : (
              <p>No preferred skills provided</p>
            )}
          </ul>
        </div>

        <div className="mb-3">
          <h5>Job ID</h5>
          <p>{jobData._id}</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
