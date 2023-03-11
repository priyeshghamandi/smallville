import React, { Fragment, useEffect } from 'react';
import { Layout } from 'antd';
import Header from '../components/header';
import LeftNav from '../components/left-nav';
import { Navigate } from 'react-router-dom';
import { LOGIN } from '../constants/paths';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';

const { Content } = Layout;

const PrivateRoute:React.FC<{ allowedUsers: string[]; component: React.FC }> = ({
    allowedUsers = [],
    component: C,
}):JSX.Element => {
    const session = useAppSelector((state: RootState) => state.session);    
    // const [isSessionValid, setIsSessionValid] = React.useState(false);

    // useEffect(() => {
    //     if(session.isSessionValid === true) {
    //         setIsSessionValid(true);
    //     }
    // }, [session.isSessionValid]);

    
    return session.isSessionValid === true ? (
        <Layout>
            <Header />
            <Layout className='h-screen'>
                <LeftNav />
                <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                    className="mt-2 ml-48 p-6"
                    style={{
                        minHeight: 280,                    
                    }}
                >
                    <C />
                </Content>
                </Layout>
            </Layout>
        </Layout>
    ) : session.isSessionValid === false ?  (
            <Navigate to={LOGIN} />
    ) : null;
}
export default PrivateRoute;


