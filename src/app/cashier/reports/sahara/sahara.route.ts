import { Routes } from '@angular/router';
import { Sahara } from './sahara';



export const SAHARA_ROUTES: Routes = [
   {
          path: '',
          component: Sahara,
          children: [
              {
                  path: 'saharaPolicyInquiry',
                  loadComponent: () => import('./sahara-policy-inquiry/sahara-policy-inquiry').then(c => c.SaharaPolicyInquiry)
              },
              {
                  path: 'saharaCashierReport',
                  loadComponent: () => import('./sahara-cashier-report/sahara-cashier-report').then(c => c.SaharaCashierReport)
              }
          ]
      }
]


