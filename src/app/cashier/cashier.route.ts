import { Routes } from '@angular/router';
import { BulkUpload } from './bulk-upload/bulk-upload';
import { CashierEntry } from './cashier-entry/cashier-entry';
import { Reports } from './reports/reports';


export const CASHIER_ROUTES: Routes = [
  {
    path: 'bulk-upload',
    component: BulkUpload,
    children: [
      { path: 'eft-file', loadComponent: () => import('./bulk-upload/eft-upload/eft-upload').then(c => c.EftUpload) },
      { path: 'cashier-entry-file', loadComponent: () => import('./bulk-upload/cashier-entry-upload/cashier-entry-upload').then(c => c.CashierEntryUpload) },
      { path: 'online-payment-file', loadComponent: () => import('./bulk-upload/online-payment-upload/online-payment-upload').then(c => c.OnlinePaymentUpload) },
      { path: 'rpp-payment-file', loadComponent: () => import('./bulk-upload/rpp-payment-upload/rpp-payment-upload').then(c => c.RppPaymentUpload) },
    ]
  },
  {
    path: 'cashier-entry',
    component: CashierEntry,
    children: [
      { path: 'intial', loadComponent: () => import('./cashier-entry/intial/intial').then(c => c.Intial) },
      { path: 'pa-cashier-entry', loadComponent: () => import('./cashier-entry/pacashierentry/pacashierentry').then(c => c.Pacashierentry) },
      { path: 'loanRepayment', loadComponent: () => import('./cashier-entry/loan-repayment/loan-repayment').then(c => c.LoanRepayment) },
      {
        path: 'renewal', loadComponent: () => import('./cashier-entry/renewal/renewal').then(c => c.Renewal),
        children: [
          // { path: 'renewal-document', loadComponent: () => import('./cashier-entry/re/renewal-document/renewal-document').then(c => c.RenewalDocument) },
          { path: 'renewal-payment', loadComponent: () => import('./cashier-entry/renewal/renewal-payment/renewal-payment').then(c => c.RenewalPayment) },
          { path: 'renewal-revival-premium', loadComponent: () => import('./cashier-entry/renewal/renewal-revival-premium/renewal-revival-premium').then(c => c.RenewalRevivalPremium) },
          { path: 'renewal-top-up', loadComponent: () => import('./cashier-entry/renewal/renewal-top-up/renewal-top-up').then(c => c.RenewalTopUp) },
          { path: 'renewal-cda-charges', loadComponent: () => import('./cashier-entry/renewal/renewal-cda-charges/renewal-cda-charges').then(c => c.RenewalCdaCharges) },
        ]
      },
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
    children: [
      { path: 'view-cashier-entry', loadComponent: () => import('./reports/view-cashier-entry/view-cashier-entry').then(c => c.ViewCashierEntry) },
      { path: 'cash-deposit-slip', loadComponent: () => import('./reports/cash-deposit-slip/cash-deposit-slip').then(c => c.CashDepositSlip) },
      { path: 'duplicate-deposit-slip', loadComponent: () => import('./reports/duplicate-deposit-slip/duplicate-deposit-slip').then(c => c.DuplicateDepositSlip) },
      { path: 'cashier-slip', loadComponent: () => import('./reports/cashier-slip/cashier-slip').then(c => c.CashierSlip) },
      { path: 'scmc-file-upload', loadComponent: () => import('./reports/scmcfile-upload/scmcfile-upload').then(c => c.SCMCFileUpload) },
      { path: 'ip-cashier-entry', loadComponent: () => import('./reports/ipcashier-entry/ipcashier-entry').then(c => c.IPCashierEntry) },
      { path: 'view-receipt', loadComponent: () => import('./cashier-entry/intial/intial').then(c => c.Intial) },
      { path: 'descriptive-rating-sheet-search', loadComponent: () => import('./reports/descriptive-rating-sheet-search-instrument-no/descriptive-rating-sheet-search-instrument-no').then(c => c.DescriptiveRatingSheetSearchInstrumentNo) },
      { path: 'pending-instrument-report', loadComponent: () => import('./reports/pending-instrument-report/pending-instrument-report').then(c => c.PendingInstrumentReport) },
      { path: 'sahara', loadComponent: () => import('./reports/sahara/sahara').then(c => c.Sahara) },
      { path: 'reprint', loadComponent: () => import('./reports/reprint/reprint').then(c => c.Reprint) }
    ]
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


