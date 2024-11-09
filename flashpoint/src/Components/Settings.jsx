// ---------------------------
// Required imports
// ---------------------------
import { useNavigate } from "react-router-dom";

// ---------------------------
// Import components
// ---------------------------
import Nav from "./Nav";

// ---------------------------
// Code Begins
// ---------------------------

const Settings = () => {
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    console.log("Navigating to /dashbord from /settings");
    navigate("/dashboard");
  };
  return (
    <div>
      <Nav />

      <div className="flex flex-col justify-center items-center text-white mt-[-125px]">
        <h1 className="text-4xl">Settings Page</h1>
        <button className="bg-[#444da1] text-white py-2 px-6 rounded-lg shadow-lg shadow-[#2e274e] transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring[#7d8ec7]/50 w-32 h-32 mt-20">
          Delete All Decks
        </button>
        <button
          className="bg-[#444da1] text-white py-2 px-6 rounded-lg shadow-lg shadow-[#2e274e] transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring[#7d8ec7]/50 w-32 h-32 mt-20"
          onClick={navigateToDashboard}
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default Settings;
