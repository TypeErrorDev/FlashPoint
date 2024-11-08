const Nav = () => {
  return (
    <div className="bg-slate-700 w-[380px] h-20 md:h-12 rounded-b-2xl shadow-md shadow-[#2e274e] flex justify-center md:justify-center flex-col md:flex-row items-center mb-40  transition-all duration-[150ms] md:w-[760px]">
      <div className="items-center text-3xl md:text-[24px] w-full text-center ">
        <p className="text-white">Settings</p>
      </div>
      <div className="items-center text-3xl w-full text-center">
        <p>Signout</p>
      </div>
    </div>
  );
};

export default Nav;
