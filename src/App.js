import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "./pages";
import Home from "./pages/Home";
import MessagesPage from "./pages/MessagesPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
// import HomeLayout from './Layout';

export default function App() {
  return (
    <div>
      {/* <HomeLayout> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
      </Routes>

      {/* </HomeLayout> */}
    </div>
  );
}
