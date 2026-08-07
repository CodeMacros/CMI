import { Routes } from '@angular/router';
import { Reprint } from './reprint';



export const REPRINT_ROUTES: Routes = [
   {
          path: '',
          component: Reprint,
          children: [
              {
                  path: 'proposalDepositReceipts',
                  loadComponent: () => import('./proposal-deposit-receipts/proposal-deposit-receipts').then(c => c.ProposalDepositReceipts)
              },
              {
                  path: 'renewalPremiumReceipts',
                  loadComponent: () => import('./renewal-premium-receipts/renewal-premium-receipts').then(c => c.RenewalPremiumReceipts)
              }
          ]
      }
]


