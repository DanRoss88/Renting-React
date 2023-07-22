import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomeLayout from './Layout';


export default function App() {
  return (
    <div> 
    <HomeLayout>
    {/* <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
       
      </Switch>
    </Router> */}
    <LoginPage />
    </HomeLayout>
     
     </div>
  );
}