export interface FormField {
    type: string;
    name: string;
    label: string;
    value?: string | number;
    placeholder?: string;
    validationProps?: [ValidationRule];
    selectOptions?: any;
    selectedOption?: any;
    disabled?: boolean;
}

export interface ValidationRule {
    required?: boolean;
    message?: string;
}