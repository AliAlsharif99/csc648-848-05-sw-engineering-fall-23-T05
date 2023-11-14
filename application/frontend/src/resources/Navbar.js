import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './styles/SearchSuggestion.css';

function Navbar() {
  const [burgerVisible, setBurgerVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleBurger = () => {
    setBurgerVisible(!burgerVisible);
  };

  const burgerClass = burgerVisible ? "burger-icon open" : "burger-icon";

  useEffect(() => {
    const fetchSearchSuggestions = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/search_suggestions?search=${searchQuery}&limit=6`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSearchSuggestions(data.restaurants);
      } catch (error) {
        console.error("Error fetching search suggestions", error);
      }
   };
    if (searchQuery) {
      fetchSearchSuggestions();
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, [searchQuery]);



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
          <div className="search-container">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
                value={searchQuery}
                onChange={handleSearchInputChange}
                onKeyDown={handleSearch}
              />
              {showDropdown && searchSuggestions.length > 0 && (
                <SearchDropdown suggestions={searchSuggestions} />
              )}
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

function SearchDropdown({ suggestions }) {
  return (
    <div className="search-dropdown">
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion.id}>
            <Link to={`/restaurant`}>
              {suggestion.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;