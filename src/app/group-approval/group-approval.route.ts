import { Routes } from '@angular/router';


export const GROUP_APPROVAL_ROUTES: Routes = [
    
                {
                    path: 'approve-cashier-entry',
                    loadComponent: () => import('./approve-cashier-entry/approve-cashier-entry').then(c => c.ApproveCashierEntry)
                },
                {
                    path: 'realise-cheque',
                    loadComponent: () => import('./realise-chequ/realise-chequ').then(c => c.RealiseChequ)
                },
                {
                    path: 'cancel-money-admin',
                    loadComponent: () => import('./cancel-money-admin/cancel-money-admin').then(c => c.CancelMoneyAdmin)
                },
                {
                    path: 'approve-cashieiring-of-feed-not-received',
                    loadComponent: () => import('./approve-cashieiring-of-feed-not-received/approve-cashieiring-of-feed-not-received').then(c => c.ApproveCashieiringOfFeedNotReceived)
                },
                {
                    path: 'rin-raksha-cancel-money-admin',
                    loadComponent: () => import('./rin-raksha-cancel-money-admin/rin-raksha-cancel-money-admin').then(c => c.RinRakshaCancelMoneyAdmin)
                },

]