// ---------------------------
// Required imports
// ---------------------------
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// ---------------------------
// Import components
// ---------------------------
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login"; // Unauthenticated Home Page
import Settings from "./Components/Settings";

// ---------------------------
// Code Begins
// ---------------------------

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => setIsAuthenticated(true);

  return (
    <div className="h-screen w-screen flex justify-center bg-[#0a092d] font-mono">
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        {/* Faux Authenticated Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Settings />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};
export default App;
