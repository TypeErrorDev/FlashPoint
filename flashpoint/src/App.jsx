// ---------------------------
// Required imports
// ---------------------------
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

// ---------------------------
// Import components
// ---------------------------
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Components/Dashboard";
import CreateDeck from "./Components/CreateDeck";
import Login from "./Components/Login"; // Unauthenticated Home Page
import Settings from "./Components/Settings";

// ---------------------------
// Code Begins
// ---------------------------

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => false);
  const [username, setUsername] = useState(() => {
    const savedUsername = localStorage.getItem("username");
    return savedUsername ? savedUsername : "";
  });

  const handleLogin = (username) => {
    console.log("handleLogin");
    setUsername(username);
    localStorage.setItem("username", username);
    setIsAuthenticated(true);
  };

  useEffect(() => {
    if (username) {
      console.log("useEffect to setIsAuthenticated");
      setIsAuthenticated(true);
    }
  }, [username]);

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
          path="/deck/create"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <CreateDeck />
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
