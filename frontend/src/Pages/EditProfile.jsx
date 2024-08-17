import { useEffect, useState } from "react";
import { updateUser } from "../services/User";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getUserDetails } from "../services/methods";

function EditProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getUserDetails()
      .then((res) => {
        if (res.data.status === "Success") {
          const user = res.data.data;
          setFirstName(user.firstName);
          setLastName(user.lastName);
          setCity(user.city);
          setState(user.state);
          setPhoneNumber(user.phoneNumber);
          setDob(user.dob);
        } else {
          toast.error(res.data.status);
        }
      })
      .catch((error) => {
        toast.error("Failed to fetch user details");
        console.error("Error fetching user details:", error);
      });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  function validation() {
    if (firstName.trim().length === 0) return "Enter First Name";
    if (lastName.trim().length === 0) return "Enter Last Name";
    if (dob.trim().length === 0) return "Enter Date of Birth";
    if (city.trim().length === 0) return "Enter City";
    if (state.trim().length === 0) return "Enter State";
    if (phoneNumber.trim().length !== 10) return "Incorrect phone number";
    return 1;
  }

  const handleUpdateUser = async () => {
    const val = validation();
    if (val === 1) {
      try {
        const res = await updateUser(
          firstName,
          lastName,
          dob,
          phoneNumber,
          city,
          state
        );
        if (res.status === 200) {
          toast.success("User profile updated successfully!");
          navigate("/dashboard");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        toast.error("Failed to update user profile");
        console.error("Error updating user profile:", error);
      }
    } else {
      toast.error(val);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row mt-3">
          <div className="col-sm-1 col-md-2 col-lg-2"></div>
          <div className="col formContainer">
            <center>
              <h1 className="page-title mt-3">Edit Profile</h1>
            </center>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label>Phone Number</label>
                  <input
                    type="number"
                    className="form-control"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label>Date of Birth:</label>
                  <input
                    type="date"
                    className="form-control"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label>City</label>
                  <input
                    type="text"
                    className="form-control"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label>State</label>
                  <input
                    type="text"
                    className="form-control"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <button
                  className="btn btn-success ms-2 mb-3"
                  onClick={handleUpdateUser}
                >
                  Update Profile
                </button>
                <button
                  className="btn btn-danger mb-3 ms-4"
                  onClick={() => navigate("/profile")}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-1 col-md-2 col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
