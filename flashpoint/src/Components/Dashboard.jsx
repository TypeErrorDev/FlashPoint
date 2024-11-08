// ---------------------------
// Required imports
// ---------------------------
import { useNavigate } from "react-router-dom";

// ---------------------------
// Import components
// ---------------------------
import Nav from "./Nav";
import DeckTable from "./DeckTable";

// ---------------------------
// Code Begins
// ---------------------------
const Dashboard = () => {
  const navigate = useNavigate();
  const goBackHome = () => {
    navigate("/");
  };
  return (
    <div>
      <Nav />
      <DeckTable />
      <button
        className="bg-[#444da1] text-white py-2 px-6 rounded-lg shadow-lg shadow-[#2e274e]/40 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring[#7d8ec7]/50 w-32 h-32"
        onClick={goBackHome}
      >
        Click
      </button>
    </div>
  );
};

export default Dashboard;
