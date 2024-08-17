// src/components/Navbar.js

import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserDetails } from "../../../services/admin";
import { toast } from "react-toastify";
import { deleteCookie } from "../../../services/methods";

const Navbar = () => {
  const navigate = useNavigate();

  const [data, setData] = useState("");
  useEffect(() => {
    getUserDetails().then((res) => {
      if (res.data.status === "Success") {
        setData(res.data.data);
      } else {
        toast.error(res.status);
      }
    });
  }, []);

  const logout = () => {
    deleteCookie("token");
    navigate("/admin/login");
  };
  return (
    <nav
      className="navbar navbar-dark bg-dark fixed-top"
      style={{ height: "10%" }}
    >
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Admin Dashboard</span>
        <div className="d-flex">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Dropdown>
                <DropdownButton
                  id="admin-profile-dropdown"
                  title={data.firstName + " " + data.lastName}
                  variant="link"
                  className="nav-link dropdown-toggle"
                  drop="down-centered" // Dropdown to the end of the button
                >
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/admin/user-profile">
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item as={Button} onClick={logout}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </DropdownButton>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
