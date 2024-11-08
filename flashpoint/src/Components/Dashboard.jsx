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
const Dashboard = () => {
  const navigate = useNavigate();
  const goBackHome = () => {
    navigate("/");
  };
  return (
    <div>
      <Nav />
      <button className="bg-white " onClick={goBackHome}>
        Click
      </button>
    </div>
  );
};

export default Dashboard;
