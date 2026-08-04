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
      { path: 'intial', loadComponent: () => import('./cashier-entry/intial/intial').then(c => c.Intial) },
      { path: 'pa-cashier-entry', loadComponent: () => import('./cashier-entry/pacashierentry/pacashierentry').then(c => c.Pacashierentry) },
      { path: 'loanRepayment', loadComponent: () => import('./cashier-entry/loan-repayment/loan-repayment').then(c => c.LoanRepayment) },
      {
        path: 'group', loadComponent: () => import('./cashier-entry/group/group').then(c => c.Group),
        children: [{
          path: 'rinRaksha', loadComponent: () => import('./cashier-entry/group/rin-raksha/rin-raksha').then(c => c.RinRaksha)
        }]
      },
    ]
  },
  {
    path: 'reports',
    component: Reports,
  },


  // {
  //     path: 'pa-cashier-entry',
  //     component: Pacashierentry, 
  // },
  // {
  //     path: 'intial',
  //     component: Intial,
  // }

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