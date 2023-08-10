// Header component for header section: Logo, Nav Items
import { useState } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {

  const [loginText, updateLoginText] = useState("Login");

  const onlineStatus = useOnlineStatus();

    return (
      <div className="header">
        <div className="nav-items">
          <ul className="flex justify-between p-4">
            <li><Link to="/">Home</Link></li>
            <li className="text-pink-700">Online Status: {onlineStatus ? "✔️" : "🚫"}</li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="./components/Grocery">Grocery</Link></li>
            <li className="text-pink-700"><Link to="/contact">Contact</Link></li>
            <button onClick={()=> loginText == "Login" ? updateLoginText("LogOut") : updateLoginText("Login") }>{loginText}</button>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;