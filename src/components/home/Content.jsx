import React from "react";
import { Layout } from "antd";
import Map from "../map/Map";


const Content = ({ apiKey }) => {
  return (
    <Layout.Content style={{ padding: "0 24px", minHeight: 280 }}>
      {apiKey ? <Map apiKey={apiKey} /> : <div>Loading...</div>}
    </Layout.Content>
  );
};

export default Content;