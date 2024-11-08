// ---------------------------
// Required imports
// ---------------------------
import { Route, Routes } from "react-router-dom";

// ---------------------------
// Import components
// ---------------------------
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";

const App = () => {
  return (
    <div className="grid place-items-center h-screen bg-[#0d205f] font-mono">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};
export default App;
