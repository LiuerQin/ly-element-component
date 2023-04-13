export interface MenuItem {
    id: string | number;
    path: string;
    text: string;
    icon?: string;
    type?: string;
    children?: MenuItem[]
}

export type MenuList = MenuItem[]