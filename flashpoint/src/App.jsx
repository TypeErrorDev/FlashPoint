// ---------------------------
// Required imports
// ---------------------------
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

// ---------------------------
// Import components
// ---------------------------
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Components/Dashboard";
import CreateDeck from "./Components/CreateDeck";
import DeckView from "./Components/DeckView";
import Login from "./Components/Login"; // Unauthenticated Home Page
import Settings from "./Components/Settings";

// ---------------------------
// Code Begins
// ---------------------------

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => false);
  const [username, setUsername] = useState(() => {
    const savedUsername = localStorage.getItem("username");
    return savedUsername ? savedUsername : "";
  });

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
    {
      name: "CSS Tricks",
      category: "CSS",
      flashcards: [],
    },
  ];

  const handleLogin = (username) => {
    console.log("handleLogin");
    setUsername(username);
    localStorage.setItem("username", username);
    setIsAuthenticated(true);
  };

  useEffect(() => {
    if (username) {
      console.log("useEffect to setIsAuthenticated");
      setIsAuthenticated(true);
    }
  }, [username]);

  return (
    <div className="h-screen w-screen flex justify-center bg-[#0a092d] font-mono">
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        {/* Faux Authenticated Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard decks={DECKS} />
            </PrivateRoute>
          }
        />
        <Route
          path="/deck/create"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <CreateDeck />
            </PrivateRoute>
          }
        />
        <Route
          path="/deck/:deckId/:deckName"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <DeckView decks={DECKS} />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Settings />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};
export default App;
