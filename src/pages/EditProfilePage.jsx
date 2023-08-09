import React from 'react'
import EditProfile from '../components/profile/EditProfile'
import Header from '../components/home/Header'
import { useState } from 'react';
import Agreement from '../components/Agreement';
import { Modal } from 'antd';


const EditProfilePage = () => {

  return (
    <div>
      <Header></Header>
      <EditProfile></EditProfile>
    
    </div>
  )
}

export default EditProfilePage;