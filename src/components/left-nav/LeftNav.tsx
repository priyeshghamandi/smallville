import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { DatabaseFilled, HomeFilled } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

const menuItems: MenuProps['items'] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <HomeFilled />,
  },
  {
    key: 'branches',
    label: 'Branches',
    icon: <DatabaseFilled />,
  }
] 


const LeftNav:React.FC = ():JSX.Element => {
    return (
        <Sider width={200}>
          <Menu            
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
            items={menuItems}
            className="font-bold"
            theme='dark'
          />
        </Sider>
    )
}
export default LeftNav;