import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-outward',
  imports: [RouterOutlet],
  templateUrl: './outward.html',
  styleUrl: './outward.css',
})
export class Outward implements OnInit {
  autoDiv: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onActionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'auto') {
      this.autoDiv = true;
    } else {
      this.autoDiv = false;
      this.router.navigate(['/layout/outward/', value]);
    }
  }

  onAutoTypeChange(event: Event): void {

    const value = (event.target as HTMLSelectElement).value;

    console.log(value);
    this.router.navigate(['/layout/outward/auto/', value]);
  }
}
