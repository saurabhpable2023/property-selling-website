// Utilities
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// Pages
import AddProperty from "./Pages/AddProperty";
import ContactUs from "./Pages/ContactUs";
import EditProperty from "./Pages/EditProperty";
import LoginPage from "./Pages/LoginPage";
import ProductCard from "./Components/ProductCard";
import WishlistPage from "./Pages/Wishlist";
import RegisterPage from "./Pages/RegisterPage";
import EditProfile from "./Pages/EditProfile";
import MyProperities from "./Pages/MyProperities";
import IndividualProperties from "./Pages/IndividualProperties";
import Homepage from "./Pages/Homepage";
import Dashboard from "./Pages/Dashboard";
import ResetPasswordPage from "./Pages/ResetPassword";
import Checkout from "./Pages/Checkout";
import CartPage from "./Pages/CartPage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register-page" element={<RegisterPage />} />
        <Route path="/edit-page" element={<EditProfile />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/edit-property" element={<EditProperty />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route
          path="/product-card"
          element={<ProductCard page={{ name: "wishlist" }} />}
        />
        <Route
          path="/property-card"
          element={<ProductCard page={{ name: "Edit-Prop" }} />}
        />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/Properities" element={<MyProperities />} />
        <Route path="/individual-property" element={<IndividualProperties />} />
        <Route path="/forgot-password" element={<ResetPasswordPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
