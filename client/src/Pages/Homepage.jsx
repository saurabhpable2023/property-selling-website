import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ProductCard from "../Components/ProductCard";
import ReviewCard from "../Components/ReviewCard";

function Homepage() {
  const arr = [1, 2, 3, 4, 5, 6];
  const reviews = [
    {
      avatar: "https://via.placeholder.com/60",
      name: "John Doe",
      review: "This is an amazing product! Highly recommend it.",
      rating: 5,
    },
    {
      avatar: "https://via.placeholder.com/60",
      name: "Jane Smith",
      review: "Good quality but a bit expensive.",
      rating: 4,
    },
    // Add more reviews as needed
  ];

  return (
    <div>
      <Header />
      <div className="homepage">
        <div className="overlay">
          <div className="content">
            <h1>Find Your Dream Property</h1>
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="centered">Properties</h1>
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

export default Homepage;
