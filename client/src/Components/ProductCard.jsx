function ProductCard({ page = { name: "default" } }) {
  function addToCartBtn() {
    if (page.name == "wishlist") {
      return (
        <div>
          <a
            href="/individual-property"
            class="btn btn-secondary card-link mb-2"
          >
            Show Property
          </a>
          <a href="/checkout" class="btn btn-success card-link mb-2">
            Buy Property

          </a>
        </div>
      );
    }
    if (page.name == "Edit-Prop") {
      return (
        <div>
          <a href="/individual-property" class="btn btn-success card-link mb-2">
            Show Property
          </a>
          <a href="/edit-property" class="btn btn-warning card-link mb-2">
            Edit Property
          </a>
        </div>
      );
    }
    if (page.name == "Checkout-Prop") {
      return <div></div>
    }
  }

  return (
    <div>
      <div class="card" style={{ width: "20rem", borderRadius: "20px" }}>
        <img
          src="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
          class="card-img-top"
          alt="property image"
          style={{ borderRadius: "20px" }}
        />
        <div class="card-body">
          <h5 class="card-title">Property title</h5>
          <p
            class="card-text"
            style={{
              textAlign: "justify",
              lineHeight: "18px",
              wordSpacing: "2px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            ab saepe facere, aut numquam maiores! Maxime nulla, sint in commodi
            expedita totam voluptas, harum
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
        <div class="card-body">{addToCartBtn()}</div>
      </div>
    </div>
  );
}

export default ProductCard;
