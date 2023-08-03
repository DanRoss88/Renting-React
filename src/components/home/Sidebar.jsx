import React, { useState } from "react";
import { Layout, Menu } from "antd";
import OwnersPropertySelector from "../map/PropertiesMap";
const Sidebar = ({ theme, colorBgContainer, items2 }) => {
  const [selected, setSelected] = useState(null);

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
      <OwnersPropertySelector style= {{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}  
      

       setSelected={setSelected} />
    </Layout.Sider>
  );
};

export default Sidebar;
