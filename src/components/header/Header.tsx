import { Layout } from 'antd';
import { DownOutlined, PoweroffOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { useAppDispatch } from '../../redux/hooks';
import { logoutAction } from '../../redux/auth/auth.slice';
import { LOGIN } from '../../constants/paths';
import { useNavigate } from 'react-router-dom';
import * as PATHS from '../../constants/paths';
import RegistrationURL from '../widgets/RegistrationURL';

const Header: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { Header } = Layout;

    


    return (
        <Header
            style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}
            className="shadow-lg bg-white flex"
        >
            <div className="w-32 h-8 my-4 mr-6 mb-0">
                <img
                    className="mx-auto w-40"
                    //src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    src="/images/logo-v1.png"
                    alt="logo"
                />
            </div>            
            <div className='flex w-full justify-end px-8 h-full items-center gap-4'>
                <div className='w-1/4'><RegistrationURL /></div>                
            </div>
            
        </Header>
    );
};
export default Header;
