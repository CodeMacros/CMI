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
       children: [
      {
        path: '',
        redirectTo: 'scmc-entry',
        pathMatch: 'full'
      },
      {
        path: 'scmc-entry',
        loadChildren: () =>
          import('./cashier-entry/cashier-entry.route').then(
            m => m.CASHIER_ENTRY_ROUTES
          )
      }
    ]
    },
    {
        path: 'reports',
        component: Reports,
    },

    
]



// {
//         path: 'layout', component: LayoutComponent,
//         children: [
//             { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard').then(c => c.Dashboard) },
//             // { path: 'cashier', loadComponent: () => import('./cashier/cashier').then(c => c.Cashier) },
//             // { path: 'inward', loadComponent: () => import('./inward/inward').then(c => c.Inward) },

//             {
//                 path: 'inward',
//                 loadChildren: () =>
//                     import('./inward/inward.route').then(r => r.INWARD_ROUTES)
//             },
//             {
//                 path: 'cashier',
//                 loadChildren: () =>
//                     import('./cashier/cashier.route').then(r => r.CASHIER_ROUTES)
//             },
//         ]
//     },