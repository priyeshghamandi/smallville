import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { User } from '../auth/types';
import { StudentsState } from './types';
import {createStudentCategory, deleteCategory, getAllStudentCategories, updateCategory} from '../../services/student-category.service';
import {AppDispatch} from '../store';
import {StudentCategory} from '../student-category/types';
import {getAllStudents, updateStudentFromOrg, deleteStudentFromOrg, createStudent} from '../../services/students.service';
import { message } from '../../notifications/toast';


const initialState: StudentsState = {
    student: {} as User,
    students: [],
}

export const studentsSlice = createSlice({
    name: 'studentsSlice',
    initialState,
    reducers: {
        setStudents: (state, action: PayloadAction<User[]>) => {
            state.students = action.payload;
        },
        setStudent: (state, action: PayloadAction<User>) => {
            state.student = action.payload;
        },
        addStudent: (state, action: PayloadAction<User>) => {
            state.students?.push(action.payload);
        },
        updateStudent: (state, action: PayloadAction<User>) => {
            const student = action.payload;
            const index = state.students?.findIndex((item) => item.id === student.id);
            if (index !== undefined) {
                state.students[index] = student;
            }
        },
        deleteStudent: (state, action: PayloadAction<User>) => {
            state.students = state.students?.filter((item) => item.id !== action.payload.id);
        }
    }
});

export const setStudentsAction = (orgID: string) => async (dispatch: AppDispatch) => {
    const data = await getAllStudents(orgID);
    if(data.ok) {
        dispatch(setStudents(data.response));
    }
}

export const addStudentAction = (student: Partial<User>) => async (dispatch: AppDispatch) => {
    const data = await createStudent(student);
    if(data.ok) {
        dispatch(addStudent(data.response));
        message.success('Student added successfully');
    }
}

export const updateStudentAction = (student: Partial<User>, id: string) => async (dispatch: AppDispatch) => {
    const data = await updateStudentFromOrg(id, student);
    if(data.ok) {
        dispatch(updateStudent(data.response));
        message.success('Student updated successfully');
    }
}

export const deleteStudentAction = (id: string) => async (dispatch: AppDispatch) => {
    console.log('delete student ', id);
    
    const data = await deleteStudentFromOrg(id);
    console.log({data});    
    if(data.ok) {
        console.log('data.response ', data.response);
        
        dispatch(deleteStudent(data.response));
        message.success('Student deleted successfully');
    }
}

export const { setStudents, setStudent, addStudent, updateStudent, deleteStudent } = studentsSlice.actions;
export default studentsSlice.reducer;