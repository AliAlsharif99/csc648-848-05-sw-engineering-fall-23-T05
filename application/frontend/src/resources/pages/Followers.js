import React from 'react'
import Navbar from '../Navbar'
import { Link, useNavigate } from 'react-router-dom';
import {FaArrowLeft } from 'react-icons/fa';
import user2 from "../images/user2.jpg";

const followersData = [
    { name: 'Suguru Geto', isFollowing: false, imgSrc: {user2} },
    { name: 'Suguru Geto', isFollowing: false, imgSrc: {user2} },
    { name: 'Suguru Geto', isFollowing: false, imgSrc: {user2} },
    { name: 'Suguru Geto', isFollowing: false, imgSrc: {user2} },
    { name: 'Suguru Geto', isFollowing: false, imgSrc: {user2} },
  ];

const FollowerItem = ({ name, isFollowing, imgSrc}) => {
  return (
    <Link to="/followers2" className='remove-underline'>
      <li className="follower-item">
        {imgSrc && <img src={user2} alt={name} className="follower-picture" />}
        <span>{name}</span>
        <button onClick={(e) => e.stopPropagation()}>{isFollowing ? 'Following' : 'Follow'}</button>
      </li>
    </Link>
    
  );
};

function Followers() {

  let navigate = useNavigate();

  // Function to handle back navigation
  const goBack = () => {
    navigate(-1); // This will take you back to the previous page
   
  };

  return (
    <div className="page-container">
      <div className='following-container'>
    
      <div className='content-wrapper'>

    <button onClick={goBack} className="back-btn"><FaArrowLeft/></button>
    
          
        <div className="search-following-container">
            <input type="text" placeholder="Search Followers" />
        </div>
    
        <ul>
            {followersData.map((follower, index) => (
              <FollowerItem key={index} {...follower} />
            ))}
        </ul>
      </div>
            
      </div>
    </div>
  )
}

export default Followers
