import React from 'react';
import { Link } from 'react'; 
import { Breadcrumb, Layout, Menu, theme } from 'antd';


const { Header, Content, Footer, Sider } = Layout;

const items1 = [
  { key: 'Profile', label: 'Profile', link: '/profile' },
  { key: 'Properties', label: 'Properties', link: '/properties' },
  { key: 'Messages', label: 'Messages', link: '/messages' },
  { key: 'Register', label: 'Register', link: '/register' },
  { key: 'Login', label: 'Login', link: '/login' },
];

export default function Home() {
  const { token: { colorBgContainer } } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1.map(item => ({
          ...item,
          label: <Link to={item.link}>{item.label}</Link> // Wrap the label with the Link component
        }))} />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            {/* Sidebar content goes here */}
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
            Listings
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Renting ©2023 Created by Fremen Web Solutions
      </Footer>
    </Layout>
  );
};

