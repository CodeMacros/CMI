import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-new-business',
  imports: [RouterOutlet],
  templateUrl: './new-business.html',
  styleUrl: './new-business.css',
})
export class NewBusiness {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onActionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value) {
      this.router.navigate(['/layout/inward/new-business', value]);
    }
  }
}
