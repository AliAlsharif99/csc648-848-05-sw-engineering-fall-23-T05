import React from 'react'
import Navbar from '../Navbar'
import { FaNewspaper, FaUser, FaCheckCircle, FaBookmark, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Profile() {
  return (
    <div className="Profile-container">
      
    <div className='header'>
      <h1>user's name</h1>
      <img src="/path/to/profile/image.jpg" alt="User" className="profile-pic"/>
      <p>@username</p>
      <Link to="/edit-profile">
        <button className='edit-button'>Edit Profile</button>
      </Link>
    </div>

    <div className="follow-info">
        <div className='followers'>
          <strong>10.2k</strong>
          <p>Followers</p>
        </div>
        <div className='following'>
          <strong>1</strong>
          <p>Following</p>
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
            <h3>  <FaCheckCircle/> Been</h3>
            <hr></hr>
            <h3> <FaBookmark/> Want to try</h3>
            <hr></hr>
            <h3> <FaHeart/> Recs for You</h3>
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