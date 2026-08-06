import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-inward',
  imports: [RouterModule],
  templateUrl: './inward.html',
  standalone: true,
  styleUrl: './inward.css',
})
export class Inward implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onActionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value) {
      this.router.navigate(['/layout/inward/', value]);
    }
  }
}



