import { User } from "../auth/types";

export interface StudentsState {
    students: User[];
    student: User;
}