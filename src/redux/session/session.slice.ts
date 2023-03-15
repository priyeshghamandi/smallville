import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface SessionState {
    isSessionValid: boolean; 
}

const initialState: SessionState = {
    isSessionValid: false
};

export const sessionSlice = createSlice({
    name: 'sessionSlice',
    initialState,
    reducers: {
        setSession: (state) =>  {
            state.isSessionValid = true;
        },
        deleteSession: () => {
            localStorage.removeItem('token');
            return { isSessionValid: false };
        },
    },
});

export const { deleteSession, setSession } = sessionSlice.actions;

export const sessionData = (state: RootState) => state.session;

export default sessionSlice.reducer;
