import { Component } from '@angular/core';
import { Header } from '../header/header';
import { VerticalMenu } from '../vertical-menu/vertical-menu';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-approval',
  imports: [Header, VerticalMenu, CommonModule, FormsModule],
  templateUrl: './approval.html',
  styleUrl: './approval.css',
})
export class Approval {
  isSearchOpen = false;
  searchType = '';
  fromDate = '';
  toDate = '';

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
  };

  impsStatus = 'Success';
}
