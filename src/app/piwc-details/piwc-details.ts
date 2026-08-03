import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-piwc-details',
  imports: [RouterModule, FormsModule],
  templateUrl: './piwc-details.html',
  styleUrl: './piwc-details.css',
})
export class PiwcDetails implements OnInit {
  selectedType: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.firstChild?.url.subscribe(url => {
        if (url.length) {
          this.selectedType = url[0].path;
        }
      });
  }

  onActionChange(): void {
    if (this.selectedType) {
      this.router.navigate([this.selectedType], {
        relativeTo: this.route
      });
    }
  }
}
