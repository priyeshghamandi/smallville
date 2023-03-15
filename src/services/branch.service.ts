import axios from 'axios';
import { Branch } from '../redux/branch/types';
import { handleErrors } from './ErrorHandler';
import { Response } from './Response';

export async function createNewBranch(name: string, address: string): Promise<Response> {
    try {
        const response = await axios.post<Branch>(`/branch/`, {name, address}, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
			},
		});
		return { ok: true, response: response.data };        
    } catch (error) {
        return handleErrors(error)        
    }
}

export async function getAllBranches(): Promise<Response> {
    try {
        const response = await axios.get<Branch>(`/branch/`, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
			},
		});
		return { ok: true, response: response.data };        
    } catch (error) {
        return handleErrors(error)        
    }
}

export async function getAllBranchByID(id: string): Promise<Response> {
    try {
        const response = await axios.get<Branch>(`/branch/${id}`, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
			},
		});
		return { ok: true, response: response.data };        
    } catch (error) {
        return handleErrors(error)        
    }
}


export async function updateBranchByID(id: string, attrs: Partial<Branch>): Promise<Response> {
    try {
        const response = await axios.patch<Branch>(`/branch/${id}`, attrs, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
			},
		});
		return { ok: true, response: response.data };        
    } catch (error) {
        return handleErrors(error)        
    }
}

export async function deleteBranchByID(id: string): Promise<Response> {
    try {
        const response = await axios.delete<Branch>(`/branch/${id}`, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
			},
		});
		return { ok: true, response: response.data };        
    } catch (error) {
        return handleErrors(error)        
    }
}