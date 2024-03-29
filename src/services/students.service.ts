import axios from 'axios';
import {User} from '../redux/auth/types';
import {handleErrors} from './ErrorHandler';
import {Response} from './Response';

export async function updateStudentFromOrg(studentID: string,student:Partial<User>): Promise<Response> {
	try {
		const response = await axios.patch<User>(`/students/${studentID}`, student, {
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

export async function createStudent(student:Partial<User>): Promise<Response> {
	try {
		const response = await axios.post<User>(`/students/`, student, {
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

export async function getAllStudents(orgID:string) {
    try {
        const response = await axios.get<User[]>(`/students/`, {
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

export async function deleteStudentFromOrg(studentID: string): Promise<Response> {
	try {
		const response = await axios.delete<User>(`/students/${studentID}`, {
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