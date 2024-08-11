import { Link } from "react-router-dom";

function List() {
  return (
    <div>
      <h3>
        <Link to="/login">Login Page</Link> <br />
        <Link to="/contact-us">Contact Us Page</Link>
        <br />
        <Link to="/register-page">Register Profile Page</Link>
        <br />
        <Link to="/edit-page">Edit Profile Page</Link>
        <br />
        <br />
        <Link to="/add-property">Add Property Page</Link>
        <br />
        <Link to="/edit-property">Edit Property Page</Link>
        <br />
        <Link to="/Properities">My Properities</Link>
        <br />
        <Link to="/individual-property">Individual Property</Link>
        <br />
        <br />
        <Link to="/property-card">Property Card Page</Link>
        <br/>
        <Link to="/product-card">Product Card Page</Link>
        <br />
        <Link to="/wishlist">Wishlist Page</Link>
        <br />
        <br />
      </h3>
    </div>
  );
}

export default List;
