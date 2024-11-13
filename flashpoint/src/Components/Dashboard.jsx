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
      <DeckTable decks={decks} />
    </div>
  );
};

export default Dashboard;
