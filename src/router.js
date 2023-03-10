import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import * as PATHS from './constants/paths';
import PrivateRoute from './HOC/PrivateRoute';

const Login = lazy(() => import('./views/auth/index'));
const Dashboard = lazy(() => import('./views/dashboard/index'));
const Branches = lazy(() => import('./views/branches/index'));

const Router = () => {
    return (
        <Routes>
            <Route path={PATHS.LOGIN} element={<Login />} />     
            <Route path={PATHS.DASHBOARD} element={<PrivateRoute allowedUsers={[]} component={Dashboard} />} />
            <Route path={PATHS.BRANCHES} element={<PrivateRoute allowedUsers={[]} component={Branches} />} />
        </Routes>
    )
}
export default Router;