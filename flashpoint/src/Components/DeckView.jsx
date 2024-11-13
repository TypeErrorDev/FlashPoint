import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./Nav";

const DeckView = ({ decks }) => {
  const { deckId } = useParams();
  const currentDeck = decks[parseInt(deckId)];

  const [shownCards, setShownCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showStats, setShowStats] = useState(false);

  const totalPoints = currentDeck ? currentDeck.flashcards.length : 0;

  // Initialize the first card randomly
  useEffect(() => {
    if (currentDeck && currentDeck.flashcards.length > 0) {
      handleNextCard();
    }
  }, [currentDeck]);

  const handleNextCard = () => {
    if (!currentDeck || shownCards.length >= currentDeck.flashcards.length) {
      setShowStats(true); // Show stats after all cards are shown
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
    setShownCards([...shownCards, randomCardIndex]);
  };

  const handleMarkCorrect = () => {
    setCorrectAnswers(correctAnswers + 1);
    setScore(score + 1); // Assuming 1 point per correct answer
    handleNextCard();
  };

  return (
    <div>
      <Nav />
      <div className="flex justify-center bg-[#2e385698] text-black h-[450px] w-[375px] md:w-[750px] border border-slate-400 rounded-lg m-auto">
        <div className="flex flex-col items-start m-auto p-2">
          {showStats ? (
            // Statistics view
            <div className="text-white text-center">
              <h2>Statistics</h2>
              <p>Questions Seen: {shownCards.length}</p>
              <p>Correct Answers: {correctAnswers}</p>
              <p>Total Possible Points: {totalPoints}</p>
              <p>Points Scored: {score}</p>
            </div>
          ) : (
            // Flashcard view
            <>
              <div className="text-white px-6">
                Card: {shownCards.length}/{totalPoints}
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
                onClick={handleMarkCorrect}
                className="bg-[#1f752d] hover:bg-[#1f752d6e] text-white font-bold py-2 px-4 m-10 rounded"
              >
                Mark as Correct
              </button>
              <button
                onClick={handleNextCard}
                className="bg-[#444da1] hover:bg-[#444da194] text-white font-bold py-2 px-4 m-10 md:m-0 rounded md:ml-10"
              >
                Next
              </button>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/dashboard">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-10 md rounded">
            Exit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DeckView;
