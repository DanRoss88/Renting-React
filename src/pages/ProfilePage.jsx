import React from "react";
import Header from "../components/home/Header";
import DisplayProfile from "../components/profile/DisplayProfile";
import EditProfile from "../components/profile/EditProfile";
import FindProfile from "../components/profile/FindProfile";

import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <Header />
      <FindProfile />
      <DisplayProfile />
      <button>
        <Link to="/edit-profile">Edit Profile</Link>
      </button>
    </div>
  );
};

export default ProfilePage;
