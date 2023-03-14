import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './styles.css';

import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {AuthData, logoutAction} from '../../redux/auth/auth.slice';
import {User} from '../../redux/auth/types';
import { LeftNavMenu } from './left-nav-menu';
import { setNavigation } from '../../redux/navigation/navigation.slice';
import { PoweroffOutlined } from '@ant-design/icons';
import {LOGIN} from '../../constants/paths';


const LeftNav:React.FC<{ path: string}> = ({path}):JSX.Element => {
    const currentUser:User = useAppSelector(AuthData);
    const { Sider } = Layout;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const menuItems: MenuProps['items'] = [];
    
    LeftNavMenu.forEach((item) => {
        if(item.allowedUsers.indexOf(`${currentUser?.type}`) >= 0){
            menuItems.push(
                {
                    key: item.key,
                    label: item.label,
                    icon: item.icon,
                    onClick: () => {
                        navigate(item.key);
                        // dispatch(setNavigation({
                        //     key: item.key,
                        //     path: item.key,
                        //     component: item.component,
                        // }))
                    }
                }
            )
        }
    })

    const selectedMenu = menuItems.filter((item) => item.key === path)
    const selectedKey = selectedMenu.length > 0 ? selectedMenu[0]?.key : menuItems[0]?.key;

    const handleLogout = async () => {
        await dispatch(logoutAction());
        navigate(LOGIN);
    };
    

    return (
        <Sider width={200} style={{position: 'fixed'}} className="h-screen fixed">
            <Menu            
                defaultSelectedKeys={[selectedKey?.toString() || path]}
                style={{ height: '100%', borderRight: 0 }}
                items={menuItems}
                className="font-bold"
                theme='light'           
            />
            <div className='w-full h-32 border-t py-4 px-2 absolute bottom-0'>
                <button onClick={handleLogout} className='flex w-full items-center gap-3 px-4 py-2 rounded-md hover:bg-blue-second hover:text-blue-primary'>
                    <PoweroffOutlined />
                    <span>Log out</span>
                </button>
                
            </div>
        </Sider>
    )
}
export default LeftNav;