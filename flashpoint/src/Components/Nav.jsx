// ---------------------------
// Required imports
// ---------------------------
import { useNavigate } from "react-router-dom";

// ---------------------------
// Import components
// ---------------------------

// ---------------------------
// Code Begins
// ---------------------------
const Nav = () => {
  const navigate = useNavigate();
  //TODO: Add functionality to navigate to /settings
  const navigateToSettings = () => {
    console.log("Navigating to settings");
    navigate("/settings");
  };

  const signout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="nav-container bg-[#444da1] w-[400px] md:w-[750px] lg:w-[1000px] h-20 md:h-12 rounded-b-2xl shadow-md shadow-[#2e274e] flex justify-center md:justify-center flex-col md:flex-row items-center m-auto mb-40 transition-all duration-[150ms]  text-white">
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
