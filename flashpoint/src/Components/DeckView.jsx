// ---------------------------
// Required imports
// ---------------------------
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// ---------------------------
// Component imports
// ---------------------------
import Nav from "./Nav";

const DeckView = ({ decks }) => {
  //TODO: Add logic to display flashcards
  //   const displayCards = () => {};
  //map through the deck using the deck id in the url params
  //display the question of each card

  const { deckId } = useParams();
  const currentDeck = decks[parseInt(deckId)];

  const randomCard =
    currentDeck &&
    currentDeck.flashcards[
      Math.floor(Math.random() * currentDeck.flashcards.length)
    ];

  return (
    <div>
      <Nav />
      <div className="flex justify-center bg-[#fff] text-black h-[450px] w-[375px] md:w-[750px] border border-slate-400 rounded-lg m-auto">
        <div className="flex flex-col items-start m-auto p-2">
          {randomCard ? (
            <div className="mb-4">
              <h2>{randomCard.question}</h2>
              {/* You can add more details here, like answers or hints if available */}
            </div>
          ) : (
            <p>No flashcards available in this deck.</p>
          )}
          <textarea
            type="text"
            className="text-md text-black p-2 rounded-lg mx-auto m-auto w-[300px] h-[100px] md:w-[600px] md:h-[200px] border-2 border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#444da1] focus:border-transparent"
            placeholder="Type your answer here"
          ></textarea>
        </div>
      </div>
      <Link to="/dashboard">
        <button className="bg-[#444da1] hover:bg-[#444da194] text-white font-bold py-2 px-4 m-10 rounded">
          Exit
        </button>
      </Link>
    </div>
  );
};

export default DeckView;
