import axios from 'axios';
import {Org, User} from '../redux/auth/types';

export async function getOrgBySubdomain(subdomain: string): Promise<Org> {
	try {
		const response = await axios.get<Org>(`/orgs/${subdomain}`, {
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