import React, { Fragment, useEffect } from 'react';
import { Layout } from 'antd';
import Header from '../components/header';
import LeftNav from '../components/left-nav';
import { Navigate } from 'react-router-dom';
import { LOGIN } from '../constants/paths';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import {AuthData} from '../redux/auth/auth.slice';
import {User} from '../redux/auth/types';

const { Content } = Layout;

const PrivateRoute:React.FC<{ allowedUsers: string[]; component: React.FC; path: string }> = ({
    allowedUsers = [],
    component: C,
    path
}):JSX.Element => {
    const session = useAppSelector((state: RootState) => state.session); 
    const currentUser:User = useAppSelector(AuthData);   

    return currentUser && session.isSessionValid === true ? (
        <Layout>
            <Header />
            <Layout className='h-screen'>
                <LeftNav path={path}/>
                <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                    className="mt-2 ml-48 p-6"
                    style={{
                        minHeight: 280,                    
                    }}
                >
                    {
                        allowedUsers.indexOf(`${currentUser?.type}`) >= 0 ? <C /> : <>Restricted Content</>
                    }
                    
                </Content>
                </Layout>
            </Layout>
        </Layout>
    ) : session.isSessionValid === false ?  (
            <Navigate to={LOGIN} />
    ) : null;
}
export default PrivateRoute;


