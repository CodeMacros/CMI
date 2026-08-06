import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { LayoutComponent } from './layout-component/layout-component';
import { Inward } from './inward/inward';
import { Cashier } from './cashier/cashier';
import { Approval } from './approval/approval';
import { AllPopup } from './all-popup/all-popup';
import { Login } from './login/login';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadComponent: () => import('./login/login').then(c => c.Login) },
    {
        path: 'layout', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard').then(c => c.Dashboard) },
            {
                path: 'inward',
                loadChildren: () =>
                    import('./inward/inward.route').then(r => r.INWARD_ROUTES)
            },
            {
                path: 'outward',
                loadChildren: () =>
                    import('./outward/outward.route').then(r => r.OUTWARD_ROUTES)
            },
            {
                path: 'cashier',
                loadChildren: () =>
                    import('./cashier/cashier.route').then(r => r.CASHIER_ROUTES)
            },
            {
                path: 'approval',
                loadChildren: () =>
                    import('./approval/approval.route').then(r => r.APPROVAL_ROUTES)
            },
            {
                path: 'eod',
                loadChildren: () =>
                    import('./eod-collection/eod-collection.route').then(r => r.EOD_ROUTES)
            },
            {
                path: 'cda',
                loadChildren: () =>
                    import('./cda/cda.route').then(r => r.CDA_ROUTES)
            },
              {
                path: 'group-validation-billing',
                loadChildren: () =>
                    import('./group-validation-billing/group-validation-billing.route').then(r => r.GROUP_VALIDATION_BILLING_ROUTES)
            },
             {
                path: 'group-approval',
                loadChildren: () =>
                    import('./group-approval/group-approval.route').then(r => r.GROUP_APPROVAL_ROUTES)
            },
            {
                path: 'fund-transfer',
                loadChildren: () =>
                    import('./fund-transfer/fund-transfer.route').then(r => r.FUND_TRANSFER_ROUTES)
            },
            {
                path: 'policy-servicing',
                loadChildren: () =>
                    import('./policy-servicing/policy-servicing.route').then(r => r.POLICY_SERVICING_ROUTES)
            },
            {
                path: 'piwc-details',
                loadChildren: () =>
                    import('./piwc-details/piwc-details.route').then(r => r.PIWC_DETAILS_ROUTES)
            },
        ]
    },
    { path: 'popup', component: AllPopup },
    { path: '**', component: Login },

];


