import axios from 'axios';
import { StudentCategory } from '../redux/student-category/types';
import {handleErrors} from './ErrorHandler';
import { Response } from './Response';

export async function getAllStudentCategories() {
    try {
        const response = await axios.get<StudentCategory[]>(`/student-category`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        });
        return { ok: true, response: response.data };
    } catch (e) {
        return handleErrors(e);
    }        
}

export async function createStudentCategory(studentCategory:StudentCategory): Promise<Response> {
    try {
        const response = await axios.post<StudentCategory>(`/student-category`, studentCategory, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        });
        return { ok: true, response: response.data };
    } catch (e) {
        return handleErrors(e);
    }
}

export async function updateCategory(studentCategoryData:Partial<StudentCategory>, id: string): Promise<Response> {
    try {
        const response = await axios.patch<StudentCategory>(`/student-category/${id}`, studentCategoryData, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        });
        return { ok: true, response: response.data };
    } catch (e) {
        return handleErrors(e);
    }
}

export async function deleteCategory(id: string): Promise<Response> {
    try {
        const response = await axios.delete<StudentCategory>(`/student-category/${id}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        });
        return { ok: true, response: response.data };
    } catch (e) {
        return handleErrors(e);
    }
}