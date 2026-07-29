import { ValidatorFn } from "@angular/forms";

export interface DynamicField {

    type: 'text' | 'email' | 'number' | 'date' | 'select';

    label: string;

    controlName: string;

    placeholder?: string;

    defaultValue?: any;

    required?: boolean;

    readonly?: boolean;

    disabled?: boolean;

    min?: string;

    max?: string;

    minLength?: number;

    maxLength?: number;

    pattern?: string | RegExp;

    patternMessage?: string;

    validators?: ValidatorFn[];

    allowOnlyNumbers?: boolean;

    options?: {
        label: string;
        value: any;
    }[];

}