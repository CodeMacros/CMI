import { Routes } from '@angular/router';
import { Outward } from './outward';

export const OUTWARD_ROUTES: Routes = [
    {
        path: '',
        component: Outward,
        children: [
            {
                path: 'auto',
                loadComponent: () => import('./auto-outward/auto-outward').then(c => c.AutoOutward)
            },
            {
                path: 'track',
                loadComponent: () => import('./track-outward/track-outward').then(c => c.TrackOutward)
            },
            {
                path: 'edit',
                loadComponent: () => import('./edit-outward/edit-outward').then(c => c.EditOutward)
            },
        ]
    }
]