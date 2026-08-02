import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-piwc-details',
  imports: [RouterModule],
  templateUrl: './piwc-details.html',
  styleUrl: './piwc-details.css',
})
export class PiwcDetails implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onActionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value) {
      this.router.navigate(['/layout/piwc-details/', value]);
    }
  }
}
