const Nav = () => {
  //TODO: Add functionality to navigate to /settings
  const navigateToSettings = () => {
    console.log("Navigating to settings");
  };
  //TODO: Add functionality to signout the user and redirect to /
  const signout = () => {
    console.log("Signing out");
  };

  return (
    <div className="nav-container bg-[#444da1] w-[380px] md:w-[760px] lg:w-[1024px] h-20 md:h-12 rounded-b-2xl shadow-md shadow-[#2e274e] flex justify-center md:justify-center flex-col md:flex-row items-center mb-40 transition-all duration-[150ms]  text-white">
      <div className="nav-settings items-center text-3xl md:text-[24px] w-full text-center ">
        <button
          className="items-center text-3xl md:text-[24px] w-full text-center"
          onClick={navigateToSettings}
        >
          Settings
        </button>
      </div>
      <button
        className="items-center text-3xl md:text-[24px] w-full text-center"
        onClick={signout}
      >
        Signout
      </button>
    </div>
  );
};

export default Nav;
