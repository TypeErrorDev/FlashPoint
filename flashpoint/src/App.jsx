// ---------------------------
// Required imports
// ---------------------------
import { Route, Routes } from "react-router-dom";

// ---------------------------
// Import components
// ---------------------------
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";

// ---------------------------
// Code Begins
// ---------------------------
const App = () => {
  return (
    <div className="h-screen w-screen flex justify-center bg-[#0a092d] font-mono">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};
export default App;
