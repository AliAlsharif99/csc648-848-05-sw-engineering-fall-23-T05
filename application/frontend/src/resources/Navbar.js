import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [burgerVisible, setBurgerVisible] = useState(false);

  const toggleBurger = () => {
    setBurgerVisible(!burgerVisible);
  };

  const burgerClass = burgerVisible ? "burger-icon open" : "burger-icon";

  // User Search input handling
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      navigate(`/search?search=${searchQuery}`);
    }
  };

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        BiteRate
      </Link>

      <div className="burger-container" onClick={toggleBurger}>
        <div className={burgerClass}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>

      <div className={`nav-list-container ${burgerVisible ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <li>
            <Link to="/meettheteam">Meet The Team</Link>
          </li>
          <li>
            <Link to="/lists">Lists</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <div className="search-input-container">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
                value={searchQuery}
                onChange={handleSearchInputChange}
                onKeyDown={handleSearch}
              />
          </div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;