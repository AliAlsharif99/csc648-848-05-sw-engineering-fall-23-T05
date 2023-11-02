import React from 'react'
import Navbar from '../Navbar'
import { Link, useNavigate } from 'react-router-dom';
import {FaArrowLeft } from 'react-icons/fa';

const followersData = [
    { name: 'Emily Wong', isFollowing: true },
    { name: 'Gabby asdf', isFollowing: true },
    { name: 'Kenneth qwer', isFollowing: true },
    { name: 'Robel jkla', isFollowing: true },
    { name: 'Ali Ali', isFollowing: true },
  ];

const FollowerItem = ({ name, isFollowing }) => {
  return (
    <li className="follower-item">
        <div className="following-picture"></div> 
      <span>{name}</span>
      <button>{isFollowing} {isFollowing ? 'Following' : 'Follow'}</button>
    </li>
  );
};

function Following() {

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

export default Following
