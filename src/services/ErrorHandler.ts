import { message as notification} from '../notifications/toast';
import { Response } from './Response';
export function handleErrors(e: any): Response {
	let response: any = {};
	try {
		if (e?.response?.data) {
			const { error, errors } = e.response.data;
			response.ok = false;
			if (error) {
				const message = e.response.data.message;
				notification.error(message);
				response.errors = Array.isArray(message) ? message[0] : message;
			} else if (errors) {
				response.errors = e.response.data.errors[0].message;
			}
		}
	} catch (error) {
		console.error(error);
	}	
	return response;
}