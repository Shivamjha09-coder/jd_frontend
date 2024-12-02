import React, { useState } from "react";

const ProfileForm = ({ onNext, data }) => {
  const [jobTitle, setJobTitle] = useState(data.jobTitle || "");
  const [jobLocation, setJobLocation] = useState(data.jobLocation || "");
  const [companyName, setcompanyName] = useState(data.companyName || "");
  const [location, setLocation] = useState(data.location || "");
  const [profilePicture, setProfilePicture] = useState(
    data.profilePicture || null
  );
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0); // 0-4 scale of password strength
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!jobTitle.trim()) newErrors.jobTitle = "Name is required.";
    if (!jobLocation.trim() || !/^\S+@\S+\.\S+$/.test(jobLocation))
      newErrors.jobLocation = "Valid jobLocation is required.";
    if (!companyName.trim() || !/^\d{10}$/.test(companyName))
      newErrors.companyName = "Valid 10-digit companyName number is required.";
    if (!location.trim()) newErrors.location = "Location is required.";
    if (!profilePicture)
      newErrors.profilePicture = "Profile picture is required.";
    if (!password.trim() || password.length < 8)
      newErrors.password = "Password must be at least 8 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onNext({ jobTitle, jobLocation, companyName, location, profilePicture, password });
    }
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
      setErrors((prev) => ({ ...prev, profilePicture: null }));
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Basic password strength indicator
    let strength = 0;
    if (newPassword.length >= 8) strength++;
    if (/[A-Z]/.test(newPassword)) strength++;
    if (/[0-9]/.test(newPassword)) strength++;
    if (/[^A-Za-z0-9]/.test(newPassword)) strength++;
    setPasswordStrength(strength);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-xl-10" style={{ width: "48rem" }}>
          <div className="card shadow-lg p-4 bg-dark text-light">
            <h2 className="text-center mb-4 text-primary">
              Personal Information
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Full Name Input */}
              <div className="mb-3 d-flex align-items-center">
                <label
                  htmlFor="jobTitle"
                  className="form-label text-white w-25 me-3"
                >
                  Full Name
                </label>
                <input
                  id="jobTitle"
                  type="text"
                  className="form-control bg-dark text-light flex-grow-1"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>
              {errors.jobTitle && (
                <small className="text-danger">{errors.jobTitle}</small>
              )}

              {/* Email Input */}
              <div className="mb-3 d-flex align-items-center">
                <label
                  htmlFor="jobLocation"
                  className="form-label text-white w-25 me-3"
                >
                  Email Address
                </label>
                <input
                  id="jobLocation"
                  type="email"
                  className="form-control bg-dark text-light flex-grow-1"
                  value={jobLocation}
                  onChange={(e) => setJobLocation(e.target.value)}
                />
              </div>
              {errors.jobLocation && (
                <small className="text-danger">{errors.jobLocation}</small>
              )}

              {/* Phone Input */}
              <div className="mb-3 d-flex align-items-center">
                <label
                  htmlFor="companyName"
                  className="form-label text-white w-25 me-3"
                >
                  Phone Number
                </label>
                <input
                  id="companyName"
                  type="tel"
                  className="form-control bg-dark text-light flex-grow-1"
                  value={companyName}
                  onChange={(e) => setcompanyName(e.target.value)}
                />
              </div>
              {errors.companyName && (
                <small className="text-danger">{errors.companyName}</small>
              )}

              {/* Location Input */}
              <div className="mb-3 d-flex align-items-center">
                <label
                  htmlFor="location"
                  className="form-label text-white w-25 me-3"
                >
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  className="form-control bg-dark text-light flex-grow-1"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              {errors.location && (
                <small className="text-danger">{errors.location}</small>
              )}

              {/* Profile Picture */}
              <div className="mb-3 d-flex align-items-center">
                <label
                  htmlFor="profilePicture"
                  className="form-label text-white mx-3"
                >
                  Profile Picture
                </label>
                <input
                  id="profilePicture"
                  type="file"
                  accept="image/*"
                  className="form-control bg-dark text-light"
                  onChange={handleProfilePictureChange}
                  style={{ width: "32rem" }}
                />
              </div>
              {errors.profilePicture && (
                <small className="text-danger">{errors.profilePicture}</small>
              )}
              {profilePicture && (
                <div className="mt-3 text-center">
                  <img
                    src={profilePicture}
                    alt="Profile Preview"
                    className="img-thumbnail"
                    width="100"
                  />
                </div>
              )}

              {/* Password Input */}
              <div className="mb-3 d-flex align-items-center">
                <label
                  htmlFor="password"
                  className="form-label text-white w-25 me-3"
                >
                  Create Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control bg-dark text-light flex-grow-1"
                  value={password}
                  onChange={handlePasswordChange}
                  minLength="8"
                />
              </div>
              {errors.password && (
                <small className="text-danger">{errors.password}</small>
              )}
              <small
                className={`text-${
                  passwordStrength >= 3
                    ? "success"
                    : passwordStrength >= 2
                    ? "warning"
                    : "danger"
                }`}
              >
                Password Strength:{" "}
                {["Weak", "Fair", "Good", "Strong"][passwordStrength]}
              </small>

              {/* Submit Button */}
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary btn-lg">
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

export default ProfileForm;
