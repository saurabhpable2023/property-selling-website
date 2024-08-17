import { Link, useNavigate } from "react-router-dom";
import wishlistIcon from "../Assets/icons/wishlist-icon.png";
import profileIcon from "../Assets/icons/profile-icon.png";
import searchIcon from "../Assets/icons/search-icon.png"; // Import the search icon
import { getCookie } from "../services/methods";

function Header() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    const token = getCookie("token");

    if (token) {
      navigate("/dashboard"); // Redirect to dashboard if token exists
    } else {
      navigate("/login"); // Redirect to login if no token is found
    }
  };

  return (
    <div className="container-fluid">
      <div className="header row align-items-center py-2">
        <div className="col-6 col-md-8">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontSize: "1.5rem",
            }}
          >
            EvergreenEstate
          </Link>
        </div>
        <div className="col-6 col-md-4 d-flex justify-content-end">
          <Link to="/search" className="me-3">
            <img
              src={searchIcon}
              style={{ height: "30px" }}
              alt="search icon"
            />
          </Link>
          <Link to="/wishlist" className="me-3">
            <img
              src={wishlistIcon}
              style={{ height: "30px" }}
              alt="wishlist icon"
            />
          </Link>
          <img
            src={profileIcon}
            style={{ height: "32px", cursor: "pointer" }}
            alt="profile icon"
            onClick={handleProfileClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
