import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-individual',
  imports: [RouterModule, FormsModule],
  templateUrl: './individual.html',
  styleUrl: './individual.css',
})
export class Individual implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) { }
  selectedAction = '';

  ngOnInit(): void {
    this.route.firstChild?.url.subscribe(url => {
      if (url.length) {
        this.selectedAction = url[0].path;
      }
    });
  }

  onActionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;

    this.selectedAction = value;

    this.router.navigate(['/layout/cda/individual', value]);
  }
}
