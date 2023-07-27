import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
import React from "react";

const generateMenuItems = (navigate, handleNameClick, logOut, username) => {
  const isLoggedIn = !!document.cookie.includes("token");
  
    

  const itemsLoggedIn = [
    { key: "Home", label: "Home", link: "/", action: "home" },
    { key: "Profile", label: "Profile", link: "/profile", action: "profile" },
    { key: "Properties", label: "Properties", link: "/properties", action: "properties" },
    { key: "Messages", label: "Messages", link: "/messages", action: "messages" },
    { key: "Logout", label: "Logout", onClick: logOut },
  ];

  const itemsLoggedOut = [
    { key: "Home", label: "Home", link: "/", action: "home" },
    { key: "Register", label: "Register", link: "/register", action: "register" },
    { key: "Login", label: "Login", link: "/login", action: "login" },
  ];

  const items1 = isLoggedIn ? itemsLoggedIn : itemsLoggedOut;

  const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);
      return {
        key: `${key}`,
        icon: React.createElement(icon),
        label: ` ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            label: `${subKey}`,
          };
        }),
      };
    }
  );

  const nameItem = [
    { key: "username", label: "Username", link: "/profile", onClick: handleNameClick },
  ];

  const handleMenuClick = (item) => {
    if (item.link) {
      navigate(item.link);
    }
    if (item.onClick) {
      item.onClick();
    }
  };

  return { items1, items2, nameItem, handleMenuClick, isLoggedIn };
};

export default generateMenuItems;