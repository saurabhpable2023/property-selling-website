import Footer from "../Components/Footer";
import Header from "../Components/Header";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../Components/ProductCard";
function Checkout() {
  const [Title, setTitle] = useState("Testing Title")
  const [Descpt, setDescpt] = useState("For the first time ever, celebrate the life and music of our friend and The Revolution’s legendary frontman," +
    "groove to some rare Prince songs and get some sleep in The Kid’s bedroom. Wear your finest purple fits, and when you step into history, feel free to unleash your royal rockstar. Stay tuned.")
  // const [Address, setAddress] = useState("Pune")
  // const [State, setState] = useState("Maharashtra")
  // const [District, setDistrict] = useState("Pune")
  // const [City, setCity] = useState("Pune")
  // const [Pincode, setPincode] = useState("411033")
  // const [Type, setType] = useState("Apartment")
  // const [Area, setArea] = useState("5000")
  // const [Bedroom, setBedroom] = useState("2")
  // const [Bathroom, setBathroom] = useState("2")
  const [Price, setPrice] = useState("2000000")

  return (
    <div>
      <Header />
      <h1 className="centered mt-3">Checkout</h1>
      <div class="container">
        <div class="row">
          <div class="col-5">
            <img
              src="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
              class="card-img-top"
              alt="property image"
              style={{ borderRadius: "20px" }}
            />
            <div>
              <h5 >{Title}</h5>
              <p>
                <b>Property Description:</b>{" "}{Descpt}
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item"
                style={{ fontWeight: "bolder", fontSize: "20px" }}
              >
                {" "}
                &#8377; 2,000,000
              </li>
              <li class="list-group-item">
                <b>Seller Name:</b> Someone
              </li>
            </ul>
            {/* <div className="col m-4"> */}
            {/* <ProductCard page={{ name: "Checkout-Prop" }} /> */}
            {/* </div> */}
          </div>
          <div class="col-1"></div>
          <div class="col-6 border rounded border-black">
            <center>
              <h2 className="mt-3"><em>Invoice</em></h2> 
              <table className="table table-striped table-info table-bordered text-center mt-4 mb-2">
                <thead>
                  <th colSpan={2}>Cost Breakdown</th>
                </thead>
                <tbody>
                  <tr>
                    <td><b>Property Price:</b></td>
                    <td> &#8377;{Price * .03}</td>
                  </tr>
                  <tr>
                  <td><b>Tax Duty:</b></td>
                  <td> &#8377;{Price * .03}</td>
                  </tr>
                  <tr>
                  <td><b>Convience Tax:</b></td>
                  <td>&#8377;{Price * .10}</td>
                  </tr>
                  <tr>
                  <td><b>Total Payable:</b></td>
                  <td><b>&#8377;{Price * 1.13}</b> </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <br />
              <hr />
              <br />
              <br />
              <br />
              <button className="btn btn-success ms-3"><a href="/wishlist">Proceed to Pay</a></button>
            </center>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;


