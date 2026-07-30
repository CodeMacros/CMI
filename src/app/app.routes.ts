import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { LayoutComponent } from './layout-component/layout-component';
import { Inward } from './inward/inward';
import { Cashier } from './cashier/cashier';
import { Approval } from './approval/approval';
import { AllPopup } from './all-popup/all-popup';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadComponent: () => import('./login/login').then(c => c.Login) },
    {
        path: 'layout', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard').then(c => c.Dashboard) },
            { path: 'cashier', loadComponent: () => import('./cashier/cashier').then(c => c.Cashier) },
            // { path: 'inward', loadComponent: () => import('./inward/inward').then(c => c.Inward) },
            {
        path: 'inward',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./inward/inward').then(c => c.Inward)
          },
          {
            path: 'newBusiness',
            loadComponent: () =>
              import('./inward/new-business/new-business')
                .then(c => c.NewBusiness)
          },
        //   {
        //     path: 'scmc',
        //     loadComponent: () =>
        //       import('./inward/scmc/scmc')
        //         .then(c => c.Scmc)
        //   },
        //   {
        //     path: 'credit-life',
        //     loadComponent: () =>
        //       import('./inward/credit-life/credit-life')
        //         .then(c => c.CreditLife)
        //   }
        ]
      }
        ]
    },
    // { path: 'cashier', component: Cashier },
    { path: 'approval', component: Approval },
    { path: 'popup', component: AllPopup }
];


