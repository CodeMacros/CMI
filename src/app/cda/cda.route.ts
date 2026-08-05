import { Routes } from '@angular/router';
import { Individual } from './individual/individual';
import { Group } from './group/group';

export const CDA_ROUTES: Routes = [
    {
        path: 'individual',
        component: Individual,
        children: [
            { path: 'cda-file-upload', loadComponent: () => import('./individual/cda-file-upload/cda-file-upload').then(c => c.CdaFileUpload) },
            { path: 'view-cda-details', loadComponent: () => import('./individual/view-cda-details/view-cda-details').then(c => c.ViewCdaDetails) },
            { path: 'cda-intimation-letter', loadComponent: () => import('./individual/cda-intimation-letter/cda-intimation-letter').then(c => c.CdaIntimationLetter) },
        ]
    },
    {
        path: 'group',
        component: Group,
        children: [
            { path: 'cda-file-upload', loadComponent: () => import('./group/cda-file-upload/cda-file-upload').then(c => c.CdaFileUpload) },
            { path: 'cda', loadComponent: () => import('./group/cda/cda').then(c => c.Cda) },
            { path: 'cda-representation', loadComponent: () => import('./group/cda-representation/cda-representation').then(c => c.CdaRepresentation) },
            { path: 'print-intimation-letter', loadComponent: () => import('./group/print-intimation-letter/print-intimation-letter').then(c => c.PrintIntimationLetter) },
            { path: 'rinraksha-intimation-letter', loadComponent: () => import('./group/rinraksha-intimation-letter/rinraksha-intimation-letter').then(c => c.RinrakshaIntimationLetter) },
        ]
    }
]