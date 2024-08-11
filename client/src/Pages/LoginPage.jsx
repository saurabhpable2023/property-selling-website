import React, { useState } from "react";
import { TbEye } from "react-icons/tb";
import { GoEyeClosed } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password
    const isValidEmail = validateEmail(data.email);
    const isValidPassword = validatePassword(data.password);

    if (isValidEmail && isValidPassword) {
      // Proceed with login logic
      console.log("Form is valid, perform login");

      // Example: Call your login function here

      // Clear form or perform other actions after successful login
      setData({
        email: "",
        password: "",
      });

      // Show success toast
      toast.success("Login successful!");
      navigate("/dashboard");
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    if (!email || !re.test(email)) {
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
    <div>
      <Header />
      <div className="container loginformContainer loginForm col-lg-6  mb-1 px-7 py-4">
        <h2 className="centered mb-4 mt-6">Login here</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-label">Email</div>
          <input
            onChange={handleOnChange}
            type="email"
            name="email"
            value={data.email}
            placeholder="Enter Your Email"
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
      <div style={{ position: "absolute", bottom: "0", width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
}

export default LoginPage;
