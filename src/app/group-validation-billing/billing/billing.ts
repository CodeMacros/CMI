import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-billing',
  imports: [RouterModule, FormsModule],
  templateUrl: './billing.html',
  styleUrl: './billing.css',
})
export class Billing {
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

    this.router.navigate(['/layout/group-validation-billing/billing', value]);
  }

}
