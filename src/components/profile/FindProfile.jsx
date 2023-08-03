import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { DataF } from '@react-google-maps/api';

const FindProfile = () => {
const [query, setQuery] = useState('');
const [profile, setProfile] = useState({});


useEffect(() => {
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/profile/:${query}`, { withCredentials: true });
      setProfile(data);
    } catch (error) {
      console.log(error);
    };
};
fetchUsers();
},
[query]);



  return (
    <div className='find-profile-container'>
      <div className='find-profile__search'>
        <input type='text' placeholder='Search for a user' value={query} onChange={e => setQuery(e.target.value)} />
        </div>
        <div className='find-profile__result'>
          {data.filter((profile) => profile.username.toLowerCase().includes(query.toLowerCase()){
            if (query === '') {
              return profile;
            } else if (profile.username.toLowerCase().includes(query.toLowerCase())) {
              return profile;
            }

          }).map((profile, index) => (
            <div key={profile._id} className='profile-result'>
              <div className='search-box' key={index}>
          <h3>{profile.username}</h3>
          <p>{profile.fullName}</p>
            <div>
              {profile.profilePicture ? <img src={profile.profilePicture} alt='profile' /> : null}
            </div>
            </div>
          ));
          }
    </div>
  )
}

export default FindProfile;