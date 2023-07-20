
    import React from 'react';
    import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
    import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Search from '../components/Search';
    const { Header, Content, Footer, Sider } = Layout;
    const items1 = ['Profile', 'Properties', 'Messages', 'Register', 'Login'].map((key) => ({
      key,
      label: `${key}`, 
    }));
  
    export default function Home () {
      const {
        token: { colorBgContainer },
      } = theme.useToken();
      return (
        <Layout>
          <Header
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div className="demo-logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
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
              {/* <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item> */}
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
    
