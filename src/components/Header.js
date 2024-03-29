import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";


const Header = () => {
  let [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const data = useContext(userContext);
  const cart = useSelector((store)=>store.cart.items); 
 
  return (
    <div className="header flex justify-between bg-cyan-100 shadow-lg mb-2 h-52">
      <div className="logo-container">
        <img className="logo-items w-56 m-6" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center ">
        <ul className="flex p-4 m-5">
          <li className="px-4">Online Status: {onlineStatus===true ? "✅" : "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about"> About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact</Link></li>
          <li className="px-4"><Link to="/cart"> Cart ({cart.length} items)</Link> </li>
         
          <button 
            className="bg-gray-100 px-2 mx-2"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li>{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
