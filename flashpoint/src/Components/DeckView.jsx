// ---------------------------
// Required imports
// ---------------------------
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  const [currentCard, setCurrentCard] = useState(0);

  const randomCard =
    currentDeck &&
    currentDeck.flashcards[
      Math.floor(Math.random() * currentDeck.flashcards.length)
    ];

  const handleNextCard = () => {
    setCurrentCard(currentCard + 1);
  };

  return (
    <div>
      <Nav />
      <div className="flex justify-center bg-[#2e385698] text-black h-[450px] w-[375px] md:w-[750px] border border-slate-400 rounded-lg m-auto">
        <div className="flex flex-col items-start m-auto p-2">
          <div className="text-white px-6">
            {currentCard}/{currentDeck ? currentDeck.flashcards.length : 0}
          </div>
          {randomCard ? (
            <div className="mb-4">
              <p className="text-xl text-white m-auto px-6">
                {randomCard.question}
              </p>
              {/* You can add more details here, like answers or hints if available */}
            </div>
          ) : (
            <p className="text-white text-xl mb-5">
              No flashcards available in this deck.
            </p>
          )}
          <textarea
            type="text"
            className="text-md  text-black p-2 rounded-lg mx-auto m-auto w-[300px] h-[100px] md:w-[600px] md:h-[200px] border-2 border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#444da1] focus:border-transparent"
            placeholder="Type your answer here"
          ></textarea>
          <button className="bg-[#444da1] hover:bg-[#444da194] text-white font-bold py-2 px-4 m-10 rounded">
            Next
          </button>
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
