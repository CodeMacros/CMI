import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-fund-transfer',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './fund-transfer.html',
  styleUrl: './fund-transfer.css',
})
export class FundTransfer implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onActionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value) {
      this.router.navigate(['/layout/fund-transfer/', value]);
    }
  }
}
