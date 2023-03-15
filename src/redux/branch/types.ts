import { Org } from "../auth/types";

export interface Branch {
    id: string;
    name: string;
    address: string;   
    status: string;
    org: Org;
    date: Date;
}

export interface BranchState {
    branches?: Branch[];
    branch?: Branch;
}