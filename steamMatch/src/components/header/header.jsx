import "./header.css";
import { useLocation, Link } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);

  /*if (location.pathname === "/") {
    return null;
  }*/

  return (
    <header className="headerMain">
      <span>Steam Match</span>

      <NavBar />
    </header>
  );
};

export default Header;
