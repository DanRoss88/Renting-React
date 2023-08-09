import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useCookieManagement } from "../../helpers/home/cookieManagement";
import generateMenuItems from "../../helpers/home/menuConfig";
import { Home } from "../../pages";
import ProfilePage from "../../pages/ProfilePage";
import MessagesPage from "../../pages/MessagesPage";
import PropertiesPage from "../../pages/PropertiesPage";

const Header = ({
  items,
  handleNameClick,
  handleMenuClick,
  nameItem,
  logOut,
}) => {
  const { isLoggedIn } = generateMenuItems();

  const { navigate } = useCookieManagement();

  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["8"]}
      onClick={handleMenuClick}

    >
      <Menu.Item
        style={{
          flex: "1",
          textAlign: "left",
        }}
        
      >
        <Link to="/">Home</Link>
      </Menu.Item>

      <Menu.Item
        style={{
          flex: "1",
          textAlign: "left",
        }}
        
      >
        <Link to="/profile">Profile</Link>
      </Menu.Item>

      <Menu.Item
        style={{
          flex: "1",
          textAlign: "left",
        }}
        
      >
        <Link to="/messages">Messages</Link>
      </Menu.Item>

      <Menu.Item
        style={{
          flex: "1",
          textAlign: "left",
        }}
       
      >
        <Link to="/properties">Properties</Link>
      </Menu.Item>

      <Menu.Item
        style={{
          flex: "1",
          textAlign: "left",
        }}
      >
        <Link to="/logout">Log Out</Link>
      </Menu.Item>

      {isLoggedIn ? (
        <Menu.Item
          style={{
            flex: "1",
            textAlign: "right",
          }}
          onClick={handleLogout}
          // key={nameItem.key}
        >
          Welcome <strong> </strong>
        </Menu.Item>
      ) : (
        <Menu.Item
          style={{
            flex: "1",
            textAlign: "right",
          }}
          onClick={handleNameClick}
          // key={nameItem.key}
        >
          Welcome <strong>  </strong>
        </Menu.Item>
      )}
    </Menu>
  );
};
export default Header;
