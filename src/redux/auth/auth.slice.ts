import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { auth, signin, signup } from '../../services/auth.service';
import { deleteSession, setSession } from '../session/session.slice';
import { AppDispatch, RootState } from '../store';
import { AuthState, Branch, LoginCredentials, NewUser, Org, User } from './types';

const initialState: AuthState = {
    user: {
        id: '',
        email: '',
        name: '',
        type: '',
        org: {} as Org,
        avatar: '',
        gender: 1,
        phone: '',
        status: '',
        branch: {} as Branch,
        verified: false,
        date: ''        
    },
    //token: '',
};

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        authUser(state, action: PayloadAction<User>) {         
            state.user = action.payload;
        },
        updateAccessToken(state, action: PayloadAction<string | undefined>) {
            if (action.payload) {
                localStorage.setItem('token', action.payload);
                state.token = action.payload;
            }
        },
        login(state, action: PayloadAction<string | undefined>) {
            if (action.payload) {
                localStorage.setItem('token', action.payload ? action.payload : '');
                state.token = action.payload;
            }
        },
    },
});

export const signupUser = (user: NewUser) => async (dispatch: AppDispatch) => {
    const response = await signup(user);
    localStorage.setItem('token', response?.token || '');
    if (response.ok) {
        auth()
            .then((user) => {
                localStorage.setItem('token', response?.token || '');
                dispatch(authSlice.actions.authUser(user));
                dispatch(setSession());
            })
            .catch(console.error);
        dispatch(authSlice.actions.updateAccessToken(response?.token));
        dispatch(setSession());
    } else {
        //message.error(response.errors);
    }
};

export const login = (loginCred: LoginCredentials) => async (dispatch: AppDispatch) => {
    try {
        const response = await signin(loginCred);        
        localStorage.setItem('token', response?.token || '');
        if (response?.ok) {
            auth()
                .then((user) => {
                    localStorage.setItem('token', response?.token || '');
                    dispatch(authSlice.actions.authUser(user));
                    dispatch(setSession());
                })
                .catch(console.error);
        } else {
            //message.error(response.errors);
        }
    } catch (error) {
        console.error(error);
    } 
};

export const logoutAction = () => async (dispatch: AppDispatch) => {    
    try {
        await dispatch(authSlice.actions.authUser({} as User));
        await dispatch(deleteSession());
    } catch (error) {
        console.error(error);
    }
};


export const setAuthUserAction = (user: User) => async (dispatch: AppDispatch) => {
    await dispatch(authSlice.actions.authUser(user));
};


export const AuthData = (state:RootState) => state.auth;
export const { authUser } = authSlice.actions;
export const { updateAccessToken } = authSlice.actions;
export default authSlice.reducer;