const Login = () => {
  const handleLogin = (e) => {
    // TODO: figure out the submit function
    e.preventDefault();
    console.log("Testing Login button");
  };

  return (
    <div className="bg-white rounded-lg px-5 py-10 w-full max-w-[400px] h-[300px] text-zinc-500 text-xl text-center flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Welcome!</h1>
      <input
        type="text"
        className="bg-slate-200 p-4 mt-4 max-w-[250px] rounded-lg"
        placeholder="Username"
      />
      <button
        type="submit"
        className="bg-[#334788] h-12 w-20 text-white rounded-xl mt-4 hover:bg-opacity-80"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
