import { Routes } from '@angular/router';
import { Billing } from './billing/billing';


export const GROUP_VALIDATION_BILLING_ROUTES: Routes = [

    {
        path: 'add-remove',
        loadComponent: () => import('./add-remove/add-remove').then(c => c.AddRemove)
    },
    {
        path: 'billing',
        component: Billing,
        children: [
            { path: 'billing-entry', loadComponent: () => import('./billing/billing-entry/billing-entry').then(c => c.BillingEntry) },
            { path: 'cancel-money', loadComponent: () => import('./billing/cancel-money/cancel-money').then(c => c.CancelMoney) },
            { path: 'rin-raksha-cancel-money', loadComponent: () => import('./billing/rin-raksha-cancel-money/rin-raksha-cancel-money').then(c => c.RinRakshaCancelMoney) }
        ]
    },
    {
        path: 'ifsc-upload',
        loadComponent: () => import('./ifsc-upload/ifsc-upload').then(c => c.IfscUpload)
    },
    {
        path: 'update-lan-suraksha',
        loadComponent: () => import('./update-lansuraksha-details/update-lansuraksha-details').then(c => c.UpdateLANSurakshaDetails)
    },


]