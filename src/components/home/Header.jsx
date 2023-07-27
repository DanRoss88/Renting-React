import { Menu } from "antd";
import React from "react";
import { useCookieManagement } from "../../helpers/home/cookieManagement";
import  generateMenuItems  from "../../helpers/home/menuConfig";


const Header = ({ items, handleNameClick, handleMenuClick, nameItem, logOut }) => {
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
      onClick={({ key }) => {
        const item = items.find((i) => i.key === key);
        handleMenuClick(item);
      }}
    >
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}

      {isLoggedIn ? (
        <Menu.Item
          style={{
            flex: "1",
            textAlign: "right",
          }}
          onClick={handleLogout}
          key={nameItem.key}
        >
          Welcome <strong> {nameItem.label} </strong>
        </Menu.Item>
      ) : (
        <Menu.Item
          style={{
            flex: "1",
            textAlign: "right",
          }}
          onClick={handleNameClick}
          key={nameItem.key}
        >
          Welcome <strong> {nameItem.label} </strong>
        </Menu.Item>
      )}
    </Menu>
  );
};
export default Header;