import {DatabaseFilled, HomeFilled, SettingOutlined, UserOutlined} from '@ant-design/icons';
import * as PATHS from '../../constants/paths';
import { UserTypes } from '../../redux/auth/types';
import Dashboard from '../../views/dashboard';
import Settings from '../../views/settings';
import Students from '../../views/students';


export const allUsers = [
  UserTypes.SUPER_ADMIN,
  UserTypes.ADMIN,
  UserTypes.COACH,
  UserTypes.STUDENT,
];

export const LeftNavMenu = [
    {
        key: PATHS.DASHBOARD,
        label: 'Dashboard',
        icon: <HomeFilled />,
        component: <Dashboard />,
        allowedUsers:[ UserTypes.SUPER_ADMIN, UserTypes.ADMIN ]
      },      
      {
        key: PATHS.STUDENTS,
        label: 'Students',
        icon: <UserOutlined />,
        component: <Students />,
        allowedUsers:[ UserTypes.SUPER_ADMIN, UserTypes.ADMIN ]
      },
      {
        key: PATHS.SETTINGS,
        label: 'Settings',
        icon: <SettingOutlined />,
        component: <Settings />,
        allowedUsers: allUsers
      },
]