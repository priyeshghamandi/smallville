import {Org} from '../auth/types';
export interface StudentCategory {
    id: string;
    name: string;
    fees: number;
    org: Org;
    date: Date;
}

export interface StudentCategoryState {
    studentCategories?: StudentCategory[];
    studentCategory?: StudentCategory;
}

