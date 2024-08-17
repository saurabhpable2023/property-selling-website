import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutesComponent";
import AdminDashboardPage from "../Pages/admin-pages/pages/DashboardPage";
import AdminLoginPage from "../Pages/admin-pages/pages/LoginPage";
import PropertiesPage from "../Pages/admin-pages/pages/PropertiesPage";
import AdminProfilePage from "../Pages/admin-pages/pages/AdminProfilePage";
import UsersPage from "../Pages/admin-pages/pages/UsersPage";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <ProtectedRoute>
            <UsersPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/property"
        element={
          <ProtectedRoute>
            <PropertiesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/user-profile"
        element={
          <ProtectedRoute>
            <AdminProfilePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AdminRoutes;
