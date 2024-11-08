const Nav = () => {
  return (
    <div className="bg-slate-700 w-[485px] h-20 rounded-b-2xl shadow-lg shadow-[#86efac] flex justify-center flex-col items-center mb-40">
      <div className="items-center text-3xl hover:border-e-zinc-500 hover:border-b hover:rounded-lg w-full text-center">
        <p className="text-white ">Settings</p>
      </div>
      <div className="items-center text-3xl hover:border-e-zinc-500 hover:border-b hover:rounded-lg w-full text-center">
        <p>Signout</p>
      </div>
    </div>
  );
};

export default Nav;
