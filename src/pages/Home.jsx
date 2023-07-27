import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Breadcrumb, Layout, theme } from "antd";
import Header from "../components/home/Header";
import Sidebar from "../components/home/Sidebar";
import Content from "../components/home/Content";
import { useCookieManagement } from "../helpers/home/cookieManagement";
import { fetchApiKey } from "../helpers/home/apiKeyFetching";
import { verifyUserCookie } from "../helpers/home/userAuthentication";
import  generateMenuItems  from "../helpers/home/menuConfig";

export default function Home() {
  const [apiKey, setApiKey] = useState("");
  const [username, setUsername] = useState("");

  const {
    cookies,
    logOut,
    navigate,
    removeCookie,
  } = useCookieManagement();

  const { items1, items2, nameItem, handleMenuClick, handleNameClick, isLoggedIn } = generateMenuItems(navigate, logOut, username);

  useEffect(() => {
    const getApiKey = async () => {
      const apiKey = await fetchApiKey();
      if (apiKey) {
        setApiKey(apiKey);
      }
    };
    getApiKey();
  }, []);

  useEffect(() => {
    const verifyCookieAndSetUsername = async () => {
      const isAuthenticated = await verifyUserCookie(cookies, navigate, removeCookie);
      if (isAuthenticated) {
        setUsername(cookies.user); 
      }
    };
    verifyCookieAndSetUsername();
  }, [cookies, navigate, removeCookie]);
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();
 

  return (
    <>
      <Layout>
        <Header
          items={items1}
          username={username}
          handleMenuClick={handleMenuClick}
          handleNameClick={handleNameClick}
          nameItem={nameItem}
          isLoggedIn={isLoggedIn}
          logOut={logOut}
        />
        <Layout.Content
          style={{
            padding: "0 50px",
          }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: "24px 0", background: colorBgContainer }}>
            <Sidebar items2={items2} />
            <Content apiKey={apiKey} />
          </Layout>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: "center" }}>Renting ©2023 Created by Fremen Web Solutions</Layout.Footer>
      </Layout>
      <ToastContainer />
    </>
  );
};
