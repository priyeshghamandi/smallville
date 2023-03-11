export interface AuthState {
    user?: User;
    token?: string;
}

export interface User {
    id: string;
    avatar: string;
    name: string;
    email: string;
    status: string;
    type: string;
    gender: number;
    phone: string;
    token?: string;
    org: Org;
    branch: Branch;
    userMetadata?: IUserMetadata;
    verified: boolean;
    date: string;
}

export interface Org {
    id: string;
    name: string;
    subdomain: string;
    status: string;
    date: string;
}
export interface Branch {
    id: string;
    name: string;
    org: Org;
    status: string;
    date: string;
}

export interface NewUser {
    name: string;
    orgName: string;
    email: string;
    password: string;
    userMetadata?: IUserMetadata;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface IUserMetadata {
    ip: string;
    version: string;
    city: string;
    region: string;
    region_code: string;
    country: string;
    country_name: string;
    country_code: string;
    country_code_iso3: string;
    country_capital: string;
    country_tld: string;
    continent_code: string;
    in_eu: boolean;
    postal: string;
    latitude: number;
    longitude: number;
    timezone: string;
    utc_offset: string;
    country_calling_code: string;
    currency: string;
    currency_name: string;
    languages: string;
    country_area: number;
    country_population: number;
    asn: string;
    org: string;
}

export const UserTypes = {
    SUPER_ADMIN: 'SUPER_ADMIN',
    ADMIN: 'ADMIN',
    COACH: 'COACH',
    STUDENT: 'STUDENT'
}

export const UserStatus = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
}