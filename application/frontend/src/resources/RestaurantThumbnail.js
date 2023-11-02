import React from 'react';
import { useNavigate } from 'react-router-dom';

function RestaurantThumbnail({ restaurant }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/restaurant', { state: { restaurant } });
  };

  const imagePath = restaurant.image_url ? restaurant.image_url.replace('images/', '') : '';

  return (
    <div className="restaurant-thumbnail" onClick={handleClick}>
      <img src={process.env.PUBLIC_URL + '/images/' + imagePath} alt={restaurant.name} />
      <h3>{restaurant.name}</h3>
      <p>Rating: {restaurant.rating}</p>
      <p>Address: {restaurant.address}</p>
    </div>
  );
}

export default RestaurantThumbnail;
