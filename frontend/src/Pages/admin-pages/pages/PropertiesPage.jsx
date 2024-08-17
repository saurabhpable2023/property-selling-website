// src/pages/PropertiesPage.js

import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import { DeleteProperty, GetAllProperty } from "../../../services/admin";

const PropertiesPage = () => {
  // Dummy data for demonstration
  var propertyT = [];
  const [Properities, SetProperities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(4);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 10;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const fetchData = async (page) => {
    try {
      const result = await GetAllProperty(page, itemsPerPage); // Backend Integration
      if (result.status === 200) {
        const data = result.data;
        setTotalPages(data.totalPages);
        return data.properties;
      } else {
        return [];
      }
    } catch (error) {
      toast.error("Error fetching property data");
      return null;
    } finally {
    }
  };
  useEffect(() => {
    (async () => {
      setLoading(false);
      const prop = await fetchData(currentPage);
      SetProperities([...prop]);
    })();
  }, [currentPage, loading]);

  const deleteProperty = async (id) => {
    if (window.confirm("Are you Sure you want to Delete Property")) {
      const result = await DeleteProperty(id); // Backend Integration
      if (result.status === 200) {
        toast.success(result.data.message);
        propertyT = await fetchData();
        SetProperities(propertyT);
        setLoading(true);
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
        <div className="container-fluid">
          <h2 className="my-4">Properties List</h2>
          <div className="table-responsive mt-5 ms-5 me-5">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Property Title</th>
                  <th>Address Line 1</th>
                  <th>Address Line 2</th>
                  <th>City</th>
                  <th>District</th>
                  <th>State</th>
                  <th>Price</th>
                  <th>Tags</th>
                  <th>Owner</th>
                  <th>Property Delete</th>
                </tr>
              </thead>
              <tbody>
                {Properities.map((property) => {
                  return (
                    <tr key={property.id}>
                      <td>{property.id}</td>
                      <td>{property.title}</td>
                      <td>{property.address.addressLine1}</td>
                      <td>{property.address.addressLine2}</td>
                      <td>{property.address.city}</td>
                      <td>{property.address.district}</td>
                      <td>{property.address.state}</td>
                      <td>{property.price}</td>
                      <td>{property.tags.map((tag) => tag.tagName + " , ")}</td>
                      <td>{property.owner}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteProperty(property.id)}
                        >
                          {" "}
                          Delete Property
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="pagination justify-content-center">
              <button
                class="page-link me-2 mb-2"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                class="page-link ms-2 mb-2"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
