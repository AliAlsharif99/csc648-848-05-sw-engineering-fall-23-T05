
import Navbar from '../Navbar'
import { FaNewspaper, FaUser, FaCheckCircle, FaBookmark, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


function Profile() {

  const [profilePic, setProfilePic] = useState('');

  return (
    <div className="Profile-container">
      
    <div className='header'>
      <h1>user's name</h1>
      
      {profilePic ? (
      <img src={profilePic} alt="User" className="profile-pic"/>
      ) : (
        <div className="profile-pic-placeholder2">
            <span>User</span>
        </div>
      )}

      <p>@username</p>
      <Link to="/edit-profile">
        <button className='edit-button'>Edit Profile</button>
      </Link>
    </div>

    <div className="follow-info">
        <div className='followers'>
          <strong>10.2k</strong>
          <Link to="/followers"><p>Followers</p></Link>
        </div>
        <div className='following'>
          <strong>1</strong>
          <Link to="/following"><p>Following</p></Link>
        </div>
        <div className='rank'>
          <strong>#19</strong>
          <p>Biterate Rank</p>
        </div>
    </div>
    

    <div className="activities-restaurants-section">
        <div className="recent-activity">
            <h2> <FaNewspaper /> Recent Activity</h2>
            <RecentActivityCard activity="Reviewed McDonald's" />
            <RecentActivityCard activity="Visited Taco Bell" />
            <RecentActivityCard activity="Commented on Pizza Hut" />
        </div>

        <div className="restaurants">
            <h2>  <FaUser/> Restaurants</h2>
              <Link to={{ pathname: "/lists", state: { activeTab: 'been' } }}>
                <div className='been'><h3>  <FaCheckCircle/> Been</h3></div>
              </Link>
            <hr></hr>
              <Link to={{ pathname: "/lists", state: { activeTab: 'wantToTry' } }}>
                <div className='want'><h3> <FaBookmark/> Want to try</h3></div>
              </Link>
            <hr></hr>
              <Link to={{ pathname: "/lists", state: { activeTab: 'recs' } }}>
                <div className='recs'><h3> <FaHeart/> Recs for You</h3></div>
              </Link>
        </div>
    </div>
             
  </div>
)
}

function RecentActivityCard({ activity }) {
return (
  <div className="activity-card">
    <p>{activity}</p>
  </div>
  )
}

export default Profile