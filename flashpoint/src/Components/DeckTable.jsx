// ---------------------------
// Required imports
// ---------------------------
import { Link } from "react-router-dom";

const DeckTable = () => {
  //TODO: Create the rows for each deck in the database
  const DECKS = [
    {
      name: "JavaScript Info",
      category: "JavaScript",
      flashcards: [
        {
          question: "What is a closure in JavaScript?",
          answer:
            "A closure is a function that has access to its own scope, the scope of the outer function, and the global scope.",
          points: 3,
        },
        {
          question:
            "What is the difference between '==' and '===' in JavaScript?",
          answer:
            "'==' checks for value equality, while '===' checks for both value and type equality.",
          points: 2,
        },
        {
          question: "How do you declare a variable in JavaScript?",
          answer: "You can declare a variable using var, let, or const.",
          points: 1,
        },
        {
          question: "What is 'this' keyword in JavaScript?",
          answer:
            "'this' refers to the object from which the function was called or the context in which the code is executed.",
          points: 2,
        },
        {
          question: "What are promises in JavaScript?",
          answer:
            "Promises are used to handle asynchronous operations and represent a value that may be available now, in the future, or never.",
          points: 3,
        },
        {
          question: "What does 'NaN' stand for and when is it used?",
          answer:
            "NaN stands for 'Not a Number' and is used to indicate that a value is not a legal number.",
          points: 1,
        },
        {
          question: "What are the six primitive data types in JavaScript?",
          answer:
            "The six primitive data types are string, number, bigint, boolean, undefined, and symbol.",
          points: 2,
        },
        {
          question: "How do you create an arrow function in JavaScript?",
          answer:
            "An arrow function is created using the syntax: (parameters) => expression.",
          points: 1,
        },
        {
          question: "Explain event bubbling in JavaScript.",
          answer:
            "Event bubbling is a type of event propagation where the event starts from the target element and propagates up to the root.",
          points: 3,
        },
        {
          question: "What is the purpose of the 'async' keyword in JavaScript?",
          answer:
            "The 'async' keyword is used to declare an asynchronous function, which returns a promise.",
          points: 2,
        },
        {
          question: "What is hoisting in JavaScript?",
          answer:
            "Hoisting is JavaScript's behavior of moving declarations to the top of the current scope, before code execution.",
          points: 2,
        },
        {
          question:
            "What is the difference between null and undefined in JavaScript?",
          answer:
            "null is an assigned value that represents no value, while undefined means a variable has been declared but not assigned.",
          points: 2,
        },
        {
          question: "How does JavaScript handle asynchronous operations?",
          answer:
            "JavaScript handles asynchronous operations using callbacks, promises, and async/await.",
          points: 3,
        },
        {
          question: "What is the 'bind' method used for in JavaScript?",
          answer:
            "The 'bind' method creates a new function with a specific 'this' context and optionally some initial arguments.",
          points: 3,
        },
        {
          question: "How does JavaScript's event loop work?",
          answer:
            "The event loop handles asynchronous operations by managing a queue of callbacks, allowing non-blocking code execution.",
          points: 5,
        },
      ],
    },
    {
      name: "React Basics",
      category: "React",
      flashcards: [
        {
          question: "What is React?",
          answer: "React is a JavaScript library for building user interfaces.",
          points: 1,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="w-full text-left text-sm font-light ">
              {/* Deck Table Column Names */}
              <thead className=" text-white font-medium dark:border-neutral-500">
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
                {DECKS.map((deck, index) => {
                  const cardCount = deck.flashcards
                    ? deck.flashcards.length
                    : 0;
                  const totalPoints = deck.flashcards.reduce(
                    (acc, card) => acc + (card.points ? card.points : 0),
                    0
                  );

                  return (
                    <tr key={index}>
                      <td className="px-6 py-4 text-center text-white hover:border-white">
                        <Link to={`/deck/${index}`}>{deck.name}</Link>
                      </td>
                      <td className="px-6 py-4 text-center text-white hover:border-white">
                        {cardCount}
                      </td>
                      <td className="hidden md:table-cell px-6 py-4 text-center text-white hover:border-white">
                        {totalPoints}
                      </td>
                      <td className="px-6 py-4 text-center text-white hover:border-white">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Edit
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-5 rounded-full">
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
