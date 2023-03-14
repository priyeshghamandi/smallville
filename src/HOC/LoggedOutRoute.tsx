import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { SETTINGS, DASHBOARD } from '../constants/paths';
import { AuthData } from '../redux/auth/auth.slice';
import { sessionData } from '../redux/session/session.slice';
import {useAppSelector} from '../redux/hooks';
import { UserTypes } from '../redux/auth/types';

const LoggedOutRoute: React.FC<{ allowedUsers: string[]; component: React.FC }> = ({
    //children,
    allowedUsers = [],
    component: C,
}) => {   
    const loggedInUser = useAppSelector(AuthData);
    const session = useAppSelector(sessionData);
    window.scrollTo(0, 0);

    return session.isSessionValid === false ? (
        <div className="flex h-auto justify-center items-center">
            <div>
                <C />
            </div>
        </div>
    ) : session.isSessionValid === true ? (
        
            (loggedInUser?.type === UserTypes.ADMIN || loggedInUser?.type === UserTypes.SUPER_ADMIN) 
            ? <Navigate to={DASHBOARD} /> 
            : <Navigate to={SETTINGS} />         
    ) : null;
};

export default LoggedOutRoute;
