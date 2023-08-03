import React from 'react'
import Header from '../components/home/Header'
import DisplayProfile from '../components/profile/DisplayProfile'
import EditProfile from '../components/profile/EditProfile'
import FindProfile from '../components/profile/FindProfile'

const ProfilePage = () => {
  

  return (
    <div className='profile-container'>
    <div>ProfilePage</div>
    <Header />
    <DisplayProfile />
    <EditProfile />
    <FindProfile />
    </div>
  )
}

export default ProfilePage