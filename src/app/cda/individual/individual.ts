import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-individual',
  imports: [RouterModule],
  templateUrl: './individual.html',
  styleUrl: './individual.css',
})
export class Individual implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onActionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value) {
      this.router.navigate(['/layout/cda/individual', value]);
    }
  }
}
