import { Layout } from 'antd';

const Header:React.FC = ():JSX.Element => {
    const { Header} = Layout;
    return (
        <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }} className="shadow-lg">
            <div className=" float-left w-32 h-8 my-4 mr-6 mb-0">
                <img
                    className="mx-auto w-40"
                    //src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    src='/images/logo-v1.png'
                    alt="logo"
                />                
            </div>
            
        </Header>
    )
}
export default Header;