import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom';

const followersData = [
    { name: 'Emily Wong', isFollowing: true },
    { name: 'Gabby asdf', isFollowing: true },
    { name: 'Kenneth qwer', isFollowing: true },
    { name: 'Robel jkla', isFollowing: false },
    { name: 'Ali Ali', isFollowing: false },
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
  return (
    
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
  )
}

export default Following
