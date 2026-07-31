import { Routes } from '@angular/router';
import { Scmcentry } from './scmcentry/scmcentry';
import { Pacashierentry } from './pacashierentry/pacashierentry';

export const CASHIER_ENTRY_ROUTES: Routes = [
    {
        path: 'scmc-entry',
        component: Scmcentry,
    },
    {
        path: 'pa-cashier-entry',
        component: Pacashierentry,
    }
]