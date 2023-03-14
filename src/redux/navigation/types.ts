export const types = {
    SET_NAVIGATION: 'SET_NAVIGATION',
}

export interface NavigationState {
    selectedMenu: MenuItem;
}

export interface MenuItem {
    key: string;
    path: string;
    component: any;
}
