import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { DatabaseFilled, HomeFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import * as PATHS from '../../constants/paths';


const LeftNav:React.FC = ():JSX.Element => {
    const { Sider } = Layout;
    const navigate = useNavigate();

    const menuItems: MenuProps['items'] = [
        {
          key: 'dashboard',
          label: 'Dashboard',
          icon: <HomeFilled />,
          onClick: () => navigate(PATHS.DASHBOARD),
        },
        {
          key: 'branches',
          label: 'Branches',
          icon: <DatabaseFilled />,
          onClick: () => navigate(PATHS.BRANCHES),
        }
      ] 

    return (
        <Sider width={200} style={{position: 'fixed'}} className="h-screen fixed">
            <Menu            
                defaultSelectedKeys={['1']}
                style={{ height: '100%', borderRight: 0 }}
                items={menuItems}
                className="font-bold"
                theme='light'
            />
        </Sider>
    )
}
export default LeftNav;