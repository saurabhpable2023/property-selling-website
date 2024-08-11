import Footer from "../Components/Footer";
import Header from "../Components/Header";
import prop1 from "../Assets/Images/Property-1.jpg";
import prop2 from "../Assets/Images/Property-2.jpg";
import prop3 from "../Assets/Images/Property-3.jpg";
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function IndividualProperties() {
  const [Title, setTitle] = useState("Testing Title");
  const [Descpt, setDescpt] = useState(
    "For the first time ever, celebrate the life and music of our friend and The Revolution’s legendary frontman," +
      "groove to some rare Prince songs and get some sleep in The Kid’s bedroom. Wear your finest purple fits, and when you step into history, feel free to unleash your royal rockstar. Stay tuned."
  );
  const [Address, setAddress] = useState("Pune");
  const [State, setState] = useState("Maharashtra");
  const [District, setDistrict] = useState("Pune");
  const [City, setCity] = useState("Pune");
  const [Pincode, setPincode] = useState("411033");
  const [Type, setType] = useState("Apartment");
  const [Area, setArea] = useState("5000");
  const [Bedroom, setBedroom] = useState("2");
  const [Bathroom, setBathroom] = useState("2");
  const [Price, setPrice] = useState("2000000");
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div>
      <Header />
      <h1 className="centered mt-3">Individual Property</h1>
      <div className="container">
        <h2>
          Property Name: <b>{Title}</b>{" "}
        </h2>
        <div className="slider-container mb-3">
          <br />
          <h4>Sample Property Images:</h4>
          <Slider {...settings}>
            <div>
              <center>
                <img src={prop1} alt="Property1" className="CarouselImage" />
              </center>
            </div>
            <div>
              <center>
                <img src={prop2} alt="Property2" className="CarouselImage" />
              </center>
            </div>
            <div>
              <center>
                <img src={prop3} alt="Property3" className="CarouselImage" />
              </center>
            </div>
          </Slider>
          <br />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-6">
              <h2>Propperty Rating:</h2>
              <Rating name="Property-Rating" defaultValue={0} precision={0.5} />
              <hr />
              <br />
              <h2>
                <em>Property Short Description:</em>
              </h2>
              <p>{Descpt}</p>
              <hr />
              <br />
              <h2>
                <em>Property Specifications:</em>
              </h2>
              <p className="fs-5">
                <b>Type:</b>
                {Type}
              </p>
              <p className="fs-5">
                <b>Area:</b>
                {Area} sq.mt
              </p>
              <p className="fs-5">
                <b>Bedroom Count:</b>
                {Bedroom}
              </p>
              <p className="fs-5">
                <b>Bathroom Count:</b>
                {Bathroom}
              </p>
              <p className="fs-5">
                <b>Property Owner:</b>Test User 1
              </p>
              <br />
            </div>
            <div class="col-6">
              <h2>
                <em>Location</em>
              </h2>
              <p className="fs-5">
                <b>Address:</b>
                <em>{Address}</em>&nbsp;&nbsp;&nbsp;&nbsp;<b>City:</b>
                <em>{City}</em>
              </p>
              <p className="fs-5">
                <b>District:</b>
                <em>{District}</em> &nbsp;&nbsp;&nbsp;&nbsp;<b>State:</b>
                {State}
              </p>
              <p className="fs-5">
                <b>Pincode:</b>
                {Pincode}
              </p>
              <br />
              <hr />
              <br />
              <p className="fs-5"><b>Price:&#8377;</b>{Price}&nbsp;&nbsp;&nbsp;&nbsp; <button className="btn btn-success ms-2"><a href="/checkout">Buy Now</a></button></p>
              <button className="btn btn-warning me-3"><a href="/wishlist">Add to Wishlist</a></button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default IndividualProperties;


