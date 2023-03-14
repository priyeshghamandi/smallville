import {DatabaseFilled, HomeFilled, UserOutlined} from '@ant-design/icons';
import * as PATHS from '../../constants/paths';
import { UserTypes } from '../../redux/auth/types';
import Branches from '../../views/branches';
import Dashboard from '../../views/dashboard';
import Profile from '../../views/profile';


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
        key: PATHS.BRANCHES,
        label: 'Branches',
        icon: <DatabaseFilled />,
        component: <Branches />,
        allowedUsers: allUsers
      },
      {
        key: PATHS.PROFILE,
        label: 'Profile',
        icon: <UserOutlined />,
        component: <Profile />,
        allowedUsers: allUsers
      }
]