// ---------------------------
// Required imports
// ---------------------------
import { Link } from "react-router-dom";

const DeckTable = ({ decks }) => {
  //TODO: create accordian for the group of deck categories

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="w-full text-left text-sm font-light ">
              {/* Deck Table Column Names */}
              <thead className="text-white font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4 border text-center">
                    Deck Name
                  </th>
                  <th scope="col" className="px-6 py-4 border text-center">
                    # of Cards
                  </th>
                  <th
                    scope="col"
                    className="hidden md:table-cell px-6 py-4 border text-center"
                  >
                    Points
                  </th>
                  <th scope="col" className="px-6 py-4 border text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* This is where the DECKS gets rendered */}
                {decks.map((deck, index) => {
                  const cardCount = deck.flashcards
                    ? deck.flashcards.length
                    : 0;
                  const totalPoints = deck.flashcards.reduce(
                    (acc, card) => acc + (card.points ? card.points : 0),
                    0
                  );

                  return (
                    <tr
                      key={index}
                      className="hover:bg-[#444da123] border-b-2 border-[#444da123]"
                    >
                      <td className="px-6 py-4 text-center text-white ">
                        <Link to={`/deck/${index}/${deck.name}`}>
                          {deck.name}
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-center text-white">
                        {cardCount}
                      </td>
                      <td className="hidden md:table-cell px-6 py-4 text-center text-white">
                        {totalPoints}
                      </td>
                      <td className="px-6 py-4 text-center flex flex-col md:flex-row md:justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Edit
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 md:mt-0 md:ml-2">
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeckTable;
