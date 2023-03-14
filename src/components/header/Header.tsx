import { Layout } from 'antd';
import { useAppDispatch } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
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
            <div className="w-32 h-8 my-4">
                <img
                    className="mx-auto w-40"
                    //src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    src="/images/logo-v1.png"
                    alt="logo"
                />
            </div>            
            <div className='flex w-full justify-end h-full items-center'>
                <div className='w-1/4'><RegistrationURL /></div>                
            </div>
            
        </Header>
    );
};
export default Header;
