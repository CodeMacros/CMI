import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-daily-cash-book',
  imports: [RouterModule, FormsModule],
  templateUrl: './daily-cash-book.html',
  styleUrl: './daily-cash-book.css',
})
export class DailyCashBook implements OnInit {
  
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
