import { Routes } from '@angular/router';
import { Outward } from './outward';

export const OUTWARD_ROUTES: Routes = [
    {
        path: '',
        component: Outward,
        children: [
            {
                path: 'outward',
                loadComponent: () => import('./outward/outward').then(c => c.Outward)
            },
            {
                path: 'auto',
                loadChildren: () =>
                    import('./auto-outward/auto-outward.route').then(r => r.AUTOOUTWARD_ROUTES)
            },
            {
                path: 'track',
                loadComponent: () => import('./track-outward/track-outward').then(c => c.TrackOutward)
            },
            {
                path: 'edit',
                loadComponent: () => import('./edit-outward/edit-outward').then(c => c.EditOutward)
            },
            {
                path: 'correct-awb',
                loadComponent: () => import('./correct-awb/correct-awb').then(c => c.CorrectAwb)
            },
        ]
    }
]