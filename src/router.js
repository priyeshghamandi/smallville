import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import * as PATHS from './constants/paths';

const Login = lazy(() => import('./views/auth/index'));

const Router = () => {
    return (
        <Routes>
            <Route path={PATHS.LOGIN} element={<Login />} />     
        </Routes>
    )
}
export default Router;