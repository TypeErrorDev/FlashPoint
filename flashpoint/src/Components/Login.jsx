import { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const [submitLogin, setSubmitLogin] = useState(false);

  const handleLogin = () => {
    // TODO: figure out the submit function
    console.log({ user });
    setUser(user);
    setSubmitLogin(true);
    Navigate("/dashboard");
  };

  return (
    <div className="bg-white rounded-lg w-full max-w-[400px] h-[300px] text-zinc-500 text-xl text-center flex flex-col items-center justify-center">
      <h1 className="text-xl text-[#382fb3] font-bold ">
        {submitLogin ? `Welcome, ${user}` : "Please input your username"}
      </h1>
      <input
        type="text"
        className="bg-slate-200 p-4 mt-4 max-w-[250px] rounded-lg text-[#4a65bb] text-xl font-bold "
        placeholder="Username"
        onChange={(e) => setUser(e.target.value)}
      />

      <button
        type="submit"
        className="bg-[#334788] h-12 w-20 text-white rounded-xl mt-4 hover:bg-opacity-90"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
