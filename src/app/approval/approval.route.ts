import { Routes } from '@angular/router';
import { Approval } from './approval';

export const APPROVAL_ROUTES: Routes = [
    {
        path: '',
        component: Approval,
        children: [
            {
                path: 'cashier-entry',
                loadComponent: () => import('./cashier-entry/cashier-entry').then(c => c.CashierEntry)
            },
            {
                path: 'sahara-cashier-entry',
                loadComponent: () => import('./sahara-cashier-entry/sahara-cashier-entry').then(c => c.SaharaCashierEntry)
            },
            {
                path: 'loan-repayment',
                loadComponent: () => import('./loan-repayment/loan-repayment').then(c => c.LoanRepayment)
            },
            {
                path: 'edit-cashier-entry',
                loadComponent: () => import('./edit-cashier-entry/edit-cashier-entry').then(c => c.EditCashierEntry)
            },
            {
                path: 'pa-cashier-entry',
                loadComponent: () => import('./pa-cashier-entry/pa-cashier-entry').then(c => c.PaCashierEntry)
            },
            {
                path: 'cancel-cashier-entry',
                loadComponent: () => import('./cancel-cashier-entry/cancel-cashier-entry').then(c => c.CancelCashierEntry)
            },
            {
                path: 'micr-code',
                loadComponent: () => import('./micr-code/micr-code').then(c => c.MicrCode)
            },
            {
                path: 'eft-approve-cashier',
                loadComponent: () => import('./eft-approve-cashier/eft-approve-cashier').then(c => c.EftApproveCashier)
            },
            {
                path: 'rpp-cashier',
                loadComponent: () => import('./rpp-cashier/rpp-cashier').then(c => c.RppCashier)
            },
        ]
    }
]