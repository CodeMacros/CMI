import { Routes } from '@angular/router';
import { FundTransfer } from './fund-transfer';

export const FUND_TRANSFER_ROUTES: Routes = [
    {
        path: '',
        component: FundTransfer,
        children: [
            {
                path: 'entry',
                loadComponent: () => import('./fund-transfer-entry/fund-transfer-entry').then(c => c.FundTransferEntry)
            },
            {
                path: 'approval',
                loadComponent: () => import('./fund-transfer-approval/fund-transfer-approval').then(c => c.FundTransferApproval)
            },
        ]
    }
]