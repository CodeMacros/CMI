import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Scmcentry } from './scmcentry/scmcentry';
import { Pacashierentry } from './pacashierentry/pacashierentry';

@Component({
  selector: 'app-cashier-entry',
  imports: [CommonModule, FormsModule, Scmcentry, Pacashierentry],
  templateUrl: './cashier-entry.html',
  styleUrl: './cashier-entry.css',
})
export class CashierEntry {

  selectedCategory = '';
  subOptions: string[] = [];
  selectedSubOption = '';

  cashierData: any = {
    'Individual': [
      'Initial',
      'Renewal',
      'Loan Repayment'
    ],

    'Group': [
      'Rin Raksha',
      'Credit Life'
    ],

    'Sahara': [],

    'SCMC & Other Cashiering': [
      'SCMC Entry',
      'PA Cashier Entry'
    ],

    'Edit Cashier Entry': []
  };

  onCategoryChange() {
    this.subOptions = this.cashierData[this.selectedCategory] || [];
  }

// onSubOptionChange(): void {
//   // No routing required
//   console.log(this.selectedSubOption);
// }
}
