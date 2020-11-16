import React from 'react';
import './App.css';
import Nav from './Nav';
import { Layout,  Form ,Input ,Button } from 'antd';

function App() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 80 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  return (
    <>
   <Layout className="layout" style={{minHeight:"100vh"}}>
    <Layout.Header className="topbar">
      <h1 className="title">Plagarism detector</h1>
    </Layout.Header>
    <Layout.Content>
      <div  className='form'>
      <Form {...layout}>
      <Form.Item label="Email">
        <Input />
      </Form.Item>
      <Form.Item label="Password">
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" className="login-button">
          Submit
        </Button>
      </Form.Item>
      </Form>
      </div>
    </Layout.Content>

    </Layout>
  {/** 
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
 
      **/} 
  </>
  );
}

export default App;
