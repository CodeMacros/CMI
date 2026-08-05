export interface DynamicDataTableModal {
    label: string;
    type: PremiumRowType;

    description?: string;

    premiumValue?: number;
    cashierValue?: number;

    options?: PremiumAdvanceOption[];
}

export interface PremiumAdvanceOption {
    checked: boolean;
    date: string;
    premium: number;
    cashier: number;
}

export type PremiumRowType =
    | 'text'
    | 'checkbox'
    | 'checkbox-group';