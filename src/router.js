import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import * as PATHS from './constants/paths';
import PrivateRoute from './HOC/PrivateRoute';
import LoggedOutRoute from './HOC/LoggedOutRoute';
import { UserTypes } from './redux/auth/types';

const Login = lazy(() => import('./views/auth/index'));
const Dashboard = lazy(() => import('./views/dashboard/index'));
const Branches = lazy(() => import('./views/branches/index'));
const Registration = lazy(() => import('./views/registration/index'));
const Profile = lazy(() => import('./views/profile/index'));

export const allUsers = [
    UserTypes.SUPER_ADMIN,
    UserTypes.ADMIN,
    UserTypes.COACH,
    UserTypes.STUDENT,
];

const Router = () => {
    return (
        <Routes>
            <Route path={PATHS.LOGIN} element={<LoggedOutRoute allowedUsers={allUsers} component={Login} />} />     
            <Route path={PATHS.DASHBOARD} element={<PrivateRoute allowedUsers={[ UserTypes.SUPER_ADMIN, UserTypes.ADMIN ]} component={Dashboard} path={PATHS.DASHBOARD}/>} />
            <Route path={PATHS.BRANCHES} element={<PrivateRoute allowedUsers={allUsers} component={Branches} path={PATHS.BRANCHES}/>} />
            <Route path={PATHS.PROFILE} element={<PrivateRoute allowedUsers={allUsers} component={Profile} path={PATHS.PROFILE}/>} />
            <Route path={PATHS.REGISTER} element={<LoggedOutRoute allowedUsers={allUsers} component={Registration} />} />
        </Routes>
    )
}
export default Router;