import ProductCard from "../Components/ProductCard";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { SearchPropertyMethod } from "../services/methods";

function SearchProperty() {
  const [searchType, setSearchType] = useState("city");
  const [searchString, setSearchString] = useState("");

  const [properties, setProperties] = useState([]);

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
    } else {
      SearchPropertyMethod(searchType, searchString).then((res) => {
        if (res.status === "Success") {
          setProperties([...res.data]);
        } else {
          setProperties([]);
          toast.error(res.status);
        }
      });
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <div className="mt-5 centered">
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
                <option value="property">Property Name</option>
                <option value="tag">Tag Name</option>
                <option value="user">Username</option>
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
      </div>
      <div className="container">
        <h1 className="test-started">Searched Properties</h1>
        <div className="row">
          {properties.length === 0 ? (
            <h1 className="searchContainer centered mt-3">No Results</h1>
          ) : (
            properties.map((property) => {
              return (
                <div className="col m-4">
                  <ProductCard
                    page={{ name: "homepage" }}
                    id={property.id}
                    title={property.title}
                    description={property.description}
                    price={property.price}
                    owner={property.owner}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchProperty;
