import React, { useState } from "react";
import { TbEye } from "react-icons/tb";
import { GoEyeClosed } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../services/methods";
import { useCookies } from "react-cookie";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [cookie, setCookie] = useCookies(["token"]);

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

    // Validate email and password
    const isValidEmail = validateEmail(data.email);
    const isValidPassword = validatePassword(data.password);

    if (isValidEmail && isValidPassword) {
      // Show success toast
      const res = await loginUser(data.email, data.password);

      if (res.data.status === "Success") {
        setCookie("token", res.data.data);
        console.log(cookie);
        toast.success("Logged In...");
        navigate("/dashboard");
      } else {
        toast.error(res.data.status);
      }
    }
  };

  const validateEmail = (email) => {
    if (data.email.length === 0) {
      toast.error("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const validatePassword = (password) => {
    if (!password) {
      toast.error("Please enter a password");
      return false;
    }
    return true;
  };

  return (
    <div
      className="content-wrapper"
      style={{ marginBottom: "0px", marginTop: "10px" }}
    >
      <div className="container loginformContainer loginForm col-lg-6  mb-1 px-7 py-4">
        <h2 className="centered mb-4 mt-6">Login here</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-label">Username</div>
          <input
            onChange={handleOnChange}
            type="input"
            name="email"
            value={data.email}
            placeholder="Enter Your Username"
            className="form-control"
          />

          <div className="form-label">Password</div>
          <div className="d-flex align-items-center position-relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              name="password"
              value={data.password}
              onChange={handleOnChange}
              className="form-control"
            />
            <div
              onClick={() => setShowPassword((prev) => !prev)}
              className="position-absolute end-0 me-2"
              style={{ cursor: "pointer" }}
            >
              <span style={{ fontSize: "1.7rem" }}>
                {showPassword ? <TbEye /> : <GoEyeClosed />}
              </span>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center my-3 mt-2 mb-2">
            <div style={{ flexGrow: 1 }}>
              <p className="my-5 mt-2 mb-2">
                Don't have an account?{" "}
                <Link
                  to={"/register-page"}
                  className="tw-text-blue-500 hover:tw-text-red-800 tw-underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
            <div>
              <Link
                to={"/forgot-password"}
                className="tw-text-blue-500 hover:tw-text-red-800 tw-underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          <button type="submit" className="mt-2 btn btn-success">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
