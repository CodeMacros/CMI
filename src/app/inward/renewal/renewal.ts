import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-renewal',
  imports: [RouterOutlet],
  templateUrl: './renewal.html',
  styleUrl: './renewal.css',
})
export class Renewal {

  constructor(private router:Router){}


  onActionChange(event: Event): void {

    const value = (event.target as HTMLSelectElement).value;
    if (value) {
      this.router.navigate(['/layout/inward/renewal', value]);
    }
  }
}
