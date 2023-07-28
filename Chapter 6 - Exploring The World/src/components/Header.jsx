// Header component for header section: Logo, Nav Items
import { useState } from "react";

const Header = () => {

  const [loginText, updateLoginText] = useState("Login");

    return (
      <div className="header">
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <button onClick={()=> loginText == "Login" ? updateLoginText("LogOut") : updateLoginText("Login") }>{loginText}</button>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;