import React from 'react'
import { Link } from 'react-router-dom'

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
const CostomLayout = (props) => {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="post">Post</Menu.Item>
                    <Menu.Item key="login">Login</Menu.Item>

                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to='/'>List</Link></Breadcrumb.Item>

                </Breadcrumb>
                <div className="site-layout-content">
                    {props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}
export default CostomLayout
