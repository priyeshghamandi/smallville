import { Layout } from 'antd';
import { DownOutlined, PoweroffOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { useAppDispatch } from '../../redux/hooks';
import { logoutAction } from '../../redux/auth/auth.slice';
import { LOGIN } from '../../constants/paths';
import { useNavigate } from 'react-router-dom';
import * as PATHS from '../../constants/paths';

const Header: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const items: MenuProps['items'] = [
        {
            label: 'Logout',
            key: 'logout',
            icon: <PoweroffOutlined />,
            onClick: () => handleLogout()
        }
        
    ];
    const { Header } = Layout;

    const handleLogout = async () => {
        await dispatch(logoutAction());
        navigate(LOGIN);
    };


    return (
        <Header
            style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}
            className="shadow-lg bg-white"
        >
            <div className=" float-left w-32 h-8 my-4 mr-6 mb-0">
                <img
                    className="mx-auto w-40"
                    //src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    src="/images/logo-v1.png"
                    alt="logo"
                />
            </div>
            <div className="float-right ">
                <Dropdown 
                    menu={{ items }} 
                    trigger={['click']}
                    placement="bottomRight" 
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <UserOutlined className='border border-gray-800 p-2 rounded-full' />
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </Header>
    );
};
export default Header;
