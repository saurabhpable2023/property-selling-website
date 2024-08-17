// src/pages/UsersPage.js

import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { DeleteSpecficUserId, GetAllUsers } from "../../../services/admin";
import { toast } from "react-toastify";

const UsersPage = () => {
  // Dummy data for demonstration
  var usersT = [];
  const [Users, setUsers] = useState([]);

  const fetchData = async () => {
    const result = await GetAllUsers(); // Backend Integration
    if (result.status === 200) {
      const data = result.data;
      return data;
    } else {
      toast.warning("No Users Found");
      return [];
    }
  };
  useEffect(() => {
    (async () => {
      const users = await fetchData();
      setUsers(users);
    })();
  }, []);

  const deleteUser = async (id) => {
    if (
      window.confirm(
        "Are you Sure you want to Delete this User, Please note thier associated properties would also be deleted, Can check this under Properties page"
      )
    ) {
      const result = await DeleteSpecficUserId(id); // Backend Integration
      if (result.status === 200) {
        usersT = await fetchData();
        setUsers(usersT);
        toast.success(result.data.message);
      } else {
        toast.warning(result.data.message);
        return null;
      }
    } else {
      return null;
    }
  };
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1" style={{ marginLeft: "250px" }}>
        <Navbar />
        <div className="container-fluid" style={{ height: "100%" }}>
          <h2 className="my-4">Users List</h2>
          <div className="table-responsive mt-5 ms-5 me-5">
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>User Delete</th>
                </tr>
              </thead>
              <tbody>
                {Users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteUser(user.id)}
                      >
                        {" "}
                        Delete User
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
