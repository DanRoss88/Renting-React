// import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
// import React from "react";
import Home from "../../pages/Home";
import MessagePage from "../../pages/MessagesPage";
import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";
import ProfilePage from "../../pages/ProfilePage";

const generateMenuItems = (navigate, handleNameClick, logOut, username) => {
  const isLoggedIn = !!document.cookie.includes("token");
  
    

  const itemsLoggedIn = [
    { key: "Home", label: "Home", link: "/", component:{Home}},
    { key: "Profile", label: "Profile", link: "/profile", component:{ProfilePage} },
    { key: "Properties", label: "Properties", link: "/properties", component:{Home} },
    { key: "Messages", label: "Messages", link: "/messages", component:{MessagePage} },
    { key: "Logout", label: "Logout", value:{logOut}, onClick:{logOut} },
  ];

  const itemsLoggedOut = [
    { key: "Home", label: "Home", link: "/", component:{Home} },
    { key: "Register", label: "Register", link: "/register", component:{RegisterPage} },
    { key: "Login", label: "Login", link: "/login", component:{LoginPage} },
  ];

  const items1 = isLoggedIn ? itemsLoggedIn : itemsLoggedOut;

  // const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  //   (icon, index) => {
  //     const key = String(index + 1);
  //     return {
  //       key: `${key}`,
  //       icon: React.createElement(icon),
  //       label: ` ${key}`,
  //       children: new Array(4).fill(null).map((_, j) => {
  //         const subKey = index * 4 + j + 1;
  //         return {
  //           key: subKey,
  //           label: `${subKey}`,
  //         };
  //       }),
  //     };
  //   }
  // );

  const nameItem = [
    { key: "username", value:{username} ,label: "Username", link: "/profile", onClick: handleNameClick },
  ];

  const handleMenuClick = (item) => {
    if (item.link) {
      navigate(item.link);
    }
    if (item.onClick) {
      item.onClick();
    }
  };

  return { items1, nameItem, handleMenuClick, isLoggedIn };
};

export default generateMenuItems;