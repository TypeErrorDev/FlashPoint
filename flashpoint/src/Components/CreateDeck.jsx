// ---------------------------
// Required Imports
// ---------------------------
import { Link } from "react-router-dom";

const createDeck = () => {
  return (
    <div className="flex justify-center">
      <button className="text-white border p-2 mb-5 bg-green-800 rounded">
        <Link to={`/deck/create`}>Create Deck</Link>
      </button>
    </div>
  );
};

export default createDeck;
