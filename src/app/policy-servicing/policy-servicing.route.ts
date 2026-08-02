import { Routes } from '@angular/router';
import { PolicyServicing } from './policy-servicing';

export const POLICY_SERVICING_ROUTES: Routes = [
    {
        path: '',
        component: PolicyServicing,
        children: [
            {
                path: 'payment-auth-registration',
                loadComponent: () => import('./payment-auth-registration/payment-auth-registration').then(c => c.PaymentAuthRegistration)
            },
        ]
    }
]