import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-approval',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './approval.html',
  styleUrl: './approval.css',
})
export class Approval implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onActionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value) {
      this.router.navigate(['/layout/approval/', value]);
    }
  }
}
