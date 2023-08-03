import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DisplayProfile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { username } = useParams();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/profile/${username}`, { withCredentials: true });
        setProfile(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getProfile();
  }, [username]);

  const renderProfile = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h1>Profile</h1>
        <div>
          <p>Full Name: {profile.fullName}</p>
          <p>User Type: {profile.userType}</p>
          {/* Render other profile information here */}
        </div>
      </div>
    );
  };

  return <div>{renderProfile()}</div>;
};

export default DisplayProfile;