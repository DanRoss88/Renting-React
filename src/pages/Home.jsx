import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post("/", {}, { withCredentials: true });
      const { status, username } = data;
      setUsername(username);
      return (
        status
          ? toast(`Welcome ${username}`, {
              position: "top-right",
            })
          : removeCookie("token"),
        navigate("/login")
      );
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const logOut = async () => {
    removeCookie("token");
    navigate("/login");
  };
  return (
    <>
      <div className="home_page">
        <h1>HOME PAGE</h1>
        <h4>
          {" "}
          Welcome <span> {username} </span>
        </h4>
        <button onClick={logOut}>Log Out</button>
      </div>
      <ToastContainer />
    </>
  );
}
