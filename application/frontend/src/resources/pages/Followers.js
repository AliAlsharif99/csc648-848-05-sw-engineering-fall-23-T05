import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom';

const followersData = [
    { name: 'Elon Musk', isFollowing: false },
    { name: 'Tommy Cat', isFollowing: false },
    { name: 'Kruomi Kur', isFollowing: false },
    { name: 'Jack Frost', isFollowing: false },
    { name: 'Santa L', isFollowing: false },
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

function Followers() {
  return (
    <div className="page-container">
      <div className='following-container'>
    
      <div className='content-wrapper'>
    
          
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
