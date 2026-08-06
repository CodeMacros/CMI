import { Routes } from '@angular/router';
import { PolicyServicing } from './policy-servicing';

export const POLICY_SERVICING_ROUTES: Routes = [
    {
        path: '',
        component: PolicyServicing,
        children: [
            {
                path: 'payment-auth-registration',
                loadChildren: () =>
                    import('./payment-auth-registration/payment-auth-registration.route')
                        .then(r => r.PAYMENT_AUTH_REGISTRATION_ROUTES)
            }
        ]
    },

]
