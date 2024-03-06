import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  let [btnNameReact, setbtnNameReact] = useState("login");

  const onlineStatus = useOnlineStatus();
 
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo-items" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus===true ? "✅" : "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about"> About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
          <button
            className="log-button"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
