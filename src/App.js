import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from './pages';
import  Home  from './pages/Home';

// import HomeLayout from './Layout';


export default function App() {
  return (
    <div> 
    {/* <HomeLayout> */}
    <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
       
      
    </Routes>
    
    {/* </HomeLayout> */}
     
     </div>
  );
}