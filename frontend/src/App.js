// Utilities
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// Pages
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AdminRoutes from "./services/AdminRoutes";
import OtherRoutes from "./services/OtherRoutes";

function App() {
  function routeHandler() {
    const url = window.location.href;
    if (url.includes("/admin")) {
      return <AdminRoutes />;
    } else {
      return (
        <div>
          <Header />
          <OtherRoutes />
          <Footer />
        </div>
      );
    }
  }

  return (
    <div className="App">
      {routeHandler()}
      <ToastContainer />
    </div>
  );
}

// style={{ position: "absolute", bottom: "0", width: "100%" }}
export default App;
