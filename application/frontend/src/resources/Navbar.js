import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [searchVisible, setSearchVisible] = useState(false);
  const searchContainerRef = useRef(null);

  const toggleSearch = () => {
    setSearchVisible(true);
  };

  const handleClickOutside = (event) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target)
    ) {
      setSearchVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        BiteRate
      </Link>

      <div className="nav-list-container">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <p>/</p>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <p>/</p>
          <li>
            <Link to="/meettheteam">Meet The Team</Link>
          </li>
          <p>/</p>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <p>/</p>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/signup">signup</Link>
          </li>
          <li>
            <Link to="/lists">Lists</Link>
          </li>
          <li>
            <Link to="/restaurant">Restaurant</Link>
          </li>
        </ul>
      </div>

      <div className="search-container" ref={searchContainerRef}>
        {searchVisible ? (
          <input type="text" placeholder="Search..." className="search-input" />
        ) : (
          <button className="circle-button" onClick={toggleSearch}>
            +
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
