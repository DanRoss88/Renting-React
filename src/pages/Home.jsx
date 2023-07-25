import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme} from "antd";
import Map from "../components/Map";



const { Header, Content, Footer, Sider } = Layout;




export default function Home() {
  
 

    const logOut = async () => {
    removeCookie("token");
    navigate("/register");
  };
    
 
  const items1 = [
    { key: "Profile", label: "Profile", link: "/profile", action: "profile" },
    { key: "Properties", label: "Properties", link: "/properties", action: "properties" },
    { key: "Messages", label: "Messages", link: "/messages", action: "messages" },
    { key: "Register", label: "Register", link: "/register", action: "register" },
    { key: "Login", label: "Login", link: "/login", action: "login" },
    {key: "Home", label: "Home", link: "/", action: "home"},
    {key: "Logout", label: "Logout", onClick: logOut}
  ];
  
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

  const handleMenuClick = (item) => {
    if (item.link) {
      navigate(item.link);
    }
    if (item.onClick) {
      item.onClick();
    }
  };

  const handleNameClick = (Nameitem) => {
    if (Nameitem.link) {
      navigate(Nameitem.link);
    }
    if (Nameitem.onClick) {
      Nameitem.onClick();
    }
  };


  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:8000",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return (
        status
          ? toast(`Welcome ${user}`, {
              position: "top-right",
            })
          : removeCookie("token"),
        navigate("/")
      );
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const nameItem = [
    { key: "username", label: username , link: "/profile", onClick: handleNameClick }
  ];

  
  return (
    <>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          
          <Menu
            theme="dark"
            mode= "horizontal"
            defaultSelectedKeys={["8"]}
            onClick={({ key }) => {
              const item = items1.find((i) => i.key === key);
              handleMenuClick(item);
            }}
          >
            {items1.map((item) => (
              <Menu.Item key={item.key}>{item.label}</Menu.Item>
            ))}


            <Menu.Item
            style={
              {
                flex: "1",
                textAlign: "right",
              }
            }
            onClick={handleNameClick}
            key={nameItem.key}
            >Welcome <strong> {username} </strong></Menu.Item>
          </Menu>
            
          
        </Header>
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            {/* <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item> */}
          </Breadcrumb>
          <Layout
            style={{
              padding: "24px 0",
              background: colorBgContainer,
            }}
          >
              
              <Sider
                theme="dark"
                width={200}
                style={{
                  background: colorBgContainer,
                }}
              >
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{
                    height: "100%",
                  }}
                  items={items2}
                />
              </Sider>
           
            <Content
              style={{
                padding: "0 24px",
                minHeight: 280,
              }}
            >
              <>
              <Map />                               
</>
            </Content>
          </Layout>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Renting ©2023 Created by Fremen Web Solutions
        </Footer>
      </Layout>
      <ToastContainer />
    </>
  );
}
