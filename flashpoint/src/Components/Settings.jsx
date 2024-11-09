// ---------------------------
// Required imports
// ---------------------------
// import { useNavigate } from "react-router-dom";

// ---------------------------
// Import components
// ---------------------------
import Nav from "./Nav";

// ---------------------------
// Code Begins
// ---------------------------

const Settings = () => {
  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center text-white">
        <h1 className="text-4xl">Settings</h1>
      </div>
    </div>
  );
};

export default Settings;
