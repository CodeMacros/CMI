import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-daily-cash-book',
  imports: [RouterModule],
  templateUrl: './daily-cash-book.html',
  styleUrl: './daily-cash-book.css',
})
export class DailyCashBook implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onActionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value) {
      this.router.navigate(['/layout/eod/daily-cash-book', value]);
    }
  }
}
