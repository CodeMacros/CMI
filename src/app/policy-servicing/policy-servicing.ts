import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-policy-servicing',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './policy-servicing.html',
  styleUrl: './policy-servicing.css',
})
export class PolicyServicing implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onActionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value) {
      this.router.navigate(['/layout/policy-servicing/', value]);
    }
  }
}
