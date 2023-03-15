import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getAllBranches, getAllBranchByID, createNewBranch, updateBranchByID, deleteBranchByID} from '../../services/branch.service';
import { AppDispatch, RootState } from '../store';
import { Branch, BranchState } from './types';
import {studentCategorySlice} from '../student-category/student-category.slice';

const initialState: BranchState = {
    branches: [],
    branch: {} as Branch
}

export const branchSlice = createSlice({
    name: 'branchSlice',
    initialState,
    reducers: {
        setBranches: (state, action: PayloadAction<Branch[]>) => {
            state.branches = action.payload;
        },
        setBranch: (state, action: PayloadAction<Branch>) => {
            state.branch = action.payload;
        },
        addBranch: (state, action: PayloadAction<Branch>) => {
            state.branches?.push(action.payload);
        },
        updateBranch: (state, action: PayloadAction<Branch>) => {
            const branch = action.payload;
            const index = state.branches?.findIndex((item) => item.id === branch.id);
            if (index !== undefined) {
                state.branches[index] = branch;
            }
        },
        deleteBranch: (state, action: PayloadAction<Branch>) => {
            state.branches = state.branches?.filter((item) => item.id !== action.payload.id);
        }
    }
});

export const setBranchesAction = () => async (dispatch: AppDispatch) => {
    const data = await getAllBranches();
    if(data.ok) dispatch(setBranches(data.response));    
}

export const setBranchAction = (id: string) => async (dispatch: AppDispatch) => {
    const data = await getAllBranchByID(id);
    if(data.ok) dispatch(setBranch(data.response));    
}

export const addBranchAction = (name: string, address: string) => async (dispatch: AppDispatch) => {
    const data = await createNewBranch(name, address);
    if(data.ok) dispatch(addBranch(data.response));
}

export const updateBranchAction = (id: string, name: string, address: string) => async (dispatch: AppDispatch) => {
    const data = await updateBranchByID(id, {name, address});
    if(data.ok) dispatch(updateBranch(data.response));
}

export const deleteBranchAction = (id: string) => async (dispatch: AppDispatch) => {
    const data = await deleteBranchByID(id);
    if(data.ok) dispatch(deleteBranch(data.response));
}

export const { setBranches, setBranch, addBranch, updateBranch, deleteBranch } = branchSlice.actions;
export default branchSlice.reducer;