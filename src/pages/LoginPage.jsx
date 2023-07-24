import React, { useState, useEffect } from "react";
import Login from "../components/Login";
import { storeToken, getToken, removeToken } from "../helpers/tokenStorage";
import axios from "axios";
import  Home from "./Home";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginPress, setLoginPress] = useState(true);
  const [userAuth, setUserAuth] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const value = await getToken();
        if (value !== null) {
          setUserAuth(true);
        } else {
          setUserAuth(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkToken();
  }, [userAuth]);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const userNameHandler = (text) => {
    setUserName({ ...user, username: text });
  };

  const passwordHandler = (text) => {
    setPassword({ ...user, password: text });
  };

  const loginHandler = async () => {
    if (userName === "" || password === "") {
      alert("Please enter username and password");
      return;
    }
    try {
      const response = await axios("/login", {
        username: userName,
        password: password,
      });
      storeToken(response.data.accessToken);
      setUserAuth(true);
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = () => {
    removeToken();
    setUserAuth(false);
    setLoginPress(true);
  };

  const switchHandler = () => {
    setLoginPress(!loginPress);
    clearUser();
  };

  const clearUser = () => {
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <div>
      {userAuth == false && (
      <>
          {loginPress&& (
          <Login
            loginHandler={loginHandler}
            userNameHandler={userNameHandler}
            passwordHandler={passwordHandler}
            switchHandler={switchHandler}
          />)}
       </>
      )}
      {userAuth && <Home logoutHandler={logoutHandler}/> }
    </div>
  );
}
