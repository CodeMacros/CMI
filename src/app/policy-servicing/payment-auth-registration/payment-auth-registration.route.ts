import { Routes } from '@angular/router';
import { PaymentAuthRegistration } from './payment-auth-registration';

export const PAYMENT_AUTH_REGISTRATION_ROUTES: Routes = [
  {
    path: '',
    component: PaymentAuthRegistration,
    children: [
      {
        path: 'addpar',
        loadComponent: () =>
          import('../payment-auth-registration/addpar/addpar').then(c => c.Addpar)
      },
      {
        path: 'addsubpar',
        loadComponent: () =>
          import('../payment-auth-registration/addsubpar/addsubpar').then(c => c.Addsubpar)
      },
      {
        path: 'modifypar',
        loadComponent: () =>
          import('../payment-auth-registration/modifypar/modifypar').then(c => c.Modifypar)
      },
      {
        path: 'viewpar',
        loadComponent: () =>
          import('../payment-auth-registration/viewpar/viewpar').then(c => c.Viewpar)
      }
    ]
  }

]