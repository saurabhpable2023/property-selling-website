import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import Search from "../Components/Search";
import { GetAllProperty } from "../services/property";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Homepage() {
  const [Properities, SetProperities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(4);

  const itemsPerPage = 6;
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
        toast.warning("No Property Found");
        return null;
      }
    } catch (error) {
      toast.error("Error fetching property data");
      return null;
    }
  };

  useEffect(() => {
    (async () => {
      const prop = await fetchData(currentPage);
      SetProperities([...prop]);
    })();
  }, [currentPage]);

  return (
    <div className="content-wrapper">
      <div className="homepage">
        <div className="overlay">
          <div className="content">
            <h1>Find Your Dream Property</h1>
            <Link className="btn btn-success btn-lg" to={"/search"}>
              Search for your NEW HOME...
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="centered">Properties</h1>
        <div className="row">
          {Properities.length === 0 ? (
            <h1 className="centered mt-3">No Properties </h1>
          ) : (
            Properities.map((property) => {
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
  );
}

export default Homepage;
