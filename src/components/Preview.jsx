import React from "react";

const Preview = ({ data, onEdit, onSubmit }) => {
  return (
    <div className="preview-container">
      <h2>Preview Your Profile</h2>
      <div className="preview-data">
        <p>
          <strong>Name:</strong> {data.name}
        </p>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
        <p>
          <strong>Degree:</strong> {data.degree}
        </p>
        <p>
          <strong>Institution:</strong> {data.institution}
        </p>
        <p>
          <strong>Company:</strong> {data.company}
        </p>
        <p>
          <strong>Role:</strong> {data.role}
        </p>
        <p>
          <strong>Skills:</strong> {data.skills}
        </p>
        <p>
          <strong>CV:</strong>{" "}
          {data.cv ? (
            <a
              href={URL.createObjectURL(data.cv)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.cv.name}
            </a>
          ) : (
            "No CV uploaded"
          )}
        </p>
      </div>
      <div className="preview-actions">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Preview;
