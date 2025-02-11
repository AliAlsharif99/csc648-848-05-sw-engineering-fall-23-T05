import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {FaArrowLeft } from 'react-icons/fa';

function EditProfile() {

  let navigate = useNavigate();

  // Function to handle back navigation
  const goBack = () => {
    navigate(-1);
   
  };

  const [profileData, setProfileData] = useState({
    profilePicture: '',
    username: 'username',
    name: 'User Name',
    bio: 'Your bio goes here',
  });

  // Handle form input changes and update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleProfilePictureChange = (e) => {
    if (e.target.files.length > 0) {
      const newProfilePictureURL = URL.createObjectURL(e.target.files[0]);
      setProfileData({
        ...profileData,
        profilePicture: newProfilePictureURL,
      });
    }
  };

  return (
   
<div className='edit-profile-container'>

  <button onClick={goBack} className="back-btn"><FaArrowLeft/></button>
  
    <div className='edit-title'>
        <h1>Edit Profile</h1>
         
    </div>

    <div>
      
      <div className='editpp-container'>
        {/* Profile Picture Section */}
        <section>
          <input 
            id="profilePictureInput"
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            style={{ display: 'none' }}
          />

          {profileData.profilePicture ? (
          <label htmlFor="profilePictureInput">
            <img
              src={profileData.profilePicture}
              alt="Profile"
              className="profile-pic"
              style={{ cursor: 'pointer' }}
            />
          </label>

            ) : (
                <label htmlFor="profilePictureInput" className="profile-pic-placeholder">
                    <div className="profile-pic-placeholder-content">Add Photo</div>
                </label>
                )}
          
    
          <div className='editpp-input'>
            <button
            onClick={() => document.getElementById('profilePictureInput').click()}
            className="editpp2-input">
            Edit profile photo
            </button>
            </div>
            </section>
            </div>

      {/* Username Section */}
      <section>
        <h2>Username</h2>
        <input
          type="text"
          name="username"
          value={profileData.username}
          onChange={handleInputChange}
          className="edit-input"
        />
      </section>

      {/* Name Section */}
      <section>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          value={profileData.name}
          onChange={handleInputChange}
          className="edit-input"
        />
      </section>

      {/* Bio Section */}
      <section>
        <h2>Bio</h2>
        <textarea
          name="bio"
          value={profileData.bio}
          onChange={handleInputChange}
          className="edit-input"
        />
      </section>

      {/* Save Changes Button */}
      
      <div className='submit-btn-container'>
        <Link to="/profile"><button className='submit-btn' type="submit">Done</button></Link>
      </div>

    </div>
</div>
  );
}

export default EditProfile;
