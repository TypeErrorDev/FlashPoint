import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./Nav";

const DeckView = ({ decks }) => {
  const { deckId } = useParams();
  const currentDeck = decks[parseInt(deckId)];

  const [shownCards, setShownCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);

  // Initialize the first card randomly
  useEffect(() => {
    if (currentDeck && currentDeck.flashcards.length > 0) {
      handleNextCard();
    }
  }, [currentDeck]);

  const handleNextCard = () => {
    if (!currentDeck || shownCards.length >= currentDeck.flashcards.length) {
      alert("All cards have been shown!");
      return;
    }

    // Filter out cards that have already been shown
    const remainingCards = currentDeck.flashcards.filter(
      (_, index) => !shownCards.includes(index)
    );

    // Pick a random card from remaining cards
    const randomIndex = Math.floor(Math.random() * remainingCards.length);
    const randomCardIndex = currentDeck.flashcards.indexOf(
      remainingCards[randomIndex]
    );

    setCurrentCard(currentDeck.flashcards[randomCardIndex]);

    // Add this card to shown cards
    setShownCards([...shownCards, randomCardIndex]);
  };

  return (
    <div>
      <Nav />
      <div className="flex justify-center bg-[#2e385698] text-black h-[450px] w-[375px] md:w-[750px] border border-slate-400 rounded-lg m-auto">
        <div className="flex flex-col items-start m-auto p-2">
          <div className="text-white px-6">
            {shownCards.length}/
            {currentDeck ? currentDeck.flashcards.length : 0}
          </div>
          {currentCard ? (
            <div className="mb-4">
              <p className="text-xl text-white m-auto px-6">
                {currentCard.question}
              </p>
            </div>
          ) : (
            <p className="text-white text-xl mb-5">
              No flashcards available in this deck.
            </p>
          )}
          <textarea
            type="text"
            className="text-md text-black p-2 rounded-lg mx-auto m-auto w-[300px] h-[100px] md:w-[600px] md:h-[200px] border-2 border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#444da1] focus:border-transparent"
            placeholder="Type your answer here"
          ></textarea>
          <button
            onClick={handleNextCard}
            className="bg-[#444da1] hover:bg-[#444da194] text-white font-bold py-2 px-4 m-10 rounded"
          >
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
