import { Routes } from '@angular/router';
import { CollectionBank } from './collection-bank/collection-bank';
import { DailyCashBook } from './daily-cash-book/daily-cash-book';

export const EOD_ROUTES: Routes = [
    {
        path: 'collection-bank',
        component: CollectionBank,
        children: [
            { path: 'select-collection-bank', loadComponent: () => import('./collection-bank/select-collection-bank/select-collection-bank').then(c => c.SelectCollectionBank) },
            { path: 'add-collection-bank', loadComponent: () => import('./collection-bank/add-collection-bank/add-collection-bank').then(c => c.AddCollectionBank) },
            { path: 'deactive-collection-bank', loadComponent: () => import('./collection-bank/deactive-collection-bank/deactive-collection-bank').then(c => c.DeactiveCollectionBank) },
            { path: 'approve-collection-bank', loadComponent: () => import('./collection-bank/approve-collection-bank/approve-collection-bank').then(c => c.ApproveCollectionBank) },
        ]
    },
    {
        path: 'daily-cash-book',
        component: DailyCashBook,
        children: [
            { path: 'approve-dcb', loadComponent: () => import('./daily-cash-book/approve-dcb/approve-dcb').then(c => c.ApproveDcb) },
            { path: 'capture-modify-dcb', loadComponent: () => import('./daily-cash-book/capture-modify-dcb/capture-modify-dcb').then(c => c.CaptureModifyDcb) },
            { path: 'view-dcb', loadComponent: () => import('./daily-cash-book/view-dcb/view-dcb').then(c => c.ViewDcb) },
        ]
    },
    { path: 'pending-instrument-report', loadComponent: () => import('./pending-instrument-report/pending-instrument-report').then(c => c.PendingInstrumentReport) },
    { path: 'mark-unmark-non-lodgement', loadComponent: () => import('./mark-unmark/mark-unmark').then(c => c.MarkUnmark) },
    { path: 'sahara-policy-update', loadComponent: () => import('./sahara-policy-update/sahara-policy-update').then(c => c.SaharaPolicyUpdate) },
]