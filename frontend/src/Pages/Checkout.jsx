import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  getPropertyImages,
  GetSpecficPropertyId,
  sendEmail,
} from "../services/property";
import { toast } from "react-toastify";
import { getUserDetails, getUserDetailsById } from "../services/methods";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const pathname = window.location.pathname;
  const id = pathname.split("/").pop();
  const [Title, setTitle] = useState("Testing Title");
  const [Descpt, setDescpt] = useState(
    "For the first time ever, celebrate the life and music of our friend and The Revolution’s legendary frontman," +
      "groove to some rare Prince songs and get some sleep in The Kid’s bedroom. Wear your finest purple fits, and when you step into history, feel free to unleash your royal rockstar. Stay tuned."
  );
  const [Price, setPrice] = useState("2000000");
  const [OwnerName, setOwnerName] = useState("Owner");
  const [OwnerEmail, SetOwnerEmail] = useState("");
  const [OwnerPhone, SetOwnerPhone] = useState("");
  const [Img, SetImg] = useState("");
  const navigate = useNavigate();
  async function fetchData() {
    // const id = 9;
    try {
      const result = await GetSpecficPropertyId(id); // Backend Integration
      if (result.status === 200) {
        const data = result.data;
        return data;
      } else {
        toast.warning("No Such Property Found");
        return null;
      }
    } catch (error) {
      console.error("Error fetching property data:", error);
      toast.error("Error fetching property data");
      return null;
    }
  }

  const fetchImage = async () => {
    // const id = 9;
    const result = await getPropertyImages(id); // Backend Integration
    if (result.status == 200) {
      const data = result.data;
      return data;
    } else {
      toast.warning("No Such Property Images Found");
      return null;
    }
  };

  useEffect(() => {
    getUserDetails()
      .then((res) => {
        if (res.data.status === "Success") {
          return res.data.data.id;
        } else {
          toast.error(res.status);
        }
      })
      .then((id) => {
        fetchData().then((prop) => {
          const { title, price, description, owner, userid } = prop;
          setTitle(title);
          setPrice(price);
          setDescpt(description);
          setOwnerName(owner);
          if (id == userid) {
            toast.warning("You Own This Property");
            navigate("/");
          }
          getUserDetailsById(userid).then((res) => {
            if (res.data.status === "Success") {
              SetOwnerEmail(res.data.data.email);
              SetOwnerPhone(res.data.data.phoneNumber);
            } else {
              toast.error(res.status);
            }
          });
        });
      });
    fetchImage().then((res) => {
      SetImg(res[0].imageData);
    });
  }, []);

  const handleEmail = async () => {
    window.confirm("Email Triggered to Owner Showing Interest");
    const emailBody = {
      recipient: OwnerEmail,
      msgBody:
        "Hi " +
        OwnerName +
        ",\n Interest has Been Shown For Your Property Titled:" +
        Title,
      subject: "Interest Shown for Property:" + Title,
    };
    const result = await sendEmail(emailBody); // Backend Integration
    console.log(result);
    if (result.status === 200) {
      const data = result.data;
      window.confirm(
        data +
          "To Owner, They will Contact Back at the Earliest, Thank You For Using Our Service"
      );
      navigate("/dashboard");
    } else {
      toast.warning("No Such Property Images Found");
      return null;
    }
  };

  const handleNumber = async () => {
    // const id = 9;
    window.confirm("Owner's Contact Number:" + OwnerPhone);
  };

  const handleWhatsapp = async () => {
    window.confirm("WhatsApp Message Triggered to Owner, Moving to WhatsApp");
  };

  return (
    <div>
      <h1 className="centered mt-3">Contact Owner</h1>
      <div class="container">
        <div class="row">
          <div class="col-5">
            <img
              src={"data:image/png;base64," + `${Img}`}
              class="card-img-top"
              alt="property image"
              style={{ borderRadius: "20px" }}
            />
            <div>
              <p>
                <b>Property Title:</b> {Title}
              </p>
              <p>
                <b>Property Description:</b> {Descpt}
              </p>
              <p>
                <b>Property Price:</b> {Price}
              </p>
              <p>
                <b>Property Owner/Seller:</b> {OwnerName}
              </p>
            </div>
          </div>
          <div class="col-1"></div>
          <div class="col-6 border rounded border-black">
            <center>
              <div className="mt-3">
                <h2>Mode of Communication</h2>
                <hr />
                <br />
                <div>
                  <h5>Via Email</h5>
                  <button
                    className="btn btn-success ms-3"
                    onClick={handleEmail}
                  >
                    Send Email to Owner
                  </button>
                  <br />
                  <br />
                </div>
                <hr />
                <br />
                <div>
                  <h5>Via Phone Number</h5>
                  <button
                    className="btn btn-success ms-3"
                    onClick={handleNumber}
                  >
                    Provide Owner Contact Number
                  </button>
                  <br />
                  <br />
                </div>
                <hr />
                <br />
                <div>
                  <h5>Via Whatsapp</h5>
                  <button
                    className="btn btn-success ms-3"
                    onClick={handleWhatsapp}
                  >
                    Send Message to WhatsApp
                  </button>
                  <br />
                  <br />
                </div>
              </div>
              <br />
              {/* <br />
              <hr />
              <br />
              <br />
              <br /> */}
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
