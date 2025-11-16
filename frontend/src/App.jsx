import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";

/* PROTECTED ROUTE */
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ROOT REDIRECT */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* APP LAYOUT */}
        <Route element={<MainLayout />}>

          {/* PROTECTED DASHBOARD */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Example Pages */}
          <Route path="/events" element={<div>Events Page</div>} />
          <Route path="/clubs" element={<div>Clubs Page</div>} />
          <Route path="/coaches" element={<div>Coaches Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
