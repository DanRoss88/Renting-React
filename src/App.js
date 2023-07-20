import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
   
    {/* <Home /> */}
    <Login />
     <Register /> 
    </div>
  );
}

export default App;
