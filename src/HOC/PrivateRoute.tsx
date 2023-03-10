import React, { Fragment } from 'react';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Header from '../components/header';
import LeftNav from '../components/left-nav';

const { Content, Sider } = Layout;

const PrivateRoute:React.FC<{ allowedUsers: string[]; component: React.FC }> = ({
    allowedUsers = [],
    component: C,
}):JSX.Element => {
    return (
        <Layout>
            <Header />
            <Layout className='h-screen'>
                <LeftNav />
                <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                    style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,                    
                    }}
                >
                    <C />
                </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}
export default PrivateRoute;


