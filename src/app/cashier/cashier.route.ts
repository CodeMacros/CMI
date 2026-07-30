import { Routes } from '@angular/router';
import { BulkUpload } from './bulk-upload/bulk-upload';
import { CashierEntry } from './cashier-entry/cashier-entry';
import { Reports } from './reports/reports';


export const CASHIER_ROUTES: Routes = [
    {
        path: 'bulk-upload',
        component: BulkUpload,
    },
    {
        path: 'cashier-entry',
        component: CashierEntry,
    },
    {
        path: 'reports',
        component: Reports,
    },
]