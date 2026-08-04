import { Routes } from '@angular/router';
import { AutoOutward } from './auto-outward';

export const AUTOOUTWARD_ROUTES: Routes = [
    {
        path: '',
        component: AutoOutward,
        children: [
            {
                path: 'initial',
                loadComponent: () => import('./initial/initial').then(c => c.Initial)
            },
            {
                path: 'renewal',
                loadComponent: () => import('./renewal/renewal').then(c => c.Renewal)
            },
            {
                path: 'group',
                loadComponent: () => import('./group/group').then(c => c.Group)
            },
            {
                path: 'pslbPayouts',
                loadComponent: () => import('./pslb-payout/pslb-payout').then(c => c.PslbPayout)
            },
        ]
    }
]