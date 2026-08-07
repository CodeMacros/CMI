import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Renewal } from './renewal/renewal';

@Component({
  selector: 'app-cashier-entry',
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './cashier-entry.html',
  styleUrl: './cashier-entry.css',
})
export class CashierEntry {

  selectedCategory = '';
  subOptions: { label: string; value: string }[] = []


  cashierData: Record<string, { label: string; value: string }[]> = {
    group: [
      {
        label: 'Rin Raksha',
        value: 'rinRaksha'
      },
    ],

    renewal: [
      // {
      //   label: 'Rin Raksha',
      //   value: 'rinRaksha'
      // },
      {
        label: 'Renewal Payment',
        value: 'renewal-payment'
      },
      {
        label: 'Revival Premium',
        value: 'renewal-revival-premium'
      },
      {
        label: 'Renewal CDA charges',
        value: 'renewal-cda-charges'
      },
      {
        label: 'Top Up (applicable for ULIP)',
        value: 'renewal-top-up'
      },
    ],


  };



  constructor(private router: Router) { }

  ngOnInit(): void {

    const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];

    if (navEntries.length && navEntries[0].type === 'reload') {
      this.router.navigate(['/layout/cashier/cashier-entry']);
    }

  }


  onCategoryChange(event: Event): void {

    const value = (event.target as HTMLSelectElement).value;
    console.log(value);

    // Populate second dropdown
    if (value == 'group' || value == 'renewal') {
      this.subOptions = this.cashierData[value] || [];
      this.selectedCategory = value
    } else {
      // Reset previous selection
      // Navigate if required
      this.subOptions = []
      if (value) {
        this.router.navigate(['/layout/cashier/cashier-entry', value]);
      }

    }

  }


  onSubCategoryChange(event: Event): void {

    const value = (event.target as HTMLSelectElement).value;

    this.router.navigate([
      '/layout/cashier/cashier-entry',
      this.selectedCategory,
      value
    ]);

  }


}
