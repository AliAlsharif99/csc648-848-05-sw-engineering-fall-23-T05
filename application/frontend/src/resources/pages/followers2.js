
import Navbar from '../Navbar'
import { FaNewspaper, FaUser, FaCheckCircle, FaBookmark, FaHeart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import user2 from "../images/user2.jpg";
import {FaArrowLeft } from 'react-icons/fa';


function Followers2() {

  const [profilePic, setProfilePic] = useState('');

  const [isFollowing, setIsFollowing] = useState(false);

  // Toggle function to change follow state
  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  let navigate = useNavigate();

  // Function to handle back navigation
  const goBack = () => {
    navigate(-1); 
   
  };

  return (
    <div className="Profile-container">

<button onClick={goBack} className="back-btn"><FaArrowLeft/></button>
      
    <div className='header'>
      <h1>Suguru Geto</h1>
      
      {/* {profilePic ? (
      <img src={profilePic} alt="User" className="profile-pic"/>
      ) : (
        <div className="profile-pic-placeholder2">
            <span>User</span>
        </div>
      )} */}

      <img src={user2} className='profile-pic-main' alt="User"></img>

      <p>@GEToo</p>

        <button className='follow-btn' onClick={toggleFollow}>{isFollowing ? 'Following' : 'Follow'}</button>
      
    </div>

    <div className="follow-info">
        
        <Link to="/followers" className='remove-underline'>
        <div className='followers'>
          <strong>10.2k</strong>
          <p>Followers</p>
        </div>
        </Link>
        
        <Link to="/following" className='remove-underline'>
        <div className='following'>
          <strong>1</strong>
          <p>Following</p>
        </div>
        </Link>
        
        <Link to="/leaderboard" className='remove-underline'>
        <div className='rank'>
          <strong>#5</strong>
          <p>Biterate Rank</p>
        </div>
        </Link>
    </div>
    

    <div className="activities-restaurants-section">
        <div className="recent-activity">
            <h2> <FaNewspaper /> Recent Activity</h2>
            
            <Link to="/restaurant" className="remove-underline">
              <RecentActivityCard
              userImage="url_to_user_image.jpg"
              place="Fuki Ramen"
              location="Japantown, San Francisco, CA"
              comment="The ramen here was ramening. Very yum!"
              score="9.5"/>
            </Link>

            <Link to="/restaurant" className="remove-underline">
              <RecentActivityCard
              userImage="url_to_user_image.jpg"
              place="McDonald's"
              location="Stonestown, San Francisco, CA"
              comment="Everything was mid. . . but the McFlurry mhmmm"
              score="6.7"/>
            </Link> 
        
        </div>

        <div className="restaurants">
            <h2>  <FaUser/> Restaurants</h2>
                <Link to="/lists" className='remove-underline'>
                  <div className='been'><h3>  <FaCheckCircle/> Been</h3></div>
                </Link>
            <hr></hr>
                <Link to="/lists" className='remove-underline'>
                  <div className='want'><h3> <FaBookmark/> Want to try</h3></div>
                </Link>
            <hr></hr>
                <Link to="/lists" className='remove-underline'>
                  <div className='recs'><h3> <FaHeart/> Recs for You</h3></div>
                </Link>
             
        </div>
    </div>
             
  </div>
)
}

function RecentActivityCard({ activity, userImage, place, location, comment, score }) {
  return (
    <div className="activity-card">
      <div className="activity-header">
        <img src={user2} alt="User" className="user-profile-pic" />
        <div className="activity-info">
          <p className="activity-place">{place}</p>
          <p className="activity-location">{location}</p>
        </div>
      </div>
      <div className="activity-score">{score}</div>
      <div className="activity-comment">
        <p> <strong>Note: </strong>{comment}</p>
      </div>
    </div>
  );
}

export default Followers2