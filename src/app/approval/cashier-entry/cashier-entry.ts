import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cashier-entry',
  imports: [CommonModule, FormsModule],
  templateUrl: './cashier-entry.html',
  styleUrl: './cashier-entry.css',
})
export class CashierEntry {
  isSearchOpen = false;
  searchType = '';
  fromDate = '';
  toDate = '';

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
  };
  impsStatus = 'Success';

}
