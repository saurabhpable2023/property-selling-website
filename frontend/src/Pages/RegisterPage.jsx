// import index from "../index";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../services/methods";

function RegisterPage() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Username, setUsername] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const navigate = useNavigate();

  function validation() {
    if (FirstName.length === 0) return "Enter First Name...";
    if (LastName.length === 0) return "Enter Last Name";
    if (Username.length === 0) return "Enter Username";
    if (Email.length === 0) return "Enter Email";
    if (Password.length === 0) return "Enter Password";
    if (dob.length === 0) return "Enter Date of Birth";
    if (city.length === 0) return "Enter City";
    if (state.length === 0) return "Enter State";
    if (PhoneNumber.length !== 10) return "Incorrect phone number";
    if (Password !== ConfirmPassword) return "Passwords does not match";

    return 1;
  }

  const RegisterUser = async () => {
    const val = validation();
    if (val === 1) {
      const res = await registerUser(
        FirstName,
        LastName,
        Username,
        Email,
        Password,
        dob,
        PhoneNumber,
        city,
        state
      );

      if (res.data.status === "Success") {
        toast.success("User Saved...");
        navigate("/login");
      } else {
        toast.error(res.data.status);
      }
    } else {
      toast.error(val);
    }
  };

  return (
    <div>
      <div className="container">
        <div>
          <div className="row mt-3 ">
            <div className="col-sm-1 col-md-2 col-lg-2"></div>

            <div className="col formContainer">
              <center>
                <h1 className="page-title mt-3">User Registration</h1>
              </center>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div />

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Phone Number</label>
                    <input
                      type="number"
                      className="form-control"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Date of Birth:</label>
                    <input
                      type="date"
                      className="form-control"
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">City</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">State</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      className="form-control form-control-sm"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    Already have account ?{" "}
                    <u>
                      <Link to="/login">Login</Link>
                    </u>
                  </div>
                  <button
                    className="btn btn-success ms-2 mb-3"
                    onClick={RegisterUser}
                  >
                    Register
                  </button>
                  <button className="btn btn-danger mb-3 ms-4">Cancel</button>
                </div>
              </div>
            </div>

            <div className="col-sm-1 col-md-2 col-lg-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
