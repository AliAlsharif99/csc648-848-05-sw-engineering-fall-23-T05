import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Search() {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('search');
    setSearchQuery(query);

    fetch(`http://3.19.239.176:5005/api/search?search=${query}`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        setResults(data.restaurants);
      })
      .catch(error => {
        console.error("Error fetching search results:", error);
      });
  }, [location.search]);

  const handleResultClick = (restaurant) => {
    navigate('/restaurant', { state: { restaurant } });
  };

  return (
    <div className="page-container">
      <div className='search-container'>
        <div className='search-results'>
          <h1 className='results-title'>
            Search Results <span className='search-keyword'>“{searchQuery}”</span>
            (showing <span className='number-of-results'>{results.length}</span> results)
          </h1>
          {results.map((restaurant, index) => (
            <div key={index} className='result' onClick={() => handleResultClick(restaurant)}>
              <img src={process.env.PUBLIC_URL + '/images/' + restaurant.image_url} className='restaurant-result-image' alt={restaurant.name} />
              <div className='restaurant-result-content'>
                <h1 className='restaurant-name'><span className='number'>{index + 1}.</span> {restaurant.name}</h1>
                <p><span className='rate'>{restaurant.rating}</span> (<span className='reviews'>{restaurant.reviews}</span> reviews)</p>
                <p className='address'>{restaurant.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
