import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-collection-bank',
  imports: [RouterModule],
  templateUrl: './collection-bank.html',
  styleUrl: './collection-bank.css',
})
export class CollectionBank implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onActionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value) {
      this.router.navigate(['/layout/eod/collection-bank', value]);
    }
  }
}
