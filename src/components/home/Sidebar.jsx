import React from "react";
import { Layout, Menu } from "antd";

const Sidebar = ({ theme, colorBgContainer, items2 }) => {
  return (
    <Layout.Sider
      theme="dark"
      width={200}
      style={{ background: colorBgContainer }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%" }}
        items={items2}
      />
    </Layout.Sider>
  );
};

export default Sidebar;
