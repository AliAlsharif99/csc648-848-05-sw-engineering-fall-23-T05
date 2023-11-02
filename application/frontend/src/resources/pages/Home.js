import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import RestaurantThumbnail from '../RestaurantThumbnail';
import '../styles/Home.css';

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://3.19.239.176:5005/api/home', {
            method: 'GET',
            credentials: 'include',
        });
        if (response.ok) {
          const data = await response.json();
          setRestaurants(data.restaurants);
          setUser(data.user);
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
          <h1>Welcome To BiteRate {user && `${user.first_name} ${user.last_name}`}</h1>
          <p>Track and share your favorite restaurants with your friends!</p>
        </div>
        <h2>Recommended Restaurants</h2>
        <div className="restaurant-list">
          {restaurants.map((restaurant) => (
            <RestaurantThumbnail key={restaurant.restaurant_id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
