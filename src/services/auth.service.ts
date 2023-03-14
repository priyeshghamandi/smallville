import axios from 'axios';
import { LoginCredentials, NewStudent, NewUser, User } from '../redux/auth/types';
import { handleErrors } from './ErrorHandler';

export const isTokenPresentInLocalStorage = (): boolean => {
    return localStorage.getItem('token') !== null;
};

export interface AuthResponse {
    token?: string;
    ok: boolean;
    errors?: [];
}

export const getToken = () => localStorage.getItem('token') ?? '';

export async function auth(): Promise<User> {
	try {
		const response = await axios.get<User>('/auth/me', {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
			},
		});
		return response.data;
	} catch (e) {
		throw e;
	}
}

export async function signup(user: NewUser): Promise<AuthResponse> {
	try {
		const response = await axios.post<{ token: string }>('/auth/signup', user, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
			},
		});
		return { ok: true, token: response.data.token };
	} catch (err: any) {
		return handleErrors(err);
	}
}

export async function signin(loginCred: LoginCredentials): Promise<AuthResponse> {
    try {
        const response = await axios.post<{ token: string }>('auth/signin', loginCred, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        });        
        return { ok: true, token: response.data.token };
    } catch (err: any) {		
        return handleErrors(err);
    }
}

export async function signout(): Promise<{}> {
    try {
        await axios.post(
            'auth/signout',
            {},
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
            },
        );
        return {};
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export async function registerStudentToOrg(newStudent: NewStudent): Promise<AuthResponse> {
	try {
		const response = await axios.post<{ token: string }>('/auth/newStudent', newStudent, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
			},
		});
		return { ok: true, token: response.data.token };
	} catch (err: any) {
		return handleErrors(err);
	}
	
}