import { ValidatorFn } from "@angular/forms";

export interface DynamicField {

    type: 'text' | 'email' | 'number' | 'date' | 'select' | 'textarea';

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

    showWhen?: {
        controlName: string;
        values: any[];
    };

    col?: string;

    triggerChange?: boolean

    visible? : boolean
}