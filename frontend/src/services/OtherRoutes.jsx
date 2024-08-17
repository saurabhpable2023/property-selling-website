// Utilities
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

// Pages
import AddProperty from "../Pages/AddProperty";
import ContactUs from "../Pages/ContactUs";
import EditProperty from "../Pages/EditProperty";
import LoginPage from "../Pages/LoginPage";
import ProductCard from "../Components/ProductCard";
import WishlistPage from "../Pages/Wishlist";
import RegisterPage from "../Pages/RegisterPage";
import EditProfile from "../Pages/EditProfile";
import MyProperities from "../Pages/MyProperities";
import IndividualProperties from "../Pages/IndividualProperties";
import Homepage from "../Pages/Homepage";
import Dashboard from "../Pages/Dashboard";
import ResetPasswordPage from "../Pages/ResetPassword";
import Checkout from "../Pages/Checkout";
import ProtectedRoute from "../services/ProtectedRoutesComponent";
import SearchProperty from "../Pages/SearchPage";
import ForgotPassword from "../Pages/ForgotPassword";

function OtherRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/search" element={<SearchProperty />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="/contact-us" element={<ContactUs />} />

      {/* Wrap protected routes with ProtectedRoute */}
      <Route
        path="/edit-page"
        element={
          <ProtectedRoute>
            <EditProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/edit-property/:id"
        element={
          <ProtectedRoute>
            <EditProperty />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-property"
        element={
          <ProtectedRoute>
            <AddProperty />
          </ProtectedRoute>
        }
      />
      <Route
        path="/product-card"
        element={
          <ProtectedRoute>
            <ProductCard page={{ name: "wishlist" }} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/property-card"
        element={
          <ProtectedRoute>
            <ProductCard page={{ name: "Edit-Prop" }} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <WishlistPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Properities"
        element={
          <ProtectedRoute>
            <MyProperities />
          </ProtectedRoute>
        }
      />
      <Route
        path="/individual-property/:id"
        element={
          <ProtectedRoute>
            <IndividualProperties />
          </ProtectedRoute>
        }
      />
      <Route
        path="/reset-password"
        element={
          <ProtectedRoute>
            <ResetPasswordPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/checkout/:id"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default OtherRoutes;
