import { Component } from '@angular/core';
import { DynamicDataTableModal } from '../../../../modal/dynamic-data-table';
import { DynamicDataTable } from '../../../../shared/dynamic-data-table/dynamic-data-table';

@Component({
  selector: 'app-renewal-revival-premium',
  imports: [DynamicDataTable],
  templateUrl: './renewal-revival-premium.html',
  styleUrl: './renewal-revival-premium.css',
})
export class RenewalRevivalPremium {


  revivalPremiumRows: DynamicDataTableModal[] = [
    {
      label: 'Premim Due',
      type: 'text',
      description: '31-07-2026',
      premiumValue: 1000,
      cashierValue: 1000
    },

    {
      label: 'Premium Advance',
      type: 'checkbox-group',
      options: [
        {
          checked: false,
          date: '31-08-2026',
          premium: 0,
          cashier: 0
        },
        {
          checked: false,
          date: '30-09-2026',
          premium: 0,
          cashier: 0
        },
        {
          checked: false,
          date: '31-10-2026',
          premium: 0,
          cashier: 0
        }
      ]
    },

    {
      label: 'Shortage Premium',
      type: 'text',
      premiumValue: 0,
      cashierValue: 0
    },

    {
      label: 'CDA Charges',
      type: 'text',
      premiumValue: 0,
      cashierValue: 0
    },

    {
      label: 'Interest Charges',
      type: 'text',
      premiumValue: 0,
      cashierValue: 0
    },

    {
      label: 'Deposit',
      type: 'text',
      premiumValue: 0,
      cashierValue: 0
    },

    {
      label: 'Excess',
      type: 'text',
      premiumValue: 0,
      cashierValue: 300
    },

    {
      label: 'Total Amount',
      type: 'text',
      premiumValue: 1250,
      cashierValue: 1500
    }
  ];
}
