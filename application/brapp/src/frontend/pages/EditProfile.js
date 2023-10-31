import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function EditProfile() {
  const [profileData, setProfileData] = useState({
    profilePicture: '/path/to/profile/image.jpg',
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

  // Handle form submission (you can send the updated data to your backend here)

  return (
    <div>
      {/* Back to Profile button */}
      <Link to="/profile">
        <button>Back to Profile</button>
      </Link>

      {/* Profile Picture Section */}
      <section>
        <h2>Edit Profile Picture</h2>
        <img
          src={profileData.profilePicture}
          alt="User"
          className="profile-pic"
        />
        <input
          type="text"
          name="profilePicture"
          value={profileData.profilePicture}
          onChange={handleInputChange}
        />
        {/* Add an input or button to upload/change the profile picture */}
      </section>

      {/* Username Section */}
      <section>
        <h2>Edit Username</h2>
        <input
          type="text"
          name="username"
          value={profileData.username}
          onChange={handleInputChange}
        />
      </section>

      {/* Name Section */}
      <section>
        <h2>Edit Name</h2>
        <input
          type="text"
          name="name"
          value={profileData.name}
          onChange={handleInputChange}
        />
      </section>

      {/* Bio Section */}
      <section>
        <h2>Edit Bio</h2>
        <textarea
          name="bio"
          value={profileData.bio}
          onChange={handleInputChange}
        />
      </section>

      {/* Save Changes Button */}
      <button type="submit">Save Changes</button>
    </div>
  );
}

export default EditProfile;
