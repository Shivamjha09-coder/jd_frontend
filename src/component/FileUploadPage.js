import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const FileUploadPage = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length === 0) {
      setError("Invalid file type. Please select a valid file.");
      return;
    }

    setFile(acceptedFiles[0]);
    setError(""); // Clear any previous errors
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
  } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      "text/plain": [".txt"],
    },
    multiple: false, // Only allow single file
  });

  const handleSkip = () => {
    navigate("/job-form");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please choose or drop a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3001/upload-jd", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        navigate("/preview", { state: { jobData: response.data.data } });
      } else {
        setError("Failed to upload file. Please try again.");
      }
    } catch (error) {
      setError("An error occurred while uploading the file.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-4">Upload Job Description</h2>
        <div
          {...getRootProps()}
          style={{
            border: "2px dashed #007bff",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            marginBottom: "20px",
            backgroundColor: isDragActive ? "#f0f8ff" : "#f9f9f9",
            cursor: "pointer",
          }}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop your file here...</p>
          ) : file ? (
            <p>{file.name}</p>
          ) : (
            <p>Drag and drop your file here, or click to select a file</p>
          )}
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column">
            <button
              type="button"
              className="btn btn-danger mb-3"
              onClick={handleSkip}
            >
              Skip
            </button>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Uploading..." : "Upload File"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FileUploadPage;
