import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ProductCard from "../Components/ProductCard";

function WishlistPage() {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <Header />
      <h1 className="centered mt-3">WishList Page</h1>
      <div className="container">
        <div className="row">
          {arr.map((element) => {
            return (
              <div className="col m-2">
                <ProductCard page={{ name: "wishlist" }} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WishlistPage;
