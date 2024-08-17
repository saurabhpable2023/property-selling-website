import React, { useState } from "react";
import { TbEye } from "react-icons/tb";
import { GoEyeClosed } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { changePassword } from "../services/methods";
import { useCookies } from "react-cookie";

function ResetPasswordPage() {
  const [cookie] = useCookies();
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords
    const isValidOldPassword = validatePassword(data.oldPassword);
    const isValidNewPassword = validatePassword(data.newPassword);
    const doPasswordsMatch = data.newPassword === data.confirmPassword;

    if (isValidOldPassword && isValidNewPassword && doPasswordsMatch) {
      // Example: Call your reset password function here
      const response = await changePassword(data.oldPassword, data.newPassword);
      // Show success toast
      if (response.data.status === "Success") {
        toast.success("Password reset successful!");
        navigate("/dashboard");
      } else {
        toast.warning(response.data.status);
      }
    } else if (!doPasswordsMatch) {
      toast.error("New passwords do not match");
    }
  };

  const validatePassword = (password) => {
    if (!password) {
      toast.error("Please enter a password");
      return false;
    }
    return true;
  };

  return (
    <div>
      <div className="container resetPasswordFormContainer col-lg-6 mb-1 px-7 py-4">
        <h2 className="centered mb-4 mt-6">Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-label">Old Password</div>
          <div className="d-flex align-items-center position-relative">
            <input
              type={showOldPassword ? "text" : "password"}
              placeholder="Enter Your Old Password"
              name="oldPassword"
              value={data.oldPassword}
              onChange={handleOnChange}
              className="form-control"
            />
            <div
              onClick={() => setShowOldPassword((prev) => !prev)}
              className="position-absolute end-0 me-2"
              style={{ cursor: "pointer" }}
            >
              <span style={{ fontSize: "1.7rem" }}>
                {showOldPassword ? <TbEye /> : <GoEyeClosed />}
              </span>
            </div>
          </div>

          <div className="form-label">New Password</div>
          <div className="d-flex align-items-center position-relative">
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="Enter Your New Password"
              name="newPassword"
              value={data.newPassword}
              onChange={handleOnChange}
              className="form-control"
            />
            <div
              onClick={() => setShowNewPassword((prev) => !prev)}
              className="position-absolute end-0 me-2"
              style={{ cursor: "pointer" }}
            >
              <span style={{ fontSize: "1.7rem" }}>
                {showNewPassword ? <TbEye /> : <GoEyeClosed />}
              </span>
            </div>
          </div>

          <div className="form-label">Re-enter New Password</div>
          <div className="d-flex align-items-center position-relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter Your New Password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={handleOnChange}
              className="form-control"
            />
            <div
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="position-absolute end-0 me-2"
              style={{ cursor: "pointer" }}
            >
              <span style={{ fontSize: "1.7rem" }}>
                {showConfirmPassword ? <TbEye /> : <GoEyeClosed />}
              </span>
            </div>
          </div>

          <button type="submit" className="mt-2 btn btn-success">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
