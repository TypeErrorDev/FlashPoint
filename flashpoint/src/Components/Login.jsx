// ---------------------------
// Required imports
// ---------------------------
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ---------------------------
// Code Begins
// ---------------------------
const Login = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // TODO: figure out the submit function
    console.log({ user });
    setUser(user);
    navigate("/dashboard");
  };

  const handleError = () => {
    if (user === "") {
      return alert("Please input your username"), setUser("");
    } else {
      return handleLogin();
    }
  };

  return (
    <div className="bg-white rounded-lg w-full max-w-[400px] h-[300px] text-zinc-500 text-xl text-center flex flex-col items-center justify-center mt-80">
      <h1 className="text-xl text-[#382fb3] font-bold ">
        Please input your username
      </h1>
      <input
        type="text"
        className="bg-slate-200 p-4 mt-4 max-w-[250px] rounded-lg text-[#4a65bb] text-xl font-bold focus:outline-none focus:ring-4 focus:ring-[#7d8ec7]/50"
        placeholder="Username"
        onChange={(e) => setUser(e.target.value)}
      />

      <button
        type="submit"
        className="bg-[#444da1] text-white py-2 px-6 mt-5 rounded-lg shadow-lg shadow-[#2e274e]/40 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring[#7d8ec7]/50"
        onClick={handleError}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
