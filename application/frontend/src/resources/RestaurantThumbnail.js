import React from 'react';
import { useNavigate } from 'react-router-dom';

function RestaurantThumbnail({ restaurant }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/restaurant', { state: { restaurant } });
  };

  return (
    <div className="restaurant-thumbnail" onClick={handleClick}>
      <img src={restaurant.imageUrl} alt={restaurant.name} />
      <h3>{restaurant.name}</h3>
      <p>Rating: {restaurant.rating}</p>
    </div>
  );
}

export default RestaurantThumbnail;
