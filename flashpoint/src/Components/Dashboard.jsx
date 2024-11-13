// ---------------------------
// Required imports
// ---------------------------
import { Link } from "react-router-dom";

// ---------------------------
// Import components
// ---------------------------
import Nav from "./Nav";
import DeckTable from "./DeckTable";

// ---------------------------
// Code Begins
// ---------------------------
const Dashboard = ({ decks }) => {
  console.log("dashboard", decks);
  return (
    <div>
      <Nav />
      <Link to="/dashboard">
        <button className="bg-[#1f752d] hover:bg-[#1f752d6e] text-white font-bold py-2 px-4 m-10 md rounded transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#7d8ec7]/50">
          Create Deck
        </button>
      </Link>
      <DeckTable decks={decks} />
    </div>
  );
};

export default Dashboard;
