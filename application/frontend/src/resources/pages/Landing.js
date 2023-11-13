import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import RestaurantThumbnail from '../RestaurantThumbnail';
import '../styles/Landing.css';

function LandingPage() {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/`);
        if (response.ok) {
          const data = await response.json();
          setRestaurants(data.restaurants);
        } else {
          console.error('Server Error: ', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="page-container">
      <div className="landing-page">
        <div className="banner">
          <h1>Welcome To BiteRate</h1>
          <p>Track and share your favorite restaurants with your friends!</p>
          <button onClick={() => navigate('/signup')}>Sign Up Now</button>
        </div>
        <h2>Featured Restaurants</h2>
        <div className="restaurant-list">
          {restaurants.map((restaurant) => (
            <RestaurantThumbnail key={restaurant.restaurant_id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
