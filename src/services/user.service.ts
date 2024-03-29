import axios from 'axios';
import {Org, User} from '../redux/auth/types';
import { handleErrors } from './ErrorHandler';
import { Response } from './Response';

export async function updateProfile(profileData:Partial<User>): Promise<Response> {
	try {
		const response = await axios.patch<User>(`/users/updateProfile`, profileData, {
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

