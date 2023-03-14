import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { addStudentToOrg, auth, signin, signout, signup } from '../../services/auth.service';
import { deleteSession, setSession } from '../session/session.slice';
import { AppDispatch, RootState } from '../store';
import { AuthState, Branch, LoginCredentials, NewStudent, NewUser, Org, User } from './types';

const initialState: AuthState = {
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
};

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        authUser(state, action: PayloadAction<User>) {         
            return action.payload;
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
        await signout();
        await dispatch(authSlice.actions.authUser({} as User));
        await dispatch(deleteSession());
    } catch (error) {
        console.error(error);
    }
};


export const addNewStudentAction = (student: NewStudent) => async (dispatch: AppDispatch) => {
    const response = await addStudentToOrg(student);
    localStorage.setItem('token', response?.token || '');
    if (response.ok) {
        auth()
            .then((student) => {
                localStorage.setItem('token', response?.token || '');
                dispatch(authSlice.actions.authUser(student));
                dispatch(setSession());
            })
            .catch(console.error);
        dispatch(authSlice.actions.updateAccessToken(response?.token));
        dispatch(setSession());
    } else {
        //message.error(response.errors);
    }
};

export const setAuthUserAction = (user: User) => async (dispatch: AppDispatch) => {
    await dispatch(authSlice.actions.authUser(user));
};


export const AuthData = (state:RootState) => state.auth;
export const { authUser } = authSlice.actions;
export const { updateAccessToken } = authSlice.actions;
export default authSlice.reducer;