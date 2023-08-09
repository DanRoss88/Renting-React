import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DisplayProfile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/profile/${id}`, { withCredentials: true });
        setProfile(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getProfile();
  }, [id]);

  const renderProfile = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h1>{profile.username}</h1>
        <div>
          {profile.profilePicture ? <img src={profile.profilePicture} alt='profile' /> : null}
        </div>
        <div>
          <p>Full Name: {profile.fullName}</p>
          <p>User Type: {profile.userType}</p>
          <p>Bio: {profile.bio}</p>
          <p>Location: {profile.location}</p>
          <p>Phone: {profile.phone}</p>
          <p>Website: {profile.website}</p>
          <p>Verified: {profile.verified}</p>
          <p>Agreement: {profile.agreement}</p>
        </div>
      </div>
    );
  };

  return <div>{renderProfile()}</div>;
};

export default DisplayProfile;