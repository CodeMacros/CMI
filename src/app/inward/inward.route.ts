import { Routes } from '@angular/router';
import { Inward } from './inward';
import { NewBusiness } from './new-business/new-business';
import { Renewal } from './renewal/renewal';
import { TrackEdit } from './track-edit/track-edit';
import { CorrectAWBNumber } from './correct-awbnumber/correct-awbnumber';

export const INWARD_ROUTES: Routes = [
    {
        path: 'new-business',
        component: NewBusiness,
        children: [
            { path: 'miscellaneous-inward', loadComponent: () => import('./new-business/miscellaneous-inward/miscellaneous-inward').then(c => c.MiscellaneousInward) },
            { path: 'discrepancy-inward', loadComponent: () => import('./new-business/discrepancy-inward/discrepancy-inward').then(c => c.DiscrepancyInward) },
            { path: 'claim-inward', loadComponent: () => import('./new-business/claim-inward/claim-inward').then(c => c.ClaimInward) },
        ]
    },
    {
        path: 'renewal',
        component: Renewal,
        children: [
            { path: 'renewal-document', loadComponent: () => import('./renewal/renewal-document/renewal-document').then(c => c.RenewalDocument) },
        ]
    },
    {
        path: 'track-edit',
        component: TrackEdit,
        children: [
            { path: 'track-inward', loadComponent: () => import('./track-edit/track-inward/track-inward').then(c => c.TrackInward) },
            { path: 'edit-inward', loadComponent: () => import('./track-edit/edit-inward/edit-inward').then(c => c.EditInward) },
        ]
    },
    {
        path: 'correct-awb-number',
        component: CorrectAWBNumber,
    },

]