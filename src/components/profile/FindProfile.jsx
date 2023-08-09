import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FindProfile = () => {
  const [query, setQuery] = useState('');
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/profile/${query}`, { withCredentials: true });
        if (Array.isArray(data)) {
        setProfile(data);
      } else {
        console.log('Error fetching users');
      }
    }
      catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [query]);

  return (
    <div className='find-profile-container'>
      <div className='find-profile__search'>
        <input type='text' placeholder='Search for a user' value={query} onChange={e => setQuery(e.target.value)} />
      </div>
      <div className='find-profile__result'>
        {profile
          .filter(profile =>
            query === '' || profile.username.toLowerCase().includes(query.toLowerCase())
          )
          .map((profile) => (
            <div key={profile._id} className='profile-result'>
              <div className='search-box'>
                <h3>{profile.username}</h3>
                <p>{profile.fullName}</p>
                <div>
                  {profile.profilePicture ? <img src={profile.profilePicture} alt='profile' /> : null}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FindProfile;