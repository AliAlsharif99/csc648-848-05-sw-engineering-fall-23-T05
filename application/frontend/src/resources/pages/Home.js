import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'

function Home() {
  const [userData, setUserData] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch data from the Flask backend when the component mounts
    fetch('http://127.0.0.1:5005/api/home')
      .then(response => response.json())
      .then(data => {
        // Update state with the fetched data
        setUserData(data.user);
        setRestaurants(data.restaurants);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div className="page-container">
      <div className='home-container'>
        <div>
          <h1>Home</h1>
          <div>
            <h2>User Data:</h2>
            <pre>{JSON.stringify(userData, null, 2)}</pre>
          </div>
          <div>
            <h2>Restaurants:</h2>
            <pre>{JSON.stringify(restaurants, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home