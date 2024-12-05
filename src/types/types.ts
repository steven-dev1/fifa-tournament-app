

export interface NavLinks {
    route: string;
    label: string;
    icon?: string
}

export interface FormValues {
    tower: number;
    apartment: number;
};

export interface DataForm {
    tower: number;
    apto: number;
    age: number;
    name?: string;
    last_name?: string;
    cellphone?: string;
}