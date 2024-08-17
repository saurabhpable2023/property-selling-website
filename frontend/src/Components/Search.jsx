import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
function Search() {
  const [searchType, setSearchType] = useState("city");
  const [searchString, setSearchString] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleInputChange = (e) => {
    setSearchString(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchString.length === 0) {
      toast.warning("Please enter a search term");
      return;
    }

    // Check if the current path is the homepage
    if (location.pathname === "/") {
      // Navigate to the search page
      navigate("/search");
    } else {
      // If already on the search page, you can trigger the search logic here
      // For example, updating search results based on searchString and searchType
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <select
            className="search-criteria"
            value={searchType}
            onChange={handleSelectChange}
          >
            <option value="city">City</option>
            <option value="state">State</option>
            <option value="pincode">Pin Code</option>
            <option value="property">Property Name</option>
          </select>
          <input
            type="text"
            placeholder="Search here"
            className="search-input"
            value={searchString}
            onChange={handleInputChange}
          />
          &nbsp; &nbsp;
          <Link to={"/search"}>
            <button
              type="submit"
              className="search-button"
              onClick={handleSubmit}
            >
              Search
            </button>
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Search;
