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
                path: 'cashier',
                loadChildren: () =>
                    import('./cashier/cashier.route').then(r => r.CASHIER_ROUTES)
            },
            {
                path: 'outward',
                loadChildren: () =>
                    import('./outward/outward.route').then(r => r.OUTWARD_ROUTES)
            },
        ]
    },
    // { path: 'cashier', component: Cashier },
    { path: 'approval', component: Approval },
    { path: 'popup', component: AllPopup },
    { path: '**', component: Login },

];


