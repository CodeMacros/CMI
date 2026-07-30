import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-outward',
  imports: [RouterOutlet],
  templateUrl: './outward.html',
  styleUrl: './outward.css',
})
export class Outward implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void { }

  onActionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value) {
      this.router.navigate(['/layout/outward/', value]);
    }
  }
}
