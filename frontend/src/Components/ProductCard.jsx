import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPropertyImages } from "../services/property";
import { toast } from "react-toastify";

function ProductCard({
  page = { name: "default" },
  id,
  title,
  description,
  price,
  owner,
}) {
  const [Img, SetImg] = useState("");
  const fetchImage = async () => {
    // const id = 9;
    const result = await getPropertyImages(id); // Backend Integration
    if (result.status === 200) {
      const data = result.data;
      return data;
    } else {
      toast.warning("No Such Property Images Found");
      return null;
    }
  };
  useEffect(() => {
    fetchImage().then((res) => {
      SetImg(res[0].imageData);
    });
  }, []);

  // useEffect(() => {
  //   (() => {
  //     fetchImage().then((res) => {
  //       // console.log(res[0].imageData);
  //       SetImg(res[0]);
  //     });
  //     // console.log(Img);
  //     // console.log(images[0]);
  //     // var data = images[0].imageData;
  //     // SetImg(data);
  //     // console.log(data);
  //   })();
  // }, []);
  function addToCartBtn() {
    if (page.name == "homepage") {
      return (
        <div>
          <Link
            to={`/individual-property/${id}`}
            class="btn btn-success card-link mb-2"
          >
            Show Property
          </Link>
          <a href={`/checkout/${id}`} class="btn btn-secondary card-link mb-2">
            Contact Owner
          </a>
        </div>
      );
    }
    if (page.name == "Edit-Prop") {
      return (
        <div>
          <Link
            to={`/individual-property/${id}`}
            class="btn btn-success card-link mb-2"
          >
            Show Property
          </Link>
          <Link
            to={`/edit-property/${id}`}
            class="btn btn-warning card-link mb-2"
          >
            Edit Property
          </Link>
        </div>
      );
    }
    if (page.name == "wishlist") {
      return (
        <div>
          <Link
            to={`/individual-property/${id}`}
            class="btn btn-success card-link mb-2"
          >
            Show Property
          </Link>
          <a href={`/checkout/${id}`} class="btn btn-secondary card-link mb-2">
            Contact Owner
          </a>
        </div>
      );
    }
  }

  return (
    <div>
      <div class="card" style={{ width: "20rem", borderRadius: "20px" }}>
        <img
          src={"data:image/png;base64," + `${Img}`}
          // src={`${Img}`}
          class="card-img-top"
          alt="property image"
          style={{ borderRadius: "20px" }}
        />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p
            class="card-text"
            style={{
              textAlign: "justify",
              lineHeight: "18px",
              wordSpacing: "2px",
            }}
          >
            {description}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item"
            style={{ fontWeight: "bolder", fontSize: "20px" }}
          >
            {" "}
            &#8377; {price}
          </li>
          <li class="list-group-item">
            <b>Seller Name:</b> {owner}
          </li>
        </ul>
        <div class="card-body">{addToCartBtn()}</div>
      </div>
    </div>
  );
}

export default ProductCard;
