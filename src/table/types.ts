export interface IHeader{
    text: string;
    value: string;
    selectable?: boolean;
}

export type IRow = {
    [key: string]: string | number;
    id: string | number;
}