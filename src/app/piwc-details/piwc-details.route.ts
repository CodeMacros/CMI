import { Routes } from '@angular/router';
import { PiwcDetails } from './piwc-details';

export const PIWC_DETAILS_ROUTES: Routes = [
    {
        path: '',
        component: PiwcDetails,
        children: [
            {
                path: 'upload',
                loadComponent: () => import('./upload-piwc/upload-piwc').then(c => c.UploadPiwc)
            },
            {
                path: 'view',
                loadComponent: () => import('./view-piwc/view-piwc').then(c => c.ViewPiwc)
            },
            {
                path: 'extraction',
                loadComponent: () => import('./piwc-entraction/piwc-entraction').then(c => c.PiwcEntraction)
            },
        ]
    }
]