import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="relative-bottom footer container-fluid">
      <div className="row pt-1 pb-5">
        <div className="col-md-3 col-sm-12 mt-2">
          <h5>Contact Information</h5>
        </div>

        <div className="col-md-3 col-sm-12 mt-2">
          <h5>Site Map</h5>
          <p style={{ fontSize: "medium" }}>
            <Link>Homepage</Link> <br />
            <Link>Register Page</Link> <br />
            <Link>Login Page</Link> <br />
            <Link>Wishlist Page</Link> <br />
          </p>
        </div>

        <div className="col-md-3 col-sm-12 mt-2">
          <h5>Project Information</h5>
          <p style={{ fontSize: "medium" }}>
            <b>Project Members:</b>
            <ul>
              <li>Gaurav Rathore</li>
              <li>Chandan Dewangan</li>
              <li>Saurabh Pable</li>
              <li>Pritesh Naik</li>
            </ul>
          </p>
        </div>

        <div className="col-md-3 col-sm-12 mt-2">
          <b>Exerpt:</b> <br />
          This is our CDAC Project. Which aims to showcase technical skills we
          accquired in our CDAC Journey...
        </div>
      </div>

      {/* Copyright Details Section */}
      <div className="row">
        <div className="col-10" style={{ fontSize: "medium" }}>
          &copy; 2024 Property Selling Site
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Footer;
