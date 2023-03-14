import {SessionState, sessionSlice} from '../session/session.slice';
import {NavigationState, MenuItem} from './types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';


const initialState: NavigationState = {    
    selectedMenu: {
        key: '',
        path: '',
        component: '',
    }
};

export const navigationSlice = createSlice({
    name: 'navigationSlice',
    initialState,
    reducers: {
        setNavigation: (state, action: PayloadAction<MenuItem>) =>  {
            state.selectedMenu = action.payload;                                        
        }
    },
});

export const {setNavigation} = navigationSlice.actions;

export const currentSelectedMenu = (state: RootState) => state.navigation.selectedMenu;

export default navigationSlice.reducer;