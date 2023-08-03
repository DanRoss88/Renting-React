import axios from 'axios';
import React, {useState} from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProfile = () => {
const navigate = useNavigate();
const [input, setInput] = useState({
  fullName: '',
  userType: '',
  profilePicture: '',
  bio: '',
  location: '',
  phone: '',
  website: '',
  verified: false,
  verifiedDoc: '',
  agreement: false,
})

const { fullName, userType, profilePicture, bio, location, phone, website, verified, verifiedDoc, agreement } = input;

const handleOnChange = (e) => {
  const { name, value, type, checked } = e.target;
  const inputValue = type === 'checkbox' ? checked : value;

  setInput({
    ...input,
    [name]: inputValue,
  });
};

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });


  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      const { data } = await axios.post(
        "http://localhost:8000/edit-profile",
        {
          ...input,
        },
        { withCredentials: true }
      );
      const { success, message, userId } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate(`/profile/${userId}`);
        }, 1000);
      }else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInput({
      ...input,
      fullName: '',
      userType: '',
      profilePicture: '',
      bio: '',
      location: '',
      phone: '',
      website: '',
      verified: false,
      verifiedDoc: '',
      agreement: false,
    });
  };



  return (
    <div className='edit-profile-container'>
      <h1>Edit Profile</h1>
      <form className='edit-profile-form' onSubmit={handleOnSubmit}>
        <label htmlFor='full-name'>Full Name</label>
        <input type='text' id='full-name' name='full-name' value={fullName} onChange={handleOnChange} />
        <label htmlFor='user-type'>User-type</label>
        <input type="checkbox" id='owner' name='owner' value={userType}  onChange={handleOnChange}/>
        <input type="checkbox" name="renter" id="renter" value={userType} onChange={handleOnChange}/>
        <label htmlFor='profile-picture'>Profile Picture</label>
        <input type='file' id='profile-picture' name='profile-picture' value={profilePicture} onChange={handleOnChange} />
        <label htmlFor='bio'>Bio</label>
        <input type='text' id='bio' name='bio' value={bio} onChange={handleOnChange}/>
        <label htmlFor='location'>Location</label>
        <input type='text' id='location' name='location' value={location} onChange={handleOnChange} />
        <label htmlFor='phone'>Phone</label>
        <input type='text' id='phone' name='phone' value={phone} onChange={handleOnChange}/>
        <label htmlFor='website'>Website</label>
        <input type='text' id='website' name='website' value={website} onChange={handleOnChange}/>
        <label htmlFor='verified'>Verified</label>
        <input type='checkbox' id='verified' name='verified' value={verified} onChange={handleOnChange}/>
        <label htmlFor='verified-doc'>ID</label>
        <input type='file' id='verified-doc' name='verified-doc' value={verifiedDoc} onChange={handleOnChange}/>
        <label htmlFor='agreement'>Agreement</label>
        <input type='checkbox' id='agreement' name='agreement' value={agreement} onChange={handleOnChange}/>
        <button type='submit'>Submit</button>
      </form>
      <div>
        <Link to={`/profile/${userId}`}>Back to Profile</Link>
      </div>
    </div>
  )
}

export default EditProfile;