import {createSlice, current, PayloadAction} from '@reduxjs/toolkit';
import {createStudentCategory, deleteCategory, getAllStudentCategories, updateCategory} from '../../services/student-category.service';
import { AppDispatch, RootState } from '../store';
import { StudentCategory, StudentCategoryState } from './types';

const initialState: StudentCategoryState = {
    studentCategories: [],
    studentCategory: {} as StudentCategory
}

export const studentCategorySlice = createSlice({
    name: 'studentCategorySlice',
    initialState,
    reducers: {
        setStudentCategories: (state, action: PayloadAction<StudentCategory[]>) => {
            state.studentCategories = action.payload;
        },
        setStudentCategory: (state, action: PayloadAction<StudentCategory>) => {
            state.studentCategory = action.payload;
        },
        addStudentCategory: (state, action: PayloadAction<StudentCategory>) => {
            state.studentCategories?.push(action.payload);
        },
        updateStudentCategory: (state, action: PayloadAction<StudentCategory>) => {
            const studentCategory = action.payload;
            const index = state.studentCategories?.findIndex((item) => item.id === studentCategory.id);
            if (index !== undefined) {
                state.studentCategories[index] = studentCategory;
            }
        },
        deleteStudentCategory: (state, action: PayloadAction<StudentCategory>) => {
            state.studentCategories = state.studentCategories?.filter((item) => item.id !== action.payload.id);
        }
    }
})

export const setStudentCategoriesAction = () => async (dispatch: AppDispatch) => {
    const data = await getAllStudentCategories();
    if(data.ok) dispatch(setStudentCategories(data.response));    
}

export const addStudentCategoryAction = (studentCategory: StudentCategory) => async (dispatch: AppDispatch) => {
    const data = await createStudentCategory(studentCategory);
    if(data.ok) dispatch(addStudentCategory(data.response));
}

export const updateStudentCategoryAction = (studentCategory: Partial<StudentCategory>, id: string) => async (dispatch: AppDispatch) => {
    const data = await updateCategory(studentCategory, id);
    if(data.ok) dispatch(updateStudentCategory(data.response));
}

export const deleteStudentCategoryAction = (id: string) => async (dispatch: AppDispatch) => {
    const data = await deleteCategory(id);
    if(data.ok) dispatch(deleteStudentCategory(data.response));
}

export const { setStudentCategories, setStudentCategory, addStudentCategory, updateStudentCategory, deleteStudentCategory } = studentCategorySlice.actions;

export default studentCategorySlice.reducer;

