import React, { useState } from "react";

const CVUpload = ({ onNext, data }) => {
  const [cv, setCv] = useState(data.cv || null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState(""); // For displaying error messages

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Check if file is either PDF or DOCX
    if (
      file &&
      (file.type === "application/pdf" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      setCv(file);
      setErrorMessage(""); // Clear any previous error message

      setUploading(true);
      let progress = 0;

      const interval = setInterval(() => {
        if (progress < 100) {
          progress += 10;
          setUploadProgress(progress);
        } else {
          clearInterval(interval);
          setUploading(false);
          onNext({ cv: file }); // Pass the uploaded file to parent
        }
      }, 500);
    } else {
      setCv(null);
      setErrorMessage("Please upload a valid file (PDF or DOCX).");
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-xl-10" style={{ width: "48rem" }}>
          <div className="card shadow-lg p-4 bg-dark text-light">
            <h2 className="text-center mb-4 text-primary">Upload CV</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="cv" className="form-label text-white">
                  Upload CV
                </label>
                <input
                  id="cv"
                  type="file"
                  className="form-control bg-dark text-light"
                  onChange={handleFileChange}
                  required
                  disabled={uploading}
                />
              </div>

              {errorMessage && (
                <div className="text-danger mb-3">
                  <small>{errorMessage}</small>
                </div>
              )}

              {uploading && (
                <div className="progress mt-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${uploadProgress}%` }}
                    aria-valuenow={uploadProgress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              )}

              {!uploading && cv && (
                <div className="mt-3">
                  <p className="text-white">{cv.name}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVUpload;
