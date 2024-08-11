import { Link } from "react-router-dom";
import wishlistIcon from "../Assets/icons/wishlist-icon.png";
import profileIcon from "../Assets/icons/profile-icon.png";

function Header() {
  return (
    <div>
      <div className="header container-fluid">
        <div className="row">
          <div className="col-10">
            <h1 className="site-title">Property Selling Website</h1>
          </div>
          <div className="col-2">
            <div className="row">
              <div className="col-3"></div>
              <div className="col"></div>
              <div className="col">
                <Link to="/wishlist">
                  <img src={wishlistIcon} style={{ height: "30px" }} alt="" />
                </Link>
              </div>
              <div className="col">
                <Link to="/login">
                  <img src={profileIcon} style={{ height: "32px" }} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
